// src/components/ExportButton.js
import React from 'react';
import { PiExport } from "react-icons/pi";
import axios from 'axios';

const ExportButton = ({ schedule }) => {
    const handleExport = async () => {
        try {
            const response = await axios.post('https://loan-repayment-scheduler-u8dp.onrender.com/api/export-pdf', 
                { schedule }, 
                {
                    responseType: 'blob', 
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

           
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'loan-schedule.pdf');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <button
            onClick={handleExport}
            className=" bg-green-400 
               p-3 px-4  rounded-xl border-b-4 border-green-500 transition duration-300 hover:scale-105 hover:bg-green-500"
            disabled={schedule.length === 0}
        ><div className='flex items-center gap-2'>
           <h1> Export as PDF</h1> <PiExport /></div>
        </button>
    );
};

export default ExportButton;
