const express = require('express');
const router = express.Router();

router.post('/calculate', (req, res) => {
   try {
        const { principal, tenure, rate, frequency,date } = req.body;
        const r = rate / 12 / 100;
        const n = tenure;

        const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        let schedule = [];
        let balance = principal;

        // Start from the current date
        let currentDate = new Date(date);

        // Determine the increment based on frequency
        let increment;
        switch (frequency) {
            case 'Monthly':
                increment = 1;
                break;
            case 'Quarterly':
                increment = 3;
                break;
            case 'Yearly':
                increment = 12;
                break;
            default:
                increment = 1;
        }

        for (let i = 1; i <= n; i++) {
            const interest = balance * r;
            const principalComponent = emi - interest;
            balance -= principalComponent;

            // Format the date (e.g., "2024-02-22")
            const formattedDate = new Date(currentDate).toISOString().split('T')[0];

            schedule.push({
                installment: i,
                date: formattedDate,  // Add the formatted date here
                principal: principalComponent.toFixed(2),
                interest: interest.toFixed(2),
                balance: balance.toFixed(2)
            });

            // Increment date by the selected frequency
            currentDate.setMonth(currentDate.getMonth() + increment);
        }

        res.json({ schedule });
   } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Something went wrong!' });
   }
});

module.exports = router;
