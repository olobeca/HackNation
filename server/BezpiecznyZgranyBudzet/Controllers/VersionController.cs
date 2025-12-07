using BezpiecznyZgranyBudzet.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BezpiecznyZgranyBudzet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VersionController : ControllerBase
    {
        public VersionServices _versionServices;

        public VersionController(VersionServices versionServices)
        {
            _versionServices = versionServices;
        }

        [HttpGet("versions")]
        public async Task<IActionResult> GetVersions(Guid session)
        {
            var versions = await _versionServices.GetVersions(session);
            return Ok(versions);
        }

        [HttpPost("rollback")]
        public async Task<IActionResult> RollbackVersion(Guid session, int versionId)
        {
            await _versionServices.RollbackVersion(session, versionId);
            return Ok();
        }

    }
}
