import React, { ReactNode } from "react";
import styled from "./Container.module.css";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={`${styled.container} ${className || ""}`}>{children}</div>;
};

export default Container;
