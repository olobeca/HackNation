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
        public async Task<IActionResult> UpdateFinanceData([FromBody] FinanceData financeData)
        {
            // call a service method to update the finance data
            return Ok("Finance data updated successfully.");
        }

        [HttpGet("all-data")]
        public async Task<IActionResult> GetFinanceData()
        {
            // call a service method to get the finance data
            return Ok("Finance data retrieved successfully.");
        }
    }
}
