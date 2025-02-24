// src/components/ExportButton.js
import React from 'react';
import { PiExport } from "react-icons/pi";
import axios from 'axios';

const ExportButton = ({ schedule }) => {
    const handleExport = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/export-pdf', 
                { schedule }, // Send schedule in the request body
                {
                    responseType: 'blob', // This is important for downloading files
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            // Create a URL for the blob and download the file
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
