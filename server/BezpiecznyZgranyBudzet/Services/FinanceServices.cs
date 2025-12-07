using BezpiecznyZgranyBudzet.Data;
using Microsoft.EntityFrameworkCore;

namespace BezpiecznyZgranyBudzet.Services
{
    public class FinanceServices
    {
        private readonly IDbContextFactory<AppDbContext> _factory;

        public FinanceServices(IDbContextFactory<AppDbContext> factory)
        {
            _factory = factory;
        }

        public async Task UpdateFinanceData(List<FinanceData> financeData)
        {
            await using var dbContext = await _factory.CreateDbContextAsync();

            var ids = financeData.Select(m => m.Id).ToList();
            var toUpdate = await dbContext.FinanceData
                .Where(x => ids.Contains(x.Id))
                .ToListAsync();

            return await dbContext.SaveChangesAsync();


        }

        public async Task<List<FinanceData>> GetFinanceData()
        {
            await using var dbContext = await _factory.CreateDbContextAsync();
            return await dbContext.FinanceData.ToListAsync();
        }
    }
}
