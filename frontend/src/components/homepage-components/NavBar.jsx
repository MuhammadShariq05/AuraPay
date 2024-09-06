import React from "react";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <div className="container flex justify-between items-center">
          <a href="#" className="text-3xl font-bold text-gray-800">
            AuraPay
          </a>
          <div className="hidden md:block justify-end">
            <ul>
              <li>
                <Button
                  onClick={async () => {
                    navigate("/signup");
                  }}
                  label={"Sign up"}
                />
              </li>
              <li>
                <Button
                  onClick={async () => {
                    navigate("/signup");
                  }}
                  label={"Sign in"}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
