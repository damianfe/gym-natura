import React from "react";
import styled from "./ProgramsList.module.css";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";
import { classes } from "./classes";
import Item from "../helpers/item/Item";

const ProgramsList = () => {
  const programs = classes.map((program: { id: any; }) => {
    return (
      <Item key={program.id} item={program} className="program" theme="light" />
    );
  });

  return (
    <section className={styled.programs} id="classes">
      <Container>
        <article className={styled.programs__content}>
          <Heading className="medium" heading="Nuestros Programas" />
          <p className="text">
          No importa cuál sea su nivel de condición física, 
          hay un programa en Natura que es perfecto para usted.
          </p>
        </article>

        <div className={styled.programs__list}>{programs}</div>
      </Container>
    </section>
  );
};

export default ProgramsList;
