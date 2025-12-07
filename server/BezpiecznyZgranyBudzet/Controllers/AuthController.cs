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

        [HttpPost("login")]
        public async Task<Guid> Login([FromBody] string user_name,[FromBody] string user_lastname,[FromBody] string user_password)
        {
            return await _authServices.Login( user_name, user_lastname, user_password);
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