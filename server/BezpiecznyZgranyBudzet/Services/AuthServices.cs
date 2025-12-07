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

        public async Task<Guid> Login(string user_name,string user_password,string department)
        {
            // search for user in db return guid of session
            using var dbContext = await _factory.CreateDbContextAsync();

            var user = await dbContext.UserData
                .FirstOrDefaultAsync(x => x.UserName == user_name && x.UserPassword == user_password && x.Organisation == department);
            if (user == null)
            {
                return Guid.Empty;
            }

            if(user.SessionId == null)
            {
                user.SessionId = Guid.NewGuid();
                await dbContext.SaveChangesAsync();
            }

            return (Guid)user.SessionId;
        }

        public async Task Addusers()
        {
            await using var dbContext = await _factory.CreateDbContextAsync();

            var user1 = new UserData
            {
                UserName = "user1",
                UserPassword = "user1",
                Organisation = "Departament Finansów i Budzetu",
                SessionId = null
            };

            var user2 = new UserData
            {
                UserName = "user2",
                UserPassword = "user2",
                Organisation = "Departament Zdrowia",
                SessionId = null
            };

            var user3 = new UserData
            {
                UserName = "user3",
                UserPassword = "user3",
                Organisation = "Departament Edukacji",
                SessionId = null
            };

            var user4 = new UserData
            {
                UserName = "user4",
                UserPassword = "user4",
                Organisation = "Departament Transportu",
                SessionId = null
            };

            var user5 = new UserData
            {
                UserName = "user5",
                UserPassword = "user5",
                Organisation = "Departament Bezpieczeństwa",
                SessionId = null
            };

            var user6 = new UserData
            {
                UserName = "user6",
                UserPassword = "user6",
                Organisation = "Departament Infrastruktury",
                SessionId = null
            };

            var user7 = new UserData
            {
                UserName = "user7",
                UserPassword = "user7",
                Organisation = "Departament Środowiska",
                SessionId = null
            };

            var user8 = new UserData
            {
                UserName = "user8",
                UserPassword = "user8",
                Organisation = "Departament Kultury i Turystyki",
                SessionId = null
            };

            var user9 = new UserData
            {
                UserName = "admin",
                UserPassword = "admin",
                Organisation = "admin",
                SessionId = null
            };

            dbContext.UserData.Add(user1);
            dbContext.UserData.Add(user2);
            dbContext.UserData.Add(user3);
            dbContext.UserData.Add(user4);
            dbContext.UserData.Add(user5);
            dbContext.UserData.Add(user6);
            dbContext.UserData.Add(user7);
            dbContext.UserData.Add(user8);

            await dbContext.SaveChangesAsync();

            return;
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
