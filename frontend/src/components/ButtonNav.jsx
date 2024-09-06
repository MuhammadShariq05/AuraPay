import React from 'react';
import './button.css'; // Keep the custom CSS for complex effects

export const ButtonNav = ({ label, onClick }) => {
  return (
    <div className="relative">
      <button
        onClick={onClick}
        className="sparkle-button relative text-white py-1 px-2 font-medium focus:outline-none transition-transform duration-300 shadow-md"
      >
        {label}
        <div className="spark"></div> {/* Complex effects still managed by CSS */}
      </button>
    </div>
  );
};
