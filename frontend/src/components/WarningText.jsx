import React from "react";
import { Link } from "react-router-dom";

export const WarningText = ({ label, buttonText, to }) => {
  return (
    <>
      <div className="py-2 flex justify-center text-sm text-neutral-500 font-semibold mt-2">
        <div>
          {label}
        </div>
        <Link className="pointer underline pl-1 cursor-pointer font-bold" to={to}>
          {buttonText}
        </Link>
      </div>
    </>
  );
};
