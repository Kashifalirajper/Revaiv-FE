import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhyChooseUS from "./components/WhyChooseUS";
import FeatureSection from "./components/FeatureSection";
import DiveIn from "./components/DiveIn";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App ">
      <Navbar />
      <HeroSection />
      <WhyChooseUS />
      <FeatureSection/>
      <DiveIn/>
      <Testimonials/>
    </div>
  );
}

export default App;
