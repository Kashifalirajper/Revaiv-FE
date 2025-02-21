import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/businessComponents/Hero";
import Footer from "./components/Footer";
import QueryForm from "./components/businessComponents/QueryForm";

const Business = () => {
  return (
    <div className="bg-transparent">
      <Navbar/>
      <Hero />
      <QueryForm />
      <Footer />
    </div>
  );
};

export default Business;
