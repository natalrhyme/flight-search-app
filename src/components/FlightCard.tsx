
interface FlightCardProps {
  airline: string;
  duration: string;
  price: number;
  onClick: () => void;
}

const FlightCard = ({ airline, duration, price, onClick }: FlightCardProps) => {
  return (
    <div 
      className="bg-white shadow-md p-4 rounded-md mb-4 hover:bg-gray-100 cursor-pointer"
      onClick={onClick}
    >
      <h2 className="text-xl font-bold">{airline}</h2>
      <p>Duration: {duration}</p>
      <p className="text-blue-500 font-semibold">Price: ${price}</p>
    </div>
  );
};

export default FlightCard;

  