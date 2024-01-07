// AboutIntro.tsx
import React from "react";
import Button from "../helpers/button/Button";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";
import "./AboutIntro.css";

const AboutIntro: React.FC = () => {
  const heading: React.ReactNode = (
    <>
      Fitness para <span>ellas</span>
    </>
  );

  return (
    <section className="intro" id="about">
      <Container className="intro__grid">
        <article className="intro__content">
          <Heading className="medium" heading={heading} />
          <p className="text">
            Natura fue fundada en 2014 por dos mujeres apasionadas por
            salud y Belleza. Querían crear un espacio seguro para que las mujeres
            entrenamiento, libre del juicio y el acoso que a menudo
            con experiencia en gimnasios tradicionales.
          </p>

          <p className="text">
            El gimnasio ha ayudado a innumerables mujeres a mejorar su salud y
            bienestar, y sigue siendo un lugar donde las mujeres pueden venir
            juntas para apoyarse y motivarse mutuamente.
          </p>
          <Button link="#membership" className="primary">
            Únete a Natura
          </Button>
        </article>
      </Container>
    </section>
  );
};

export default AboutIntro;
