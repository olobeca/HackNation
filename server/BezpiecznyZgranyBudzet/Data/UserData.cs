public class UserData
{
    public Guid Id { get; set; }
    public string UserName { get; set; }
    public string UserLastName { get; set; }
    public string UserPassword { get; set; }

    public string? Organisation { get; set; }

    public Guid? SessionId { get; set; }
}