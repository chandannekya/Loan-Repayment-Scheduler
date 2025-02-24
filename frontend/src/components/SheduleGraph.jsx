import React from 'react';
import {
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts';

const ScheduleGraph = ({ schedule }) => {
  return (
    <div className="rounded-2xl bg-white p-6">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-4 text-center">Loan Repayment Breakdown</h2>
      <ResponsiveContainer width="100%" height={450}>
        <BarChart data={schedule}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="installment" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="principal" stackId="a" fill="#6366F1" name="Principal" />
          <Bar dataKey="interest" stackId="a" fill="#10B981" name="Interest" />
          <Line type="monotone" dataKey="balance" stroke="#EF4444" name="Balance" strokeWidth={3} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScheduleGraph;
