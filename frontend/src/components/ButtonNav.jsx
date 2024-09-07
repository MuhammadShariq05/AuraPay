import React from 'react';
import './button.css'; // Keep the custom CSS for complex effects

export const ButtonNav = ({ label, onClick }) => {
  return (
    <div className="button text-center shadow-lg">
      <button
        onClick={onClick}
        className="button-content py-2 text-center"
      >
        {label}
      </button>
    </div>
  );
};
