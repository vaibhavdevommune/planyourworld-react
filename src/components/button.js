import React from "react";

const Button = ({ text, onClick, type = "button", className = "", children, placeholder }) => {
    return (
        <button type={type} className={`btn ${className}`} onClick={onClick}>
            {children}
            {text}
            {placeholder}
        </button>
    );
};

export default Button;
