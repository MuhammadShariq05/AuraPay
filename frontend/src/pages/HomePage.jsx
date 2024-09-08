import React from "react";
import { NavBar } from "../components/homepage-components/NavBar";
import { Hero } from "../components/homepage-components/Hero";

export const HomePage = () => {

  return (
    <>
      <main className="bg-white h-screen flex justify-center">
        <NavBar />
        <Hero />
      </main>
    </>
  );
};
