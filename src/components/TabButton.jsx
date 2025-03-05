import React, { useState } from "react";
import Button from "./Button";

const TabButton = () => {
  const [tab, setTab] = useState(true);
  const [tab2, setTab2] = useState(false);
  const click = () => {
    setTab(true);
    setTab2(false);
  };
  const click2 = () => {
    setTab2(true);
    setTab(false);
  };
  return (
    <div className="flex items-center rounded-full p-3.5 border-[1px] border-grey-15">
      <Button
        clickFunc={click}
        addClass={
          tab ? `px-6 bg-green-60 text-grey-15` : `px-6 text-white bg-none`
        }
        addText={`For Individuals`}
      />
      <Button
        clickFunc={click2}
        addClass={
          tab2 ? `px-6 bg-green-60 text-grey-15` : `px-6 text-white bg-none`
        }
        addText={`For Businesses`}
      />
    </div>
  );
};

export default TabButton;
