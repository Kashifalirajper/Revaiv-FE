import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhyChooseUS from "./components/WhyChooseUS";
import FeatureSection from "./components/FeatureSection";
import DiveIn from "./components/DiveIn";
import Testimonials from "./components/Testimonials";
import FaqSection from "./components/FAQs";
import ThisIsRevaiv from "./components/ThisIsRevaiv";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <WhyChooseUS />
      <FeatureSection />
      <DiveIn />
      <Testimonials />
      <FaqSection />
      <ThisIsRevaiv />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
