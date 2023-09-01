import React from "react";
import styled from "./Benefits.module.css";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";
import Button from "../helpers/button/Button";

const Benefits = () => {
  const heading = (
    <>
      construyendo <span>confianza.</span> construyendo Aptitud.
    </>
  );
  return (
    <section className={styled.benefits__container}>
      <div className={styled.benefits}>
        <Container className={styled.benefits__content}>
          <article className={styled["benefits__content--intro"]}>
            <Heading className="medium" heading={heading} />
            <p className="text">
              Como gimnasio exclusivo para mujeres, nuestro objetivo principal es ayudar a las mujeres a desarrollar
              confianza a través del ejercicio y manteniéndose saludable. Ofrecemos un
              variedad de clases y programas diseñados para ayudar a las mujeres de
              todos los niveles de condición física alcanzan sus objetivos.
            </p>

            <p className="text">
              Con Natura puedes acceder a una comunidad solidaria de
              mujeres, mejorar su estado físico general y aumentar su
              auto confianza.
            </p>
            <Button link="#locations" className="primary">
              Ver Ubicaciones
            </Button>
          </article>
        </Container>

        <figure className={styled.benefits__image}>
          <img
            src="https://images.unsplash.com/photo-1539794830467-1f1755804d13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="A woman stretching her arms"
          />
        </figure>
      </div>
    </section>
  );
};

export default Benefits;
