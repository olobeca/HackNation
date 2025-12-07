using BezpiecznyZgranyBudzet.Data;
using Microsoft.EntityFrameworkCore;

namespace BezpiecznyZgranyBudzet.Services
{
    public class VersionServices
    {
        private readonly IDbContextFactory<AppDbContext> _factory;

        public VersionServices(IDbContextFactory<AppDbContext> factory)
        {
            _factory = factory;
        }

        public async Task RollbackVersion(Guid session, int versionId)
        {
            return;
        }

        public async Task<List<int>> GetVersions(Guid session)
        {
            return new List<int>();
        }
    }
}
