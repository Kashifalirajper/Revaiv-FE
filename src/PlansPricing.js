import React from "react";
import Hero from "./components/pricing&Plans/Hero";
import Cards from "./components/pricing&Plans/Cards";
import PlanSlider from "./components/pricing&Plans/PlanSlider";
import FaqSection from "./components/FAQs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const PlansPricing = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Cards />
      <PlanSlider />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default PlansPricing;
