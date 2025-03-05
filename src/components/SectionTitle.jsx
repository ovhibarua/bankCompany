import React from "react";

const SectionTitle = ({ addClass, title, titleClr, text }) => {
  return (
    <div className={addClass}>
      <h2 className="mb-4">
        {title} <span className="text-green-60"> {titleClr}</span>
      </h2>
      <p className="w-[910px]">{text}</p>
    </div>
  );
};

export default SectionTitle;
