import React from "react";
import Hero from "./Hero";
import HeroBnnr from "./HeroBnnr";

const Header = () => {
  return (
    <header className="py-16 lg:py-28 flex flex-col gap-16 lg:gap-0 lg:flex-row items-center">
      <Hero />
      <HeroBnnr />
    </header>
  );
};
export default Header;
