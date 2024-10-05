'use client';

import { useSearchParams } from 'next/navigation';

const FlightDetails = () => {
  const searchParams = useSearchParams();
  
  const airline = searchParams.get('airline');
  const duration = searchParams.get('duration');
  const price = searchParams.get('price');

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-bold mb-4">{airline} Flight Details</h1>
        <p><strong>Duration:</strong> {duration}</p>
        <p><strong>Price:</strong> ${price}</p>
        <button 
          onClick={() => window.history.back()} 
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default FlightDetails;
