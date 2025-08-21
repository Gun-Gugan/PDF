import React from 'react';

const InvoiceTwo = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    <div className="w-full border-b-2 border-dashed border-gray-300">
      <table >
        
        <tbody className="text-center text-sm text-right">
          <tr className="flex">
            <td className="p-3 w-20">6</td>
            <td className="p-3 w-50">dbf</td>
            <td className="p-3 w-40">1</td>
            <td className="p-3 w-51">RM11.00</td>
            <td className="p-3 w-52">RM11.00</td>
          </tr>
          <tr className="flex">
            <td className="p-3 w-20">7</td>
            <td className="p-3 w-50">1 wqd</td>
            <td className="p-3 w-40">1</td>
            <td className="p-3 w-51">RM4.00</td>
            <td className="p-3 w-50">RM4.00</td>
          </tr>
        </tbody>
        
      </table>
</div>
      {/* Summary */}
      <div className="ml-auto text-md w-1/2 grid grid-cols-1 mt-3">
        <div className="flex justify-between border-b border-dashed border-gray-400 p-2">
          <span className="text-left text-gray-400 font-extrabold">
            SERVICE <br />
            SUBTOTAL
          </span>
          <span>RM60.00</span>
        </div>
        <div className="flex justify-between border-b border-dashed border-gray-400 p-2">
          <span className="text-left text-gray-400 font-extrabold">
            EXPENSES <br />
            SUBTOTAL
          </span>
          <span>RM61.00</span>
        </div>
        <div className="flex justify-between border-b border-dashed border-gray-400 p-2">
          <span className="text-left text-gray-400 font-extrabold">DISCOUNT</span>
          <span>RM4.00</span>
        </div>
        <div className="flex justify-between border-b border-dashed border-gray-400 p-2">
          <span className="text-left text-gray-400 font-extrabold">TOTAL</span>
          <span>RM657.00</span>
        </div>
        <div className="flex justify-between border-b border-dashed border-gray-400 p-2">
          <span className="text-left text-gray-400 font-extrabold">PAYMENT</span>
          <span>RM150.00</span>
        </div>
        <div className="flex justify-between p-2">
          <span className="text-left text-gray-400 font-extrabold">BAL DUE</span>
          <span>RM507.00</span>
        </div>
        <div className="text-yellow-500 text-xl font-extrabold text-right font-bold me-2">PARTIALLY PAID</div>
      </div>

      {/* Payment Instructions */}
      <div className="mt-10 pt-5 ps-1 pb-1 text-sm bg-gray-100 relative rounded-lg border-2 border-gray-400">
        <p>Cheques must be crossed and made payable to: iShine Cleaning 4u <br/> Services</p>
        <p>Funds Transfer / DuitNow QR</p>
        <div className="mt-3 rounded">
          <p>Bank Account Details</p>
          <p>Bank Name: XXX</p>
          <p>Name: iShine Cleaning 4u Services</p>
          <p>Bank Account No: XXX</p>
        </div>
        <div className="right-26 rounded absolute -translate-y-42">
          <p className="font-bold">DuitNow QR</p>
          <p>Code:</p>
          <p className="ms-5 text-gray-500 mt-2">No QR</p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 text-md text-gray-600 text-center mt-110 tracking-wider">
        <p>For any clarifications please email us at ishinero106@gmail.com quoting our invoice number.</p>
        <p>Thank you for entrusting us with the Care of your premises</p>
        <p>iShine Cleaning 4u Services is a brand owned and managed by iShine Cleaning 4u Services</p>
      </div>
    </div>
  );
};

export default InvoiceTwo;
