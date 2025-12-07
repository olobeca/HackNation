using BezpiecznyZgranyBudzet.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace BezpiecznyZgranyBudzet.Services
{
    public class AuthServices
    {
        private readonly IDbContextFactory<AppDbContext> _factory;

        public AuthServices(IDbContextFactory<AppDbContext> factory)
        {
            _factory = factory;
        }

        public async Task<Guid> Login(string user_name,string user_lastname,string user_password)
        {
            // search for user in db return guid of session
            await using var dbContext = await _factory.CreateDbContextAsync();

            var user = await dbContext.UserData
                .FirstOrDefaultAsync(x => x.UserName == user_name && x.UserLastName == user_lastname && x.UserPassword == user_password);
            if (user == null)
            {
                return Guid.Empty;
            }

            if(user.SessionId == null)
            {
                user.SessionId = Guid.NewGuid();
                await dbContext.SaveChangesAsync();
            }

            return user.SessionId.Value;
        }

        public async Task<bool> Logout(Guid session)
        {
            await using var dbContext = await _factory.CreateDbContextAsync();

            var user = await dbContext.UserData
                .FirstOrDefaultAsync(x => x.SessionId == session);

            if (user == null)
            {
                return false;
            }

            user.SessionId = null;
            await dbContext.SaveChangesAsync();

            return true;
        }
    }
}
