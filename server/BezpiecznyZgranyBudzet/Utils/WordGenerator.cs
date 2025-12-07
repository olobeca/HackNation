using System.Collections.Generic;
using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;
using a = DocumentFormat.OpenXml.Drawing;
using pic = DocumentFormat.OpenXml.Drawing.Pictures;
using wp = DocumentFormat.OpenXml.Drawing.Wordprocessing;

static class WordGenerator
{
    public static void CreateFormalBudgetDocument(
        string filePath,
        string CaseID,
        string timePlace,
        List<string> adresatLines,
        string greeting,               // powitanie
        string mainText,
        string thousandNote,
        string[] tableHeader,
        List<string[]> tableRows,
        string closingParagraph,
        string closingSalutation,      // "z wyrazami szacunku"
        string closingSignatureLine    // "/dokument podpisany elektronicznie/"
    )
    {
        using (var wordDoc = WordprocessingDocument.Create(filePath, WordprocessingDocumentType.Document))
        {
            var mainPart = wordDoc.AddMainDocumentPart();
            mainPart.Document = new Document();
            var body = new Body();
            mainPart.Document.Append(body);

            Paragraph P(string t)
            {
                return new Paragraph(
                    new ParagraphProperties(new SpacingBetweenLines { After = "160" }),
                    new Run(new Text(t))
                );
            }

            Paragraph Bold(string t)
            {
                return new Paragraph(
                    new ParagraphProperties(new SpacingBetweenLines { After = "20" }),
                    new Run(new RunProperties(new Bold()), new Text(t))
                );
            }

            Paragraph Italic(string t)
            {
                return new Paragraph(
                    new ParagraphProperties(new SpacingBetweenLines { After = "160" }),
                    new Run(new RunProperties(new Italic()), new Text(t))
                );
            }

            Paragraph ItalicLeft(string t)
            {
                return new Paragraph(
                    new ParagraphProperties(
                        new SpacingBetweenLines { After = "160" },
                        new Justification { Val = JustificationValues.Left }
                    ),
                    new Run(new RunProperties(new Italic()), new Text(t))
                );
            }

            Paragraph ItalicRight(string t)
            {
                return new Paragraph(
                    new ParagraphProperties(
                        new SpacingBetweenLines { After = "160" },
                        new Justification { Val = JustificationValues.Right }
                    ),
                    new Run(new RunProperties(new Italic()), new Text(t))
                );
            }

            // GODŁO
            var imagePara = new Paragraph(
                new Run(
                    new Drawing(
                        ImageHelper.CreateImage(mainPart, "godlo.png", 1600000, 800000)
                    )
                )
            );
            body.Append(imagePara);

            // NR SPRAWY + DATA
            body.Append(P(CaseID));
            body.Append(P(timePlace));

            body.Append(P(""));

            // ADRESAT (pogrubiony)
            foreach (var line in adresatLines)
                body.Append(Bold(line));

            body.Append(P(""));

            // POWITANIE: kursywa, niepogrubione
            body.Append(Italic(greeting));

            // TREŚĆ
            body.Append(P(mainText));

            body.Append(ItalicRight(thousandNote));

            // TABELA
            body.Append(CreateTable(tableHeader, tableRows));

            body.Append(P(""));
            body.Append(P(closingParagraph));
            body.Append(P(""));

            // Z WYRAZAMI SZACUNKU
            body.Append(ItalicLeft(closingSalutation));

            // PODPIS
            body.Append(ItalicLeft(closingSignatureLine));

            mainPart.Document.Save();
        }
    }

    private static Table CreateTable(string[] header, List<string[]> rows)
    {
        var table = new Table();

        table.Append(new TableProperties(
            new TableBorders(
                new TopBorder { Val = BorderValues.Single, Size = 4 },
                new BottomBorder { Val = BorderValues.Single, Size = 4 },
                new LeftBorder { Val = BorderValues.Single, Size = 4 },
                new RightBorder { Val = BorderValues.Single, Size = 4 },
                new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4 },
                new InsideVerticalBorder { Val = BorderValues.Single, Size = 4 }
            ),
            new TableWidth { Type = TableWidthUnitValues.Pct, Width = "5000" }
        ));

        // KOLOR TŁA
        var green = new Shading
        {
            Val = ShadingPatternValues.Clear,
            Fill = "E6F2E6"
        };

        // Funkcja tworząca komórkę z tekstem wyśrodkowanym
        TableCell CreateCell(string text, int colIndex, bool isHeader = false, bool isLastRow = false)
        {
            var tcProps = new TableCellProperties(
                new TableCellVerticalAlignment { Val = TableVerticalAlignmentValues.Center },
                new TableCellMargin(
                    new TopMargin { Width = "40", Type = TableWidthUnitValues.Dxa },
                    new BottomMargin { Width = "0", Type = TableWidthUnitValues.Dxa },
                    new LeftMargin { Width = "100", Type = TableWidthUnitValues.Dxa },
                    new RightMargin { Width = "100", Type = TableWidthUnitValues.Dxa }
                )
            );

            if (isHeader || isLastRow)
                tcProps.Append(green.CloneNode(true));

            // Wybór wyrównania poziomego
            JustificationValues justify;
            if (isHeader)
                justify = JustificationValues.Center;
            else if (colIndex == 3) // czwarta kolumna
                justify = JustificationValues.Left;
            else
                justify = JustificationValues.Right;

            var runProps = (isHeader || isLastRow) ? new RunProperties(new Bold()) : null;
            var paragraph = new Paragraph(
                new ParagraphProperties(new Justification { Val = justify }),
                new Run(runProps, new Text(text))
            );

            return new TableCell(tcProps, paragraph);
        }

        // NAGŁÓWKI
        var headerRow = new TableRow();
        for (int i = 0; i < header.Length; i++)
            headerRow.Append(CreateCell(header[i], i, isHeader: true));
        table.Append(headerRow);

        // WIERSZE
        for (int r = 0; r < rows.Count; r++)
        {
            var tr = new TableRow();
            bool isLastRow = (r == rows.Count - 1);

            for (int c = 0; c < rows[r].Length; c++)
            {
                tr.Append(CreateCell(rows[r][c], c, isLastRow: isLastRow));
            }

            table.Append(tr);
        }

        return table;
    }
}

static class ImageHelper
{
    public static Drawing CreateImage(MainDocumentPart mainPart, string fileName, long cx, long cy)
    {
        var imagePart = mainPart.AddImagePart(ImagePartType.Png);
        using (var stream = System.IO.File.OpenRead(fileName))
            imagePart.FeedData(stream);

        string id = mainPart.GetIdOfPart(imagePart);

        return new Drawing(
            new wp.Inline(
                new wp.Extent { Cx = cx, Cy = cy },
                new wp.DocProperties { Id = 1U, Name = "Godlo" },
                new wp.NonVisualGraphicFrameDrawingProperties(new a.GraphicFrameLocks()),
                new a.Graphic(
                    new a.GraphicData(
                        new pic.Picture(
                            new pic.NonVisualPictureProperties(
                                new pic.NonVisualDrawingProperties { Id = 0U, Name = fileName },
                                new pic.NonVisualPictureDrawingProperties()
                            ),
                            new pic.BlipFill(
                                new a.Blip { Embed = id },
                                new a.Stretch(new a.FillRectangle())
                            ),
                            new pic.ShapeProperties(
                                new a.Transform2D(
                                    new a.Offset { X = 0, Y = 0 },
                                    new a.Extents { Cx = cx, Cy = cy }
                                ),
                                new a.PresetGeometry(new a.AdjustValueList()) { Preset = a.ShapeTypeValues.Rectangle }
                            )
                        )
                    ) { Uri = "http://schemas.openxmlformats.org/drawingml/2006/picture" }
                )
            )
        );
    }
}
