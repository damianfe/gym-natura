// Heading.tsx
import React from "react";
import "./Heading.module.css"; 

interface HeadingProps {
  heading: React.ReactNode;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ heading, className }) => {
  return (
    <h1 className={`heading ${className || ""}`}>
      {heading}
    </h1>
  );
};

export default Heading;
