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

        [HttpPost("data")]
        public async Task<IActionResult> UpdateFinanceData([FromBody] List<FinanceDataVM> financeData)
        {
            _financeServices.UpdateFinanceData(financeData);
            return Ok();
        }

        [HttpGet("all-data")]
        public async Task<IActionResult> GetFinanceData()
        {
            var data = _financeServices.GetFinanceData();
            return Ok(data);
        }
    }
}
