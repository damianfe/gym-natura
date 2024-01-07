// Container.tsx
import React from "react";
import "./Container.module.css";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={`${className || ""} container`}>{children}</div>;
};

export default Container;
