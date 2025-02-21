import React from "react";
import Hero from "./components/getStartedComponents/Hero";
import AnalyseSteps from "./components/getStartedComponents/AnalyseSteps";
import IncludeProgram from "./components/getStartedComponents/IncludeProgram";
import FeatureSection from "./components/getStartedComponents/FeatureSection";
import Journey from "./components/getStartedComponents/Journey";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const GetStarted = () => {
  return (
    <div className="getStartedPage">
      <Navbar />
      <Hero />
      <AnalyseSteps />
      <FeatureSection />
      <IncludeProgram />
      <Journey />
      <AnalyseSteps />
      <Footer />
    </div>
  );
};

export default GetStarted;
