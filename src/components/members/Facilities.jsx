import React from "react";
import styled from "./Facilities.module.css";
import boxing from "../../assets/woman_boxing.mp4";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";

const Facilities = () => {
  const heading = (
    <>
      Donde la <span>Salud</span>, La Belleza, y el fitness Se Encuentran.
    </>
  );

  return (
    <section className={styled.facility} id="facilities">
      <video src={boxing} autoPlay loop muted />
      {/* Video by cottonbro on pexels */}
      <div className={styled.facility__overlay}>
        <Container>
          <article className={styled.facility__content}>
            <Heading className="medium" heading={heading} />
            <p className="text">
              Aprovecha nuestros vestuarios privados, duchas, bien equipados.
              piso del gimnasio, saunas, toallas con infusión de eucalipto y peluquería y maquillaje
              estaciones.
            </p>
          </article>
        </Container>
      </div>
    </section>
  );
};

export default Facilities;
