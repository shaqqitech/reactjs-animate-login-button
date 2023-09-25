import React, { useState } from 'react';

const HoverButton = () => {
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    const newX = Math.random() * window.innerWidth;
    const newY = Math.random() * window.innerHeight;
    setButtonPosition({ x: newX, y: newY });
  };

  const buttonStyle = {
    position: 'absolute',
    top: `${buttonPosition.y}px`,
    left: `${buttonPosition.x}px`,
    transition: 'top 0.3s ease-in-out, left 0.3s ease-in-out', // Add transition properties
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
    >
      Hover Me
    </button>
  );
};

export default HoverButton;
