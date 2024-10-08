import React from 'react';

const RegistrationFeeSection = () => {
  return (
    <div className="w-full px-10 mx-auto my-12">
      <table className="table-auto w-full text-left text-sm border-green-900">
        <thead>
          <tr className="bg-[#87cbb3] text-white">
            <th className="px-4 py-2">Registration Fee</th>
            <th className="px-4 py-2">Indian (INR)</th>
            <th className="px-4 py-2">Foreign (USD)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white text-black">
            <td className="border px-4 py-2">Faculty/Industry/Student</td>
            <td className="border px-4 py-2">NIL</td>
            <td className="border px-4 py-2">NIL</td>
          </tr>
          <tr className="bg-blue-100 text-black">
            <td className="border px-4 py-2">Early bird Registration</td>
            <td className="border px-4 py-2">NIL</td>
            <td className="border px-4 py-2">NIL</td>
          </tr>
        </tbody>
      </table>
      <p className="text-sm mt-4 ml-2">*inclusive of GST</p>
    </div>
  );
};

export default RegistrationFeeSection;
