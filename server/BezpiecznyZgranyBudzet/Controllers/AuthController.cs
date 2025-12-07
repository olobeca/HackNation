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

        public struct UserLogin
        {
            public string user_name;
            public string user_lastname;
            public string user_password;
        };

        [HttpPost("adduser")]
        public async Task AddUsers()
        {
            await _authServices.Addusers();
        }

        [HttpPost("login")]
        public async Task<Guid> Login([FromBody] UserLogin user)
        {
            return await _authServices.Login( user.user_name, user.user_lastname, user.user_password);
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