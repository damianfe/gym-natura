// Item.tsx
import React from "react";
import "./Item.module.css";
import Heading from "../heading/Heading";

interface ItemProps {
  item: {
    image: string;
    heading: string;
    desc: string;
  };
  theme: "light" | "dark";
  className: string;
}

const Item: React.FC<ItemProps> = (props) => {
  const { image, heading, desc } = props.item;

  // classNames to be applied based on the theme
  const headingClassName = props.theme === "light" ? "small" : "small--dark";
  const descClassName = props.theme === "light" ? "text" : "text--dark";

  return (
    <article className={props.className}>
      <figure>
        <img src={image} alt={heading} />
      </figure>

      <div className="item__info">
        <Heading className={headingClassName} heading={heading} />
        <p className={descClassName}>{desc}</p>
      </div>
    </article>
  );
};

export default Item;
