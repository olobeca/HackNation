using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BezpiecznyZgranyBudzet.Migrations
{
    /// <inheritdoc />
    public partial class new_user_format : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserLastName",
                table: "UserData");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserLastName",
                table: "UserData",
                type: "text",
                nullable: false,
                defaultValue: "");
        }
    }
}
