import React, { useState } from "react";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { WarningText } from "../components/WarningText";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-2 shadow-lg">
            <Heading label={"Sign in"} />
            <SubHeading
              label={"Enter your credentials to access your account"}
            />
            <InputBox
              label={"Username"}
              type="text"
              onChange={(e) => setUserName(e.target.value)}
            />
            <InputBox
              label={"Password"}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="bg-slate-900 p-1 mt-5 ml-10 mr-10 rounded-lg">
              <Button
                onClick={async () => {
                  try {
                    const response = await axios
                      .post("http://localhost:3000/api/v1/user/signin", {
                        userName,
                        password,
                      })
                      .then();
                    localStorage.getItem("token", response.data.token);
                    navigate("/dashboard");
                  } catch (error) {
                    console.log("Error during sign in:", error)
                  }
                }}
                // onClick={navigate("/dashboard")}
                label={"Sign in"}
              />
            </div>
            <WarningText
              label={"Dont have an account?"}
              buttonText={"Sign up"}
              to={"/signup"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
