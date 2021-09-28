import React from "react";
import "./FormInput.styles.scss";

const FormInput = ({ className, label, type, placeholder, name, onChange, onKeyUp }) => {
  return (
    <>
      <div className={ `classform ` + className }>
        <label className="classform__label" htmlFor={label}>{label}</label>
        <br />
        <input
          className="classform__input"
          onKeyUp={onKeyUp}
          onChange={onChange}
          id={label}
          type={type}
          placeholder={placeholder}
          name={name}
        />
      </div>
    </>
  );
};

export default FormInput;
