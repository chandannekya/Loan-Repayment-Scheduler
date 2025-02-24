import { useState } from 'react';
import axios from 'axios';

const LoanForm = ({ setSchedule }) => {
  const [loanDetails, setLoanDetails] = useState({
    principal: 50000,
    tenure: 12,
    rate: 5,
    date:5,
    frequency: 'Monthly'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoanDetails({ ...loanDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending request with:", loanDetails);
    try {
        const res = await axios.post('http://localhost:5000/api/calculate', loanDetails);
        console.log("Response:", res.data);
        setSchedule(res.data.schedule);
    } catch (err) {
        console.error("Error:", err.response ? err.response.data : err.message);
    }
};

  return (
    <div className="">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white  rounded-2xl p-8 w-full max-w-lg"
      >
        <h2 className="text-2xl   font-bold text-gray-800 mb-6 text-center">Loan Calculator</h2>

        {/* Principal Amount */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Principal Amount
          </label>
          <input
            type="number"
            name="principal"
            min="10000"
            max="1000000"
            step="5000"
            value={loanDetails.principal}
            onChange={handleChange}
            className="w-full  border-b-3 border  mb-2 p-3  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="range"
            name="principal"
            min="10000"
            max="1000000"
            step="10000"
            value={loanDetails.principal}
            onChange={handleChange}
            className="w-full h-2 bg-gray-300  rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* Tenure */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tenure (Months)
          </label>
          <input
            type="number"
            name="tenure"
            min="6"
            max="240"
            step="6"
            value={loanDetails.tenure}
            onChange={handleChange}
            className="w-full mb-2 p-3 border border-b-3 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="range"
            name="tenure"
            min="6"
            max="240"
            step="6"
            value={loanDetails.tenure}
            onChange={handleChange}
            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* Interest Rate */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Interest Rate (%)
          </label>
          <input
            type="number"
            name="rate"
            min="1"
            max="20"
            step="0.1"
            value={loanDetails.rate}
            onChange={handleChange}
            className="w-full border-b-3  mb-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="range"
            name="rate"
            min="1"
            max="20"
            step="0.1"
            value={loanDetails.rate}
            onChange={handleChange}
            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date
          </label>
          <input
            type="date"
            name="date"
            min="1"
            max="20"
            step="0.1"
            value={loanDetails.date}
            onChange={handleChange}
            className="w-full border-b-3  mb-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
     
        </div>

        {/* Payment Frequency Dropdown */}
        <div className="mb-6">
          <label
            htmlFor="frequency"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Payment Frequency
          </label>
          <select
            id="frequency"
            name="frequency"
            value={loanDetails.frequency}
            onChange={handleChange}
            className="w-full border-b-3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="Monthly">Monthly</option>
            <option value="Quarterly">Quarterly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-green-400 p-3 rounded-xl border-b-4 border-green-500 transition duration-300 hover:scale-105 hover:bg-green-500"
        >
          Calculate
        </button>
      </form>


   
    </div>
  );
};

export default LoanForm;
