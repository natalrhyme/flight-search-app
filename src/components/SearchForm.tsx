import { useState } from 'react';
import { useRouter } from 'next/navigation';
import airportsData from '../data/airports.json';

const SearchForm = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/results?from=${from}&to=${to}&departureDate=${departureDate}&returnDate=${returnDate}&passengers=${passengers}`);
  };

  return (
    <div className="bg-white shadow-md p-4 rounded-md mb-6 flex flex-wrap items-center justify-between">
     
            <label htmlFor="from" className="w-14 font-semibold mb-1">From:</label>
            <select
              id="from"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-64 border rounded-md p-2 mr-2"
            >
              <option value="">Select Departure Airport</option>
              {airportsData.airports.map((airport) => (
                <option key={airport.code} value={airport.code}>
                  {airport.name} ({airport.code}) - {airport.city}, {airport.country}
                </option>
              ))}
            </select>
    
      
           
            <label htmlFor="to" className="w-8 font-semibold mb-1">To:</label>
            <select
              id="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-64 border rounded-md p-2 mr-2"
            >
              <option value="">Select Destination Airport</option>
              {airportsData.airports.map((airport) => (
                <option key={airport.code} value={airport.code}>
                  {airport.name} ({airport.code}) - {airport.city}, {airport.country}
                </option>
              ))}
            </select>
         
      <input
        className="p-2 border rounded mr-2 flex-1"
        type="date"
        value={departureDate}
        onChange={(e) => setDepartureDate(e.target.value)}
      />
      <input
        className="p-2 border rounded mr-2 flex-1"
        type="date"
        value={returnDate}
        onChange={(e) => setReturnDate(e.target.value)}
      />
      <input
        className="p-2 border rounded mr-2 flex-1"
        type="number"
        min="1"
        value={passengers}
        onChange={(e) => setPassengers(Number(e.target.value))}
      />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchForm;
