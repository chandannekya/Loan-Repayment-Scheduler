import { useState, useRef } from 'react';
import LoanForm from './components/LoanForm';
import ScheduleTable from './components/ScheduleTable';
import ScheduleGraph from './components/SheduleGraph'
import ExportButton from './components/ExportButton';

function App() {
    const [schedule, setSchedule] = useState([]);
    const tableRef = useRef(null); 

    const handleScheduleUpdate = (newSchedule) => {
        setSchedule(newSchedule);
       
        setTimeout(() => {
            tableRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100); 
    };

    return (
        <div className="min-h-screen bg-gray-100 p-5">
            <h1 className="text-4xl md:text-6xl text-center font-bold mb-8 text-gray-800">Loan Repayment Scheduler </h1>
            <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-3xl p-6 md:p-10">
                <div className="flex flex-col md:flex-row gap-8">
           
                    <div className="md:w-1/3">
                        <LoanForm setSchedule={handleScheduleUpdate} />
                    </div>

                  
                    <div className="md:w-2/3">
                        <ScheduleGraph schedule={schedule} />
                        <div className=" mt-11  bottom-0 text-right">
                            <ExportButton schedule={schedule} />
                        </div>
                    </div>
                </div>

               
                <div className="mt-8" ref={tableRef}>
                    <ScheduleTable schedule={schedule} />
                </div>
            </div>
        </div>
    );
}

export default App;
