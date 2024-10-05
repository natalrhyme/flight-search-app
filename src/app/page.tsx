import React from 'react';
import FlightSearch from '@/components/flight_search';  // Import FlightSearch component

const FlightSearchPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <FlightSearch /> {/* Render FlightSearch component */}
    </div>
  );
};

export default FlightSearchPage;
