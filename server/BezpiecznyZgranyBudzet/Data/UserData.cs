public class UserData
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public string UserName { get; set; }
    public string UserPassword { get; set; }

    public string? Organisation { get; set; }

    public Guid? SessionId { get; set; }
}