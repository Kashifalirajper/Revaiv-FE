import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Card, Col, Row } from "antd";
import image1 from "../assets/images/getStarted/card1.png";
import image2 from "../assets/images/getStarted/card2.png";
import image3 from "../assets/images/getStarted/card3.png";
import image4 from "../assets/images/getStarted/card4.png";

const testimonialList = [
  {
    title: "Patients who have successfully reached their Goals",
    image: image1,
    description:
      "I felt frustrated with my stubborn belly fat, constantly trying diets and workouts that just didn’t work. My energy was low, and I wasn’t happy with how I looked. Revaiv changed everything. Their personalized plan helped me shed belly fat, boost my energy, and feel confident again!",
    author: "Aanya",
  },
  {
    title: "Patients who have successfully reached their Goals",
    image: image2,
    description:
      "I was losing a lot of hair and it really affected my confidence. I tried different products, but nothing seemed to stop the shedding. Revaiv’s personalized diet  plan and fitness plans worked wonders. They reduced my cortisol levels and my hair loss has slowed down, and I’m seeing new growth. I feel so much more confident!",
    author: "Pratiksha",
  },
  {
    title: "Patients who have successfully reached their Goals",
    image: image3,
    description:
      "Facial hair was something I battled with daily, and it really took a toll on my confidence. But with Revaiv's  customized diet plans and AI driven fitness plans, I finally have smooth, clear skin. It's such a relief to feel confident again",
    author: "Ifrah",
  },
  {
    title: "Patients who have successfully reached their Goals",
    image: image4,
    description:
      "Before Revaiv, my skin was covered with painful acne that really affected my confidence. But with their customized health and AI-driven plan, my skin cleared up, and I finally found freedom from acne. I couldn’t be happier with the results!",
    author: "Aliya",
  },
];

const Slider = () => {
  const [index, setIndex] = useState(0);
  const { title, image, description, author } = testimonialList[index];
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIndex((prevIndex) => (prevIndex + 1) % testimonialList.length); // Cycle through the list
  //   }, 3000); // Change every 3 second
  //   return () => clearTimeout(timer);
  // }, [index]);
  const handleControl = (type) => {
    if (type === "prev") {
      setIndex(index <= 0 ? testimonialList.length - 1 : index - 1);
    } else if (type === "next") {
      setIndex(index >= testimonialList.length - 1 ? 0 : index + 1);
    }
  };

  return (
    <section
      className="max-screen mx-auto ezy__testimonial15 light padding0 py-14 md:py-24 bg-transparent dark:bg-[#0b1727] text-zinc-900 dark:text-white overflow-hidden lg:mb-16 lg:mt-[-200px]"
      key={index}
    >
      <div className="container px-4 mx-auto padding0">
        <Row justify="center" align="middle" className="pb-5">
          <Col xs={24} md={24} lg={12} className="smallScreenHide">
            <h4 className="text-2xl lg:text-5xl text-[#3B3B3B] font-bold mb-2 font-Roboto smallScreenTextCenter ">
              {title}
            </h4>
            <div className="mt-12 smallScreenHide">
              <button
                className="w-10 h-10 text-[12px] bg-white rounded-full inline-flex items-center justify-center duration-150 hover:bg-slate-400 hover:text-slate-800 dark:hover:bg-slate-700 dark:hover:text-slate-200 mr-3"
                onClick={() => handleControl("prev")}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button
                className="w-10 h-10 text-[12px] bg-white rounded-full inline-flex items-center justify-center duration-150 hover:bg-slate-400 hover:text-slate-800 dark:hover:bg-slate-700 dark:hover:text-slate-200"
                onClick={() => handleControl("next")}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
            <div className="w-full mt-12 relative smallScreenHide ">
              {testimonialList.map(function (data) {
                return (
                  <div className="absolute bottom-4  flex  gap-2">
                    {new Array(testimonialList.length).fill("").map((_, i) => (
                      <span
                        key={i}
                        className={`block h-2 cursor-pointer rounded-full transition-all content-[''] ${
                          index === i ? "w-8 bg-[#3B3B3B]" : "w-4 bg-white"
                        }`}
                        onClick={() => setIndex(i)}
                      />
                    ))}
                  </div>
                );
              })}
            </div>
          </Col>
          <Col xs={24} md={24} lg={12}>
            <Row gutter={[16, 16]} align="middle">
              <Col xs={24} md={24} lg={24}>
                <Card
                  style={{
                    height:"100%",
                    background:
                      "linear-gradient(180deg, #F6FBFF 0.21%, #FFFFF8 99.81%)",
                    border: "5px solid #FFF",
                  }}
                >
                  <Row gutter={16}>
                    <Col span={24} className="hidden smallScreenShow">
                      <h4 className="text-2xl lg:text-5xl text-[#3B3B3B] font-bold mb-2 font-Roboto smallScreenTextCenter">
                        {title}
                      </h4>
                    </Col>
                    <Col span={24}>
                      <img src={image} alt={image} style={{ width: "100%",maxHeight:'400px' }} />
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <p className="text-left text-base lg:text-xl font-Roboto mt-5 lg:min-h-48">
                        {description}
                      </p>
                    </Col>
                    <Col span={24}>
                      <h3 className="text-left text-base lg:text-xl font-bold font-Roboto mt-5">
                        {author}
                      </h3>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col span={24} className="hidden smallScreenShow ">
                <div className="w-full mt-12 relative flex justify-center">
                  {testimonialList.map(function (data) {
                    return (
                      <div className="absolute bottom-4  flex  gap-2">
                        {new Array(testimonialList.length)
                          .fill("")
                          .map((_, i) => (
                            <span
                              key={i}
                              className={`block h-2 cursor-pointer rounded-full transition-all content-[''] ${
                                index === i
                                  ? "w-8 bg-[#3B3B3B]"
                                  : "w-4 bg-white"
                              }`}
                              onClick={() => setIndex(i)}
                            />
                          ))}
                      </div>
                    );
                  })}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Slider;
