import React from "react";
import Hero from "./Hero";
import HeroBnnr from "./HeroBnnr";

const Header = () => {
  return (
    <header className="py-28 flex items-center">
      <Hero />
      <HeroBnnr />
    </header>
  );
};
export default Header;
