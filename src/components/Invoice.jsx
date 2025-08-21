import React from 'react';

const Invoice = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-start mb-17 pt-15">
        <div className="text-left">
          <h1 className="text-xl font-extrabold text-gray-800">IShine Cleaning 4u Services</h1>
          <p className="text-md text-gray-600 leading-relaxed mt-1">
            Address: No 25b Jalan Bayu Tinggi 1A, <br />
            Batu Unjur, 41200 Klang <br />
            Talk: 0176255555/0167896664 <br />
            Email: ishlinepro106@gmail.com
          </p>
        </div>
        <div className="text-center pt-10">
          <img src="shine.jpg" alt="Logo" className="w-31 h-27 me-13" />
        </div>
      </div>

      {/* Invoice Title and Details */}
      <div className="flex justify-between items-start mb-13 ms-3">
        <div className="text-left">
          <h2 className="text-xl font-semibold text-gray-400">INVOICE</h2>
          <p className="text-sm text-gray-400 font-medium pt-1 pb-1">BILL TO</p>
          <p className="text-sm ">Maha</p>
          <p className="text-sm ">76353894</p>
        </div>
        <div className="grid grid-cols-2 gap-x-1 gap-y-2 text-sm me-7">
          <span className="text-gray-400 font-medium">INVOICE</span>
          <span className="text-gray-600 text-left">OC-2508-0038</span>
          <span className="text-gray-400 font-medium">DATE</span>
          <span className="text-gray-600 text-left">13/08/2025</span>
          <span className="text-gray-400 font-medium">TERMS</span>
          <span className="text-gray-600 text-left">Due on</span>
          <span className="text-gray-400 font-medium">DUE DATE</span>
          <span className="text-gray-600 text-left">13/08/2025</span>
        </div>
      </div>

      {/* Service Table */}
      <div className="mb-10">
        <table className="w-full border-b-2 border-dashed border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-400 text-sm font-semibold">
              <th className="p-3 text-center w-15">SVC DATE</th>
              <th className="p-3 text-center w-37">ACTIVITY</th>
              <th className="p-3 text-center w-55">DESCRIPTION</th>
              <th className="p-3 text-center w-25">QTY</th>
              <th className="p-3 text-center w-17">RATE</th>
              <th className="p-3 text-right w-16">AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                date: '13/08/2025',
                activity: 'cleaning',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolor',
                qty: 2,
                rate: 'RM100.00',
                amount: 'RM200.00',
              },
              {
                date: '13/08/2025',
                activity: 'Cleaning',
                description: '2 Houses: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolor',
                qty: 1,
                rate: 'RM150.00',
                amount: 'RM150.00',
              },
              {
                date: '13/08/2025',
                activity: 'cleaning',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dol',
                qty: 1,
                rate: 'RM100.00',
                amount: 'RM100.00',
              },
              {
                date: '13/08/2025',
                activity: 'Cleaning',
                description: '2 Houses',
                qty: 1,
                rate: 'RM150.00',
                amount: 'RM150.00',
              },
            ].map((row, index) => (
              <tr key={index} className="text-sm text-center text-gray-600">
                <td className="p-3 align-top">{row.date}</td>
                <td className="p-3 align-top">{row.activity}</td>
                <td className="p-3 align-top">{row.description}</td>
                <td className="p-3 align-top">{row.qty}</td>
                <td className="p-3 align-top">{row.rate}</td>
                <td className="p-3 align-top text-right">{row.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Additional Expenses */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Additional Expenses</h3>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200 text-gray-400 text-sm font-semibold text-right">
              <th className="w-30 text-center">Item</th>
              <th className="ps-3 w-40 ">Name</th>
              <th className="ps-3 w-40">QTY</th>
              <th className="pe-5 w-50">RATE</th>
              <th className="p-3">AMOUNT</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-600 text-right">
            {[
              { item: 1, name: 'Box', qty: 1, rate: 'RM33.00', amount: 'RM33.00' },
              { item: 2, name: 'Fefe', qty: 1, rate: 'RM3.00', amount: 'RM3.00' },
              { item: 3, name: '33', qty: 1, rate: 'RM4.00', amount: 'RM4.00' },
              { item: 4, name: 'Dcdc', qty: 1, rate: 'RM3.00', amount: 'RM3.00' },
              { item: 5, name: '3rw3', qty: 1, rate: 'RM3.00', amount: 'RM3.00' },
            ].map((row, index) => (
              <tr key={index}>
                <td className="p-3 text-center">{row.item}</td>
                <td className="p-3">{row.name}</td>
                <td className="p-3">{row.qty}</td>
                <td className="p-3">{row.rate}</td>
                <td className="p-3 ">{row.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="text-md text-gray-600 text-center mt-20 mb-3 tracking-wider">
        <p>For any clarifications, please email us at ishlinepro106@gmail.com quoting our invoice number.</p>
        <p>Thank you for entrusting us with the care of your premises.</p>
        <p>IShine Cleaning 4u Services is a brand owned and managed by IShine Cleaning 4u Services.</p>
      </div>
    </div>
  );
};

export default Invoice;
