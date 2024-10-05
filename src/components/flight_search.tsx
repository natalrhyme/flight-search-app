'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Use useRouter from next/navigation for new router API
import airportsData from '../data/airports.json';  // Import airport data

const FlightSearch = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState(1);

  const router = useRouter();  // Initialize router

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Push the search parameters to the results page
    router.push(`/results?from=${from}&to=${to}&departureDate=${departureDate}&returnDate=${returnDate}&passengers=${passengers}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-bold mb-4">Flight Search</h1>
        <form onSubmit={handleSearch} className="space-y-4">
          {/* From dropdown */}
          <div className="flex flex-col">
            <label htmlFor="from" className="font-semibold mb-1">From:</label>
            <select
              id="from"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="border border-gray-300 rounded-md p-2"
            >
              <option value="">Select Departure Airport</option>
              {airportsData.airports.map((airport) => (
                <option key={airport.code} value={airport.code}>
                  {airport.name} ({airport.code}) - {airport.city}, {airport.country}
                </option>
              ))}
            </select>
          </div>

          {/* To dropdown */}
          <div className="flex flex-col">
            <label htmlFor="to" className="font-semibold mb-1">To:</label>
            <select
              id="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="border border-gray-300 rounded-md p-2"
            >
              <option value="">Select Destination Airport</option>
              {airportsData.airports.map((airport) => (
                <option key={airport.code} value={airport.code}>
                  {airport.name} ({airport.code}) - {airport.city}, {airport.country}
                </option>
              ))}
            </select>
          </div>

          {/* Departure Date */}
          <div className="flex flex-col">
            <label htmlFor="departure" className="font-semibold mb-1">Departure Date:</label>
            <input
              type="date"
              id="departure"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Return Date */}
          <div className="flex flex-col">
            <label htmlFor="return" className="font-semibold mb-1">Return Date:</label>
            <input
              type="date"
              id="return"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Passengers */}
          <div className="flex flex-col">
            <label htmlFor="passengers" className="font-semibold mb-1">Passengers:</label>
            <input
              type="number"
              id="passengers"
              min="1"
              value={passengers}
              onChange={(e) => setPassengers(parseInt(e.target.value))}
              className="border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md w-full"
          >
            Search Flights
          </button>
        </form>
      </div>
    </div>
  );
};

export default FlightSearch;
