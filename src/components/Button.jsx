import React from "react";

const Button = ({ text, colorClass, onClick }) => (
  <button className={`${colorClass} px-4 py-2 rounded font-bold`} onClick={onClick}>
    {text}
  </button>
);

export default Button;
