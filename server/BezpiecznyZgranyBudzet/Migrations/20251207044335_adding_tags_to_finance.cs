using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BezpiecznyZgranyBudzet.Migrations
{
    /// <inheritdoc />
    public partial class adding_tags_to_finance : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsAccesible",
                table: "FinanceData",
                type: "boolean",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsAccesible",
                table: "FinanceData");
        }
    }
}
