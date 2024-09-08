import React from "react";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import { ButtonNav } from "../ButtonNav";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="sticky top-0 z-50">
        <div className="container flex justify-center items-center">
          <div className="hidden md:block">
            <ul className="flex font-semibold justify-center items-center gap-4">
              <li className="text-gray-900 px- py-2">
                <ButtonNav
                  onClick={async () => {
                    navigate("/signup");
                  }}
                  label={"Sign up"}
                />
              </li>
              <li>
                <ButtonNav
                  onClick={async () => {
                    navigate("/signin");
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
