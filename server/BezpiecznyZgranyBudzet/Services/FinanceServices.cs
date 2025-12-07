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

        public async Task UpdateFinanceData(List<FinanceDataVM> financeData, Guid session)
        {
            await using var dbContext = await _factory.CreateDbContextAsync();
            var user = await dbContext.UserData.FirstOrDefaultAsync(u => u.SessionId == session);

            var prev_version = await dbContext.FinanceData.MaxAsync(f => (int?)f.LastValidVersion) ?? 0;

            //get all updated ids
            var ids = financeData.Select(m => m.Id).ToList();
            Console.WriteLine($"Updating finance data for {ids.Count} items.");
            foreach (var id in ids)
            {
                //add checks for department, version control
                //chceck if exists
                var existingData = await dbContext.FinanceData.FindAsync(id);
                if (existingData.KomorkaOrganizacyjna != user.Organisation)
                {
                    continue; //skip if not user's department
                }
                if (existingData != null) //exists, update the changed fields
                {   
                    var newData = financeData.First(m => m.Id == id);
                    //dbContext.Entry(existingData).CurrentValues.SetValues(newData); //fix to ignore null newData
                    var newFinanceData = new FinanceData //implement later with validation
                    {
                        Id = Guid.NewGuid(),
                        KomorkaOrganizacyjna = "",
                        CzescBudzetowa = "",
                        Dzial = "",
                        Rozdzial = "",
                        Paragraf = "",
                        ZrodloFinansowania = "",
                        GrupaWydatkow = "",
                        BudzetZadaniowyPelny = "",
                        BudzetZadaniowy = "",
                        NazwaProgramu = "",
                        PlanWI = 0,
                        DysponentSrodkow = "",
                        Budzet = 0,
                        NazwaZadania = "",
                        SzczegoloweUzasadnienie = "",
                        Przeznaczenie = "",
                        Potrzeby2026 = 0,
                        Limit2026 = 0,
                        BrakujacaKwota2026 = 0,
                        KwotaUmowy = 0,
                        NrUmowy = "",
                        DotacjaZKim = "",
                        PodstawaPrawnaDotacji = "",
                        Uwagi = "",
                        CreatedAt = DateTimeOffset.UtcNow,
                        UpdatedAt = DateTimeOffset.UtcNow,
                        IsAccesible = false,
                        LastValidVersion = prev_version + 1
                    };
                    await dbContext.FinanceData.AddAsync(newFinanceData);
                }
                else //doesn't exist, add
                {
                    var newData = financeData.First(m => m.Id == id);
                    var newFinanceData = new FinanceData //implement later with validation
                    {
                        Id = Guid.NewGuid(),
                        KomorkaOrganizacyjna = "",
                        CzescBudzetowa = "",
                        Dzial = "",
                        Rozdzial = "",
                        Paragraf = "",
                        ZrodloFinansowania = "",
                        GrupaWydatkow = "",
                        BudzetZadaniowyPelny = "",
                        BudzetZadaniowy = "",
                        NazwaProgramu = "",
                        PlanWI = 0,
                        DysponentSrodkow = "",
                        Budzet = 0,
                        NazwaZadania = "",
                        SzczegoloweUzasadnienie = "",
                        Przeznaczenie = "",
                        Potrzeby2026 = 0,
                        Limit2026 = 0,
                        BrakujacaKwota2026 = 0,
                        KwotaUmowy = 0,
                        NrUmowy = "",
                        DotacjaZKim = "",
                        PodstawaPrawnaDotacji = "",
                        Uwagi = "",
                        CreatedAt = DateTimeOffset.UtcNow,
                        UpdatedAt = DateTimeOffset.UtcNow,
                        IsAccesible = false,
                        FirstValidVersion = prev_version + 1

                    };
                    await dbContext.FinanceData.AddAsync(newFinanceData);
                }
            }

            await dbContext.SaveChangesAsync();
            return;


        }

        public async Task<List<FinanceData>> GetFinanceData(Guid session)
        {
            using var dbContext = await _factory.CreateDbContextAsync();
            var user = await dbContext.UserData.FirstOrDefaultAsync(u => u.SessionId == session);
            var valid_departments = await dbContext.FinanceData
                .Where(f => (f.KomorkaOrganizacyjna == user.Organisation) 
                && f.IsAccesible 
                && f.LastValidVersion == null)
                .ToListAsync();//add check if admin

            
            return valid_departments;
        }

        public async Task AddFinanceData(Guid session, string department)
        {
            await using var dbContext = await _factory.CreateDbContextAsync();

            var user = await dbContext.UserData.FirstOrDefaultAsync(u => u.SessionId == session && u.Organisation=="admin");
            if (user == null)
            {
                throw new UnauthorizedAccessException("Invalid session or insufficient permissions.");
            }

            var newFinanceData = new FinanceData
            {
                Id = Guid.NewGuid(),
                KomorkaOrganizacyjna = department,
                CzescBudzetowa = "",
                Dzial = "",
                Rozdzial = "",
                Paragraf = "",
                ZrodloFinansowania = "",
                GrupaWydatkow = "",
                BudzetZadaniowyPelny = "",
                BudzetZadaniowy = "",
                NazwaProgramu = "",
                PlanWI = 0,
                DysponentSrodkow = "",
                Budzet = 0,
                NazwaZadania = "",
                SzczegoloweUzasadnienie = "",
                Przeznaczenie = "",
                Potrzeby2026 = 0,
                Limit2026 = 0,
                BrakujacaKwota2026 = 0,
                KwotaUmowy = 0,
                NrUmowy = "",
                DotacjaZKim = "",
                PodstawaPrawnaDotacji = "",
                Uwagi = "",
                CreatedAt = DateTimeOffset.UtcNow,
                UpdatedAt = DateTimeOffset.UtcNow,
                IsAccesible = false
            };

            await dbContext.FinanceData.AddAsync(newFinanceData);
            await dbContext.SaveChangesAsync();
        }

        public async Task<List<FinanceDataVM>> PullData(Guid session)
        {
            var dbContext = await _factory.CreateDbContextAsync();
            var user = await dbContext.UserData.FirstOrDefaultAsync(u => u.SessionId == session);
            if (user == null)
            {
                throw new UnauthorizedAccessException("Invalid session or insufficient permissions.");
            }

            var list_finance = dbContext.FinanceData.Where(f => f.KomorkaOrganizacyjna == user.Organisation);

            List<FinanceDataVM> financeDataVMs = new List<FinanceDataVM>();

            foreach(var item in list_finance)
            {
                if(user.Organisation != "admin" && item.IsAccesible == false)
                {
                    continue;
                }
                else
                {
                    var newFinanceDataVm = new FinanceDataVM
                    {
                        Id = item.Id,
                        KomorkaOrganizacyjna = item.KomorkaOrganizacyjna,
                        CzescBudzetowa = item.CzescBudzetowa,
                        Dzial = item.Dzial,
                        Rozdzial = item.Rozdzial,
                        Paragraf = item.Paragraf,
                        ZrodloFinansowania = item.ZrodloFinansowania,
                        GrupaWydatkow = item.GrupaWydatkow,
                        BudzetZadaniowyPelny = item.BudzetZadaniowyPelny,
                        BudzetZadaniowy = item.BudzetZadaniowy,
                        NazwaProgramu = item.NazwaProgramu,
                        PlanWI = item.PlanWI,
                        DysponentSrodkow = item.DysponentSrodkow,
                        Budzet = item.Budzet,
                        NazwaZadania = item.NazwaZadania,
                        SzczegoloweUzasadnienie = item.SzczegoloweUzasadnienie,
                        Przeznaczenie = item.Przeznaczenie,
                        Potrzeby2026 = item.Potrzeby2026,
                        Limit2026 = item.Limit2026,
                        BrakujacaKwota2026 = item.BrakujacaKwota2026,
                        KwotaUmowy = item.KwotaUmowy,
                        NrUmowy = item.NrUmowy,
                        DotacjaZKim = item.DotacjaZKim,
                        PodstawaPrawnaDotacji = item.PodstawaPrawnaDotacji,
                        Uwagi = item.Uwagi,
                    };
                    financeDataVMs.Add(newFinanceDataVm);
                }
            }

            return financeDataVMs;
        }
    }
}
