using BezpiecznyZgranyBudzet.Services;
using Microsoft.AspNetCore.Mvc;

namespace BezpiecznyZgranyBudzet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PermController : ControllerBase
    {

        public PermServices _permServices;

        public PermController(PermServices permServices)
        {
            _permServices = permServices;
        }

        [HttpPost("permaddfordepartment")]
        public async Task PermAddForDepartment(Guid session,string department)
        {
            await _permServices.PermAddForDepartment(session, department);
        }

        [HttpPost("permremfordepartment")]
        public async Task PermRemForDepartment(Guid session, string department)
        {
            await _permServices.PermRemForDepartment(session, department);
        }
    }
}