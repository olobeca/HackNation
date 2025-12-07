using BezpiecznyZgranyBudzet.Services;
using Microsoft.AspNetCore.Mvc;

namespace BezpiecznyZgranyBudzet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {

        public AuthServices _authServices;

        public AuthController(AuthServices authServices)
        {
            _authServices = authServices;
        }

        [HttpPost("adduser")]
        public async Task AddUsers()
        {
            await _authServices.Addusers();
        }

        [HttpPost("login")]
        public async Task<Guid> Login(string user_name,string user_password,string department)
        {
            return await _authServices.Login( user_name, user_password, department);
        }

        [HttpGet("logout")]
        public async Task<IActionResult> Logout(Guid session)
        {
            var result = await _authServices.Logout(session);
            if (result)
            {
                return Ok("Logout successful.");
            }
            else
            {
                return BadRequest("Invalid session.");
            }
        }
    }
}