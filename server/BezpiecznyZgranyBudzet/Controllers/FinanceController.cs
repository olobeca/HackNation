using BezpiecznyZgranyBudzet.Data.ViewModel;
using BezpiecznyZgranyBudzet.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BezpiecznyZgranyBudzet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FinanceController : ControllerBase
    {

        public FinanceServices _financeServices;

        public FinanceController(FinanceServices financeServices)
        {
            _financeServices = financeServices;
        }

        [HttpPost("adddata")]
        public async Task<IActionResult> AddFinanceData(Guid session, string department)
        {
            await _financeServices.AddFinanceData(session, department);
            return Ok();
        }

        [HttpPost("data")]
        public async Task<IActionResult> UpdateFinanceData([FromBody] List<FinanceDataVM> financeData, Guid session)
        {
            await _financeServices.UpdateFinanceData(financeData, session);
            return Ok();
        }

        [HttpGet("all-data")]
        public async Task<IActionResult> GetFinanceData(Guid session)
        {
            var data = _financeServices.GetFinanceData(session);
            return Ok(data);
        }

        [HttpPost("pulldata")]
        public async Task<IActionResult> PullData(Guid session)
        {
            var data = await _financeServices.PullData(session);
            return Ok(data);
        }
    }
}
