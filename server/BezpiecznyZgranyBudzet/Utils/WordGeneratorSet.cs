
using System;
using System.Collections.Generic;
using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

class WordGeneratorSet
{
    public static void generateWord(
        string _nazwaPliku,
        string _nrSprawy,
        string _miejsceData,
        string _adresat,
        List<string[]> _tableRows
    )
    {
        string filePath = _nazwaPliku;
        string CaseID = _nrSprawy;
        string timePlace = _miejsceData;
        var adresat = new List<string>
        {
            "Pan",
            _adresat,
            "Dyrektor Departamentu A"
        };

        string title = "Szanowny Panie Dyrektorze,";
        string tresc = "informuję, iż w ramach wskazanego przez Ministra Finansów limitu wydatków budżetu państwa na lata 2026-2029, decyzją Kierownictwa Ministerstwa Cyfryzacji przyznano dla DK następujący limit wydatków w poszczególnych grupach wydatków:";
        string thousandNote = "w tys. zł";

        // Dane tabeli: nagłówki i wiersze (w tys. zł)
        var tableHeader = new[] { "Część budżetowa", "Dział", "Rozdział", "Grupa wydatków", "2026 rok", "2027 rok", "2028 rok", "2029 rok" };
        var tableRows = _tableRows;

        string apel = "W związku z powyższym, uprzejmie proszę o rozdysponowanie podanych wielkości we wskazanych grupach wydatków na zadania, które powinny zostać sfinansowane w latach 2026-2029, w poszczególnych paragrafach klasyfikacji budżetowej.";

        string salutation = "Z wyrazami szacunku";
        string podpis = "/dokument podpisany elektronicznie/";

        WordGenerator.CreateFormalBudgetDocument(
            filePath,
            CaseID,
            timePlace,
            adresat,
            title,
            tresc,
            thousandNote,
            tableHeader,
            tableRows,
            apel,
            salutation,
            podpis
        );

        Console.WriteLine($"Gotowe. Plik utworzony: {filePath}");
    }
}
