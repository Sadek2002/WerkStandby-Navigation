import download from "downloadjs";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import DriePartijenOvereenkomst from "/bestanden/DriePartijenOvereenkomst.pdf";
import trimmedDataURL from "/pages/Handtekening.js";

async function modifyPdf() {
  // Fetch an existing PDF document
  const url = DriePartijenOvereenkomst;
  const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());

  // Load a PDFDocument from the existing PDF bytes
  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  // Fetch the signature image
  const SignatureImageBytes = await fetch(trimmedDataURL()).then((res) =>
    res.arrayBuffer()
  );

  const signature = await pdfDoc.embedPng(SignatureImageBytes);

  // Embed the Helvetica font
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // Get the first page of the document
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  // Get the width and height of the first page
  const { width, height } = firstPage.getSize();

  // Draw a string of text diagonally across the first page
  firstPage.drawImage(signature, {
    x: 5,
    y: height / 2 + 300,
    size: 0.1,
    font: helveticaFont,
    color: rgb(0.95, 0.1, 0.1)
  });

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save();

  // Trigger the browser to download the PDF document
  download(pdfBytes, "DriePartijenOvereenkomst.pdf", "application/pdf");
}
export default modifyPdf;

alert(trimmedDataURL);
