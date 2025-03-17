import React from "react";
import Header from "./Home/Header";
import Product from "./Home/Product";
import Cases from "./Home/Cases";
import Features from "./Home/Features";
import FAQ from "./Home/FAQ";
import Testimonials from "./Home/Testimonials";
import CTA from "./Home/CTA";

const Container = () => {
  return (
    <main className="container mx-auto">
      <Header />
      <Product />
      <Cases />
      <Features />
      <FAQ />
      <Testimonials />
      <CTA />
    </main>
  );
};

export default Container;
