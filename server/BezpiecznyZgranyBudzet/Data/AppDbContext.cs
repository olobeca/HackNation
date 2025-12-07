using Microsoft.EntityFrameworkCore;

namespace BezpiecznyZgranyBudzet.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        public DbSet<FinanceData> FinanceData { get; set; }
        public DbSet<UserData> UserData { get; set; }
    }
}
