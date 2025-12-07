using BezpiecznyZgranyBudzet.Data;
using BezpiecznyZgranyBudzet.Data.ViewModel;
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

        public async Task UpdateFinanceData(List<FinanceDataVM> financeData)
        {
            await using var dbContext = await _factory.CreateDbContextAsync();

            //get all updated ids
            var ids = financeData.Select(m => m.Id).ToList();
            Console.WriteLine($"Updating finance data for {ids.Count} items.");
            foreach (var id in ids)
            {
                //chceck if exists
                var existingData = await dbContext.FinanceData.FindAsync(id);
                if (existingData != null) //exists, update
                {   
                    var newData = financeData.First(m => m.Id == id);
                    dbContext.Entry(existingData).CurrentValues.SetValues(newData); //fix to ignore null newData
                }
                else //doesn't exist, add
                {
                    var newData = financeData.First(m => m.Id == id);
                    //await dbContext.FinanceData.AddAsync(newData);
                }
            }

            await dbContext.SaveChangesAsync();
            return;


        }

        public async Task<List<FinanceData>> GetFinanceData()
        {
            await using var dbContext = await _factory.CreateDbContextAsync();
            return await dbContext.FinanceData.ToListAsync();
        }
    }
}
