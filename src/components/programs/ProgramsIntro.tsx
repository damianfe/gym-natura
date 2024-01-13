import React from "react";
import styled from "./ProgramsIntro.module.css";
import Container from "../helpers/wrapper/Container";
import womanRunning from "../../assets/woman_running.png";
import Heading from "../helpers/heading/Heading";
import Button from "../helpers/button/Button";

const ProgramsIntro = () => {
  const heading = (
    <>
      Transpirar a <span>Grandeza</span>
    </>
  );

  return (
    <section className={styled.intro} id="programs">
      <Container className={styled.intro__content}>
        <article className={styled["intro__content--info"]}>
          <Heading className="medium" heading={heading} />
          <p className="text">
            Con instructores experimentados y certificados,
            Natura es el lugar perfecto para comenzar su viaje de ejercicios o llevar su entrenamiento al siguiente nivel.
            Ofrecemos una variedad de clases diseñadas para ayudar a mujeres de todas las formas y tamaños.
          </p>

          <p className="text">
            Nuestras clases incluyen desde yoga y pilates hasta kickboxing y entrenamiento personal y de fuerza,
            asesoramiento nutricional y masajes, además de talleres que se centran en temas como la imagen corporal,
            el cuidado personal,
          </p>
          <Button className="primary" link="#classes">
            Ver Programas
          </Button>
        </article>

        <figure className={styled["intro__content--image"]}>
          <img src={womanRunning} alt="Woman running in gym attire" />
        </figure>
      </Container>
    </section>
  );
};

export default ProgramsIntro;
