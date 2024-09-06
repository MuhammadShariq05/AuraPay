import React, { useState } from "react";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { WarningText } from "../components/WarningText";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Siginup = () => {
  const [firstName, setFirstName] = useState("");
  const [lasrName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 shadow-lg">
            <Heading label={"Sign up"} />
            <SubHeading label={"Enter your information to create an account"} />

            <InputBox
              label={"First Name"}
              placeholder={"John"}
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
            />

            <InputBox
              label={"Last Lame"}
              placeholder={"Dae"}
              type="text"
              onChange={(e) => setLastName(e.target.value)}
            />

            <InputBox
              label={"User Name"}
              placeholder={"johndae123"}
              type="text"
              onChange={(e) => setUserName(e.target.value)}
            />

            <InputBox
              label={"Password"}
              placeholder={"12345"}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="mt-5 bg-slate-900 border rounded-lg shadow-sm text-white">
              <Button
                onClick={async () => {
                  const response = await axios
                    .post("http://localhost:3000/api/v1/user/signup", {
                      userName,
                      firstName,
                      lasrName,
                      password,
                    })
                    .then();
                  localStorage.getItem("token", response.data.token);
                  navigate("/dashboard");
                }}
                label={"Sign up"}
              />
            </div>
            <WarningText
              label={"Already have an account?"}
              buttonText={"Sign in"}
              to={"/signin"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
