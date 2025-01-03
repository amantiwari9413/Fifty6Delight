import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-orange-600">
      <h1 className="text-4xl font-bold text-orange-600 mb-8">Welcome to Our Website</h1>
      <div className="flex flex-col space-y-4">
        <button
          className="bg-orange-300 text-white py-2 px-4 rounded-lg shadow-md hover:bg-orange-400"
          onClick={() => handleNavigation('/menu')}
        >
          Menu
        </button>
        <button
          className="bg-orange-300 text-white py-2 px-4 rounded-lg shadow-md hover:bg-orange-400"
          onClick={() => handleNavigation('/Admin')}
        >
          Admin
        </button>
        <button
          className="bg-orange-300 text-white py-2 px-4 rounded-lg shadow-md hover:bg-orange-400"
          onClick={() => handleNavigation('/items')}
        >
          All Item
        </button>
        <button
          className="bg-orange-300 text-white py-2 px-4 rounded-lg shadow-md hover:bg-orange-400"
          onClick={() => handleNavigation('/option4')}
        >
          Option 4
        </button>
        <button
          className="bg-orange-300 text-white py-2 px-4 rounded-lg shadow-md hover:bg-orange-400"
          onClick={() => handleNavigation('/option5')}
        >
          Option 5
        </button>
      </div>
    </div>
  );
};

export default Home;
