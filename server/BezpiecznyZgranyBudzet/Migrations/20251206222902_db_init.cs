using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BezpiecznyZgranyBudzet.Migrations
{
    /// <inheritdoc />
    public partial class db_init : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FinanceData",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    CzescBudzetowa = table.Column<string>(type: "text", nullable: false),
                    Dzial = table.Column<string>(type: "text", nullable: false),
                    Rozdzial = table.Column<string>(type: "text", nullable: false),
                    Paragraf = table.Column<string>(type: "text", nullable: false),
                    ZrodloFinansowania = table.Column<string>(type: "text", nullable: false),
                    GrupaWydatkow = table.Column<string>(type: "text", nullable: false),
                    BudzetZadaniowyPelny = table.Column<string>(type: "text", nullable: false),
                    BudzetZadaniowy = table.Column<string>(type: "text", nullable: false),
                    NazwaProgramu = table.Column<string>(type: "text", nullable: false),
                    KomorkaOrganizacyjna = table.Column<string>(type: "text", nullable: false),
                    PlanWI = table.Column<decimal>(type: "numeric", nullable: false),
                    DysponentSrodkow = table.Column<string>(type: "text", nullable: false),
                    Budzet = table.Column<decimal>(type: "numeric", nullable: false),
                    NazwaZadania = table.Column<string>(type: "text", nullable: false),
                    SzczegoloweUzasadnienie = table.Column<string>(type: "text", nullable: false),
                    Przeznaczenie = table.Column<string>(type: "text", nullable: false),
                    Potrzeby2026 = table.Column<decimal>(type: "numeric", nullable: false),
                    Limit2026 = table.Column<decimal>(type: "numeric", nullable: false),
                    BrakujacaKwota2026 = table.Column<decimal>(type: "numeric", nullable: false),
                    KwotaUmowy = table.Column<decimal>(type: "numeric", nullable: false),
                    NrUmowy = table.Column<string>(type: "text", nullable: false),
                    DotacjaZKim = table.Column<string>(type: "text", nullable: false),
                    PodstawaPrawnaDotacji = table.Column<string>(type: "text", nullable: false),
                    Uwagi = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FinanceData", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FinanceData");
        }
    }
}
