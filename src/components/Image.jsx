import React from "react";

const Image = ({ addImg, addClass }) => {
  return <img className={addClass} src={addImg} alt="Img" />;
};

export default Image;
