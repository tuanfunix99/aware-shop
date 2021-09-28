import React from "react";
import "./ButtonLink.styles.scss";

const ButtonLink = ({ link, className, children }) => {
  return (
    <>
      <a href={link} className={`buttonlk ` + className}> { children } </a>
    </>
  );
};

export default ButtonLink;
