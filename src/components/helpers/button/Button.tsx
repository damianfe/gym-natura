// Button.tsx
import React from "react";
import "./Button.module.css"; 

interface ButtonProps {
    className?: string;
    children: React.ReactNode;
    link?: string;
}

const Button: React.FC<ButtonProps> = ({ className, children }) => {
    return (
        <button className={`button ${className || ""}`}>
            {children}
        </button>
    );
};

export default Button;
