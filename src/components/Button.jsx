import React from "react";

const Button = ({ addText, addClass }) => {
  return (
    <button className={`px-8 py-3.5 rounded-full cursor-pointer ${addClass}`}>
      {addText}
    </button>
  );
};

export default Button;
