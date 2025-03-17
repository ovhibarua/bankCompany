import React from "react";
import Button from "./Button";

const StaticNav = () => {
  return (
    <>
      <div className="mb-6">
        <ul className="flex flex-col items-center gap-4">
          <li className="cursor-pointer hover:text-green-60">Home</li>
          <li className="cursor-pointer hover:text-green-60">Careers</li>
          <li className="cursor-pointer hover:text-green-60">About</li>
          <li className="cursor-pointer hover:text-green-60">Security</li>
        </ul>
      </div>
      <div className="flex justify-center items-center gap-5">
        <Button addClass={`px-8 bg-grey-15 text-white`} addText={`Sign Up`} />
        <Button addClass={`px-8 bg-green-60`} addText={`Login`} />
      </div>
    </>
  );
};

export default StaticNav;
