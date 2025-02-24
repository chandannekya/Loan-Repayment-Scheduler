const ScheduleTable = ({ schedule }) => {
  return (
    <div className="overflow-x-auto rounded-lg border-2 border-gray-400 bg-white">
      <table className="w-full text-sm text-gray-600">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
            <th className="px-6 py-3">Installment</th>
            <th className="px-6 py-3">EMI</th>
            <th className="px-6 py-3">Date</th>
            <th className="px-6 py-3">Principal</th>
            <th className="px-6 py-3">Interest</th>
            <th className="px-6 py-3">Balance</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => (
            <tr
              key={index}
              className="border-b hover:bg-gray-50 transition duration-300"
            >
              <td className="px-6 py-4 font-medium text-gray-900">
                {item.installment}
              </td>
              <td className="px-6 py-4">
  {(Number(item.principal) + Number(item.interest))}
</td>

              <td className="px-6 py-4">
                {new Date(item.date).toLocaleDateString()}
              </td>
              <td className="px-6 py-4">{item.principal}</td>
              <td className="px-6 py-4">{item.interest}</td>
              <td
                className={`px-6 py-4 ${
                  item.balance < 0 ? "text-red-500" : ""
                }`}
              >
                {item.balance}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;
