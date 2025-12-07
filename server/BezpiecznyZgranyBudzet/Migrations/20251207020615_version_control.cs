using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BezpiecznyZgranyBudzet.Migrations
{
    /// <inheritdoc />
    public partial class version_control : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<Guid>(
                name: "Id",
                table: "FinanceData",
                type: "uuid",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AddColumn<DateTimeOffset>(
                name: "CreatedAt",
                table: "FinanceData",
                type: "timestamp with time zone",
                nullable: false,
                defaultValue: new DateTimeOffset(new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)));

            migrationBuilder.AddColumn<int>(
                name: "FirstValidVersion",
                table: "FinanceData",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<DateTimeOffset>(
                name: "InvalidatedAt",
                table: "FinanceData",
                type: "timestamp with time zone",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "LastValidVersion",
                table: "FinanceData",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<DateTimeOffset>(
                name: "UpdatedAt",
                table: "FinanceData",
                type: "timestamp with time zone",
                nullable: false,
                defaultValue: new DateTimeOffset(new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedAt",
                table: "FinanceData");

            migrationBuilder.DropColumn(
                name: "FirstValidVersion",
                table: "FinanceData");

            migrationBuilder.DropColumn(
                name: "InvalidatedAt",
                table: "FinanceData");

            migrationBuilder.DropColumn(
                name: "LastValidVersion",
                table: "FinanceData");

            migrationBuilder.DropColumn(
                name: "UpdatedAt",
                table: "FinanceData");

            migrationBuilder.AlterColumn<string>(
                name: "Id",
                table: "FinanceData",
                type: "text",
                nullable: false,
                oldClrType: typeof(Guid),
                oldType: "uuid");
        }
    }
}
