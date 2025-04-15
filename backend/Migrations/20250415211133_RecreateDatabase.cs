using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class RecreateDatabase : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Descricao",
                table: "Itens");

            migrationBuilder.DropColumn(
                name: "Nome",
                table: "Itens");

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Itens",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Itens",
                type: "TEXT",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "Itens");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Itens");

            migrationBuilder.AddColumn<string>(
                name: "Descricao",
                table: "Itens",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Nome",
                table: "Itens",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }
    }
}
