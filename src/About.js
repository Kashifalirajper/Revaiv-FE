import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/aboutComponents/Hero";
import Footer from "./components/Footer";
import Solutions from "./components/aboutComponents/Solutions";
import Commitment from "./components/aboutComponents/Commitment";
import FooterSection from "./components/aboutComponents/FooterSection";

const About = () => {
  return (
    <div className="bg-transparent">
      <Navbar/>
      <Hero/>
      <Solutions/>
      <Commitment/>
      <FooterSection/>
      <Footer />
    </div>
  );
};

export default About;
