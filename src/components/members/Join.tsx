import React from "react";
import styled from "./Join.module.css";
import Button from "../helpers/button/Button";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";
import exercise from "../../assets/exercise.png";

const Join = () => {
  const heading = (
    <>
      Conveniente. <span>Seguro.</span> Accesible.
    </>
  );

  return (
    <Container>
      <section className={styled.join} id="membership">
        <div>
          <article className={styled.join__content}>
            <Heading className="medium--dark" heading={heading} />
            <p className="text--dark">
              Si estás buscando un gimnasio de lujo que se dedique a ayudar
              Mujeres de todas las formas y tamaños, no busquen más que Natura. Con
              toneladas de programas para elegir, puedes encontrar el perfecto para
              su nivel de condición física y sus objetivos.
            </p>
            <p className="text--dark">
              Además, la comunidad solidaria de mujeres de Natura te hará
              Siéntete como en casa. ¿Entonces, Qué esperas? Regístrese hoy y
              ¡Empiece a alcanzar sus objetivos de fitness!
            </p>
          </article>

          <form>
            <input type="text" placeholder="Enter your email" />
            <Button className="neutral">Únete a Natura</Button>
          </form>
        </div>

        <figure className={styled.join__image}>
          <img src={exercise} alt="Woman in the gym exercising" />
        </figure>
      </section>
    </Container>
  );
};

export default Join;
