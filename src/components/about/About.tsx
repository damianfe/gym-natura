import React from "react";
import AboutIntro from "./AboutIntro";
import Benefits from "./Benefits";

interface AboutProps {
  // Define las props específicas que espera el componente aquí
}

const About: React.FC<AboutProps> = () => {
  return (
    <>
      <AboutIntro />
      <Benefits />
    </>
  );
};

export default About;
