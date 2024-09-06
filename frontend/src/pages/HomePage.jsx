import React from "react";
import { NavBar } from "../components/homepage-components/NavBar";
import { Hero } from "../components/homepage-components/Hero";
import bgImg  from "../assets/sunrise.jpg"

const bgImage ={
  backgroundImage: `url(${bgImg})`,
  height: "100vh",
  width: "100%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center"
}
export const HomePage = () => {

  return (
    <>
      <main style={bgImage}>
        <NavBar />
        <Hero />
      </main>
    </>
  );
};
