import jsPDF from 'jspdf';

class PDFGenerator {
  constructor() {
    this.doc = new jsPDF();
    this.loadFonts();
  }

  loadFonts() {
    this.doc.addFont('Bookman Old Style', 'BookmanOldStyle', 'normal');
  }

  generatePDF(question, marks) {
    const pagesNeeded = Math.ceil(marks / 5);
  
    for (let page = 0; page < pagesNeeded - 1; page++) {
        const startY = page * 250;
        const marksOnThisPage = marks;
        if (page <= 0) {
            this.addContent(question, marksOnThisPage, startY);
        }
        if (pagesNeeded >= 0) {
            this.doc.addPage();
        }
    }
    this.addWatermark('/Atom-logo-20.jpg');
  }

  addContent(question, marks, startY) {
    const maxWidth = 160;
    const wrappedQuestion = this.doc.splitTextToSize(`Question: ${question}`, maxWidth);
    
    this.doc.setFont('BookmanOldStyle', 'normal');
    this.doc.setFontSize(12);
    this.doc.text(wrappedQuestion, 30, 30 + startY);
    this.doc.text(`Marks: ${marks}`, 160, 30 + startY + (wrappedQuestion.length * 5));
  }  

  addWatermark(logoUrl) {
    const totalPages = this.doc.internal.getNumberOfPages();
    const pageSize = this.doc.internal.pageSize;
    const pageWidth = pageSize.getWidth();
    const pageHeight = pageSize.getHeight();
    
    const logoWidth = 85.25;
    const logoHeight = 30;
    const logoX = (pageWidth - logoWidth) / 2;
    const logoY = (pageHeight - logoHeight) / 2;
    const startX = (pageWidth - 53) / 2;

    for (let i = 1; i <= totalPages; i++) {
        this.doc.setPage(i);
        
        // Add header text and watermark image
        this.doc.setFont('BookmanOldStyle', 'bold');
        this.doc.setFontSize(30);
        this.doc.text('ATOM IAS', startX, 12);
        
        // Set line width and draw left and right borders only
        this.doc.setLineWidth(1);
        this.doc.setDrawColor(0);
        
        // Left border
        this.doc.line(25, 20, 25, pageHeight - 20);
        
        // Right border
        this.doc.line(pageWidth - 25, 20, pageWidth - 25, pageHeight - 20);
        
        // Watermark image
        this.doc.addImage(logoUrl, 'JPG', logoX, logoY, logoWidth, logoHeight, '', 'FAST');
        
        // Footer text
        this.doc.setFont('BookmanOldStyle', 'normal');
        this.doc.setFontSize(10);
        this.doc.text('atomias.com', 167, 285);
    }
  }

  downloadPDF() {
    this.doc.save('atomias-question.pdf');
  }
}

export default PDFGenerator;
