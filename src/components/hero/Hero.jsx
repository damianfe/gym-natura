import React from "react";
import styled from "./Hero.module.css";
import Navbar from "../nav/Navbar";
import Container from "../helpers/wrapper/Container";
import Heading from "../helpers/heading/Heading";
import Button from "../helpers/button/Button";

const Hero = () => {
  const heading = (
    <>
      La evolucion de <span> fitness</span> para <span>ellas</span>
    </>
  );

  return (
    <section className={styled.hero} id="home">
      <Container>
        <Navbar />

        <div className={styled["hero__content--container"]}>
          <article className={styled.hero__content}>
            <Heading className="large" heading={heading} />
            <p className="text">
              Creemos que las mujeres deben hacer ejercicio en un espacio seguro y acogedor. Nuestro
              El objetivo es ayudar a las mujeres a sentirse seguras y cómodas en su propia vida.
              piel y alentarlos a llevar estilos de vida activos y saludables.
            </p>

            <Button className="primary" link="#membership">
            Conviértete en miembro
            </Button>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
