
'use client'
import FlightCard from '@/components/FlightCard';
import SearchForm from '@/components/SearchForm';
import { useState, useEffect } from 'react';
import Spinner from '@/components/spinner';

// Define the Flight interface
interface Flight {
  airline: string;
  duration: string;
  price: number;
}

const ResultsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null); // Allow null
  const [flights, setFlights] = useState<Flight[]>([
    { airline: 'Air India', duration: '15h', price: 500 },
    { airline: 'Emirates', duration: '14h 30m', price: 600 },
    { airline: 'Qatar Airways', duration: '14h', price: 700 },
    { airline: 'Lufthansa', duration: '16h', price: 550 },
    { airline: 'British Airways', duration: '13h 45m', price: 650 },
    // More flight data...
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleFlightClick = (flight: Flight) => {
    setSelectedFlight(flight); // Set selected flight
  };

  const closeDetails = () => {
    setSelectedFlight(null); // Close flight details
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 relative">
      <SearchForm />

      {isLoading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {flights.map((flight, index) => (
            <FlightCard
              key={index}
              airline={flight.airline}
              duration={flight.duration}
              price={flight.price}
              onClick={() => handleFlightClick(flight)} // Pass the flight with the correct type
            />
          ))}
        </div>
      )}

      {/* Overlay for Flight Details */}
      {selectedFlight && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md max-w-md w-full">
            <h2 className="text-xl font-bold mb-2">{selectedFlight.airline}</h2>
            <p><strong>Duration:</strong> {selectedFlight.duration}</p>
            <p><strong>Price:</strong> ${selectedFlight.price}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
              onClick={closeDetails} // Close button
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultsPage;
