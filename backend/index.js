const express = require('express');
const cors = require('cors');
const loanRoutes = require('./routes/loan');
const pdfExport =require('./routes/pdf.export')

const app = express();
app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use('/public', express.static('public'));
app.use('/api', loanRoutes);
app.use('/api',pdfExport)


const PORT = 5000;
app.listen(5000, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
