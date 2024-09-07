import React from "react";
import { NavBar } from "../components/homepage-components/NavBar";
import { Hero } from "../components/homepage-components/Hero";

export const HomePage = () => {

  return (
    <>
      <main className="bg-slate-300 h-screen flex justify-center">
        <NavBar />
        <Hero />
      </main>
    </>
  );
};
