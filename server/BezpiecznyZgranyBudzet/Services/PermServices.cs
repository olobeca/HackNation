using BezpiecznyZgranyBudzet.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Npgsql.Replication.PgOutput.Messages;

namespace BezpiecznyZgranyBudzet.Services
{
    public class PermServices
    {
        private readonly IDbContextFactory<AppDbContext> _factory;

        public PermServices(IDbContextFactory<AppDbContext> factory)
        {
            _factory = factory;
        }

        public async Task PermAddForDepartment(Guid session,string department)
        {
            using var db = await _factory.CreateDbContextAsync();

            var user = await db.UserData.FirstOrDefaultAsync(u => u.SessionId == session && u.Organisation=="admin");
            if (user == null)
            {
                throw new UnauthorizedAccessException("Invalid session.");
            }
            var records = await db.FinanceData
            .Where(fd => fd.KomorkaOrganizacyjna == department)
            .ToListAsync();
            
            foreach (var fd in records)   
            {                
                fd.IsAccesible = true;
            }
            
            await db.SaveChangesAsync();
        }

        [HttpPost("permremfordepartment")]
        public async Task PermRemForDepartment(Guid session,string department)
        {
            using var db = await _factory.CreateDbContextAsync();

            var user = await db.UserData.FirstOrDefaultAsync(u => u.SessionId == session && u.Organisation=="admin");
            if (user == null)
            {
                throw new UnauthorizedAccessException("Invalid session.");
            }
            var records = await db.FinanceData
            .Where(fd => fd.KomorkaOrganizacyjna == department)
            .ToListAsync();
            
            foreach (var fd in records)   
            {                
                fd.IsAccesible = false;
            }
            
            await db.SaveChangesAsync();
        }
    }
}
