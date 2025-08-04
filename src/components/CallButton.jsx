import { PhoneIcon } from 'lucide-react';

const PhoneButton = ({ position = 'top-right' }) => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:+14807906666';
  };

  // Determine positioning classes based on the position prop
  const positionClasses = {
    'top-right': 'fixed top-4 right-4',
    'top-left': 'fixed top-4 left-4',
    'bottom-right': 'fixed bottom-4 right-4',
    'bottom-left': 'fixed bottom-4 left-4',
  };

  return (
    <button
      onClick={handlePhoneClick}
      className={`bounce-box flex items-center gap-2 px-4 w-12 h-12 rounded-full bg-green-600 text-white hover:shadow-green-500 hover:scale-110 transition-all duration-300 shadow-lg z-50 ${positionClasses[position]}`}
    >
      <PhoneIcon className="h-10 w-10 " />
      
    </button>
  );
};

export default PhoneButton;