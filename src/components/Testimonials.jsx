import React, { useState, useEffect } from "react";
import { Carousel } from "antd";
import feedback from "../assets/images/feedback-img.png";
import sara from "../assets/images/client.png";

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      name: "Maryam",
      desc: "I struggled with PCOS for years, trying everything to lose weight. Revaiv’s personalized diet and AI fitness plan fit my energy levels perfectly. My health coach truly understood me. Six months later, I’m 15 pounds lighter, and my cycles are regular again. I finally feel in control of my health.",
    },
    {
      name: "Emma",
      desc: "With hypothyroidism, I was always tired, and losing weight felt impossible. RevAiv’s meal plan supported my thyroid, and the AI fitness program matched my slow metabolism. Four months later, my energy is back, and I’ve lost 8 pounds. I feel so much better—like myself again.",
    },
    {
      name: "Elisa",
      desc: "After being diagnosed with NAFLD, I was unsure where to start. RevAiv’s AI diet plan focused on liver health, and their fitness plan helped me regain strength. The daily tracking kept me accountable. Six months later, my liver function has improved, and I finally feel in control of my health.",
    },
    {
      name: "Priyanka",
      desc: "Years of cystic acne made me lose hope. RevAiv’s personalized diet eliminated inflammation triggers, and the fitness plan helped reduce my stress. Within three months, my skin cleared up thanks to the guidance from my health coach. I’ve never felt this confident in my own skin before!",
    },
    {
      name: "Bella",
      desc: "Menopause hit me hard—hot flashes, fatigue, weight gain. RevAiv’s hormone-balancing diet and low-impact AI workouts helped me regain control. My health coach made thoughtful adjustments as I progressed. After five months, I’ve lost 10 pounds, my hot flashes have eased, and I finally feel like myself again.",
    },
  ];
  const [progresses, setProgresses] = useState(
    new Array(slides.length).fill(0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setProgresses((currentProgresses) => {
        const updatedProgresses = [...currentProgresses];
        updatedProgresses[activeSlide] =
          updatedProgresses[activeSlide] >= 100
            ? 0
            : updatedProgresses[activeSlide] + 2; // Increment progress by 2% every 200ms
        return updatedProgresses;
      });

      if (progresses[activeSlide] >= 100) {
        setActiveSlide((currentSlide) => (currentSlide + 1) % slides.length);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [activeSlide, progresses]);

  return (
    <section className="bg-[#f0f0f0] pt-2 lg:pt-10">
      <div className="max-screen flex-col mx-auto lg:p-5">
        <div
          className="rounded-[20px] lg:rounded-[40px] shadow-lg p-4 relative padding0"
          style={{
            background:
              "linear-gradient(180deg, #F6FBFF 0.21%, #FFFFF8 99.81%)",
            border: "5px solid #FFF",
          }}
        >

          <Carousel autoplay effect="fade" autoplaySpeed={8400} speed={100} // Slide transition speed
            dots={false} // Disable dots navigation
            draggable={false} // Disable dragging/swiping
            pauseOnHover={false} // Do not pause on hover
            pauseOnDotsHover={false} // Do not pause when dots are hovered (even though dots are disabled)
            arrows={false} // Disable arrow controls
            touchMove={false} // Prevent touch movement
            keyboard={false} // Disable keyboard navigation>
            >
            {slides.map((text, index) => (
              <div key={index}>
                <figure className="p-2 lg:p-5 mx-auto text-left lg:text-center">
                  <img
                    src={feedback}
                    className="h-30 lg:mx-auto mb-5 mt-10"
                    alt="feedback"
                  />
                  <blockquote>
                    <p className="text-base  lg:text-xl font-normal text-[#3B3B3B] font-Roboto">
                      "{text.desc}"
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center justify-start lg:justify-center mt-8 space-x-3">
                    <img
                      className="w-12 h-12 lg:w-24 lg:h-24 rounded-full"
                      src={sara}
                      alt="Profile"
                    />
                    <span className="text-base lg:text-2xl text-gray-900 font-normal">
                      {text.name}
                    </span>
                  </figcaption>
                </figure>
              </div>
            ))}
          </Carousel>
          <div className="flex justify-center space-x-4 mt-2">
            {progresses.map((progress, index) => (
              <div
                key={index}
                className="bg-[#0000000d] rounded-full drop-shadow-2xl h-2 overflow-hidden"
                style={{ width: `${100 / slides.length}%` }}
              >
                <div
                  className="bg-[#01C7B1] h-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
