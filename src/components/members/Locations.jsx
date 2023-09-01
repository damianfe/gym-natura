import React from "react";
import styled from "./Locations.module.css";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";
import Item from "../helpers/item/Item";
import { gymLocations } from "./gymLocations";

const Locations = () => {
  // map through the gymLocations array and render a Item component for each location
  const locations = gymLocations.map((location) => {
    return <Item key={location.id} item={location} className="location" />;
  });

  return (
    <section className={styled.locations} id="locations">
      <Container>
        <article className={styled.locations__content}>
          <Heading className="medium--dark" heading="be part of the elite" />
          <p className="text--dark">
            Ya sea que recién estés comenzando tu viaje de fitness o seas un
            profesional experimentado, tenemos algo para todos.
          </p>
        </article>

        <div className={styled.locations__list}>{locations}</div>
      </Container>
    </section>
  );
};

export default Locations;
