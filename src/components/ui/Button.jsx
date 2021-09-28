import React from "react";
import "./Button.styles.scss";

const Button = ({ onClick, className, children }) => {
  return (
    <>
      <div onClick={onClick} className={`button ` + className}>
        {children}
      </div>
    </>
  );
};

export default Button;
