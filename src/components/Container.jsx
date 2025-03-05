import React from "react";
import Header from "./Home/Header";
import Product from "./Home/Product";
import Cases from "./Home/Cases";

const Container = () => {
  return (
    <main className="container mx-auto">
      <Header />
      <Product />
      <Cases />
    </main>
  );
};

export default Container;
