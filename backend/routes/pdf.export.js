const express = require('express');
const router = express.Router();
const fs = require('fs');
const PDFDocument = require('pdfkit');

router.post('/export-pdf', async (req, res) => {
    try {
        const { schedule } = req.body;
        const filePath = `./public/loan-schedule-${Date.now()}.pdf`;

        // Create public directory if it doesn't exist
        if (!fs.existsSync('./public')) {
            fs.mkdirSync('./public');
        }

        const doc = new PDFDocument({ margin: 30 });
        const stream = fs.createWriteStream(filePath);
        doc.pipe(stream);

        // Title
        doc.fontSize(25).text('Loan Repayment Schedule', { align: 'center' });
        doc.moveDown(2);

        // Table Headers
        doc.fontSize(14).text('Installment', 50, 150, { bold: true });
        doc.text('Date', 150, 150, { bold: true });
        doc.text('Principal', 250, 150, { bold: true });
        doc.text('Interest', 350, 150, { bold: true });
        doc.text('Balance', 450, 150, { bold: true });
        doc.moveDown();

        // Table Rows
        let y = 180;
        schedule.forEach(item => {
            doc.fontSize(12).text(item.installment, 50, y);
            doc.text(item.date, 150, y);
            doc.text(item.principal, 250, y);
            doc.text(item.interest, 350, y);
            doc.text(item.balance, 450, y);
            y += 20;
        });

        doc.end();

        stream.on('finish', () => {
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', `attachment; filename=loan-schedule.pdf`);
            res.download(filePath);
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to generate PDF' });
    }
});

module.exports = router;
