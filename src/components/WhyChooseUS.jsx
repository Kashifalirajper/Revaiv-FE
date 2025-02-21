import React from "react";
import { Row, Col } from "antd";
import image1 from "../assets/images/feature-1.jpg";
import image2 from "../assets/images/feature-2.jpg";
import image3 from "../assets/images/feature-3.jpg";
import image4 from "../assets/images/feature-4.jpg";
import image5 from "../assets/images/feature-5.jpg";
import image6 from "../assets/images/feature-6.jpg";
const CardsSection = () => {
  const cards = [
    {
      title: "Know your body",
      description:
        "We believe that every individual’s health journey is unique.",
      image: image1,
    },
    {
      title: "Monitor your Cycles",
      description:
        "Monitoring your cycles helps you to keep an eye on your cycle abnormalities and symptom variations",
      image: image2,
    },
    {
      title: "Body specific workouts",
      description:
        "Our AI fitness plans are crafted according to your unique body's needs offering real-time feedback.",
      image: image3,
    },
    {
      title: "Personalized meal plans",
      description:
        "Our meal plans are tailored as per your unique body needs and preferences.",
      image: image4,
    },
    {
      title: "Connect with experts",
      description:
        "RevAiv provides one-to-one health coach consultation helping you understand your body effectively.",
      image: image5,
    },
    {
      title: "Get meaningful insights",
      description:
        "Get valuable insights by tracking your health parameters and analyzing your progress",
      image: image6,
    },
  ];

  return (
    <div className="bg-transparent max-screen mx-auto flex-col mt-6 lg:mt-52">
      <h1 className="smallScreenTextCenter text-2xl lg:text-5xl text-left font-medium lg:font-bold mb-6 font-Roboto">
        Why Choose <br /> RevAiV?
      </h1>
      <p className="smallScreenHide text-2xl font-normal text-left mb-10 font-Roboto text-[#3B3B3B]">
        We provide end-to-end personalized <br />
        care to improve your symptoms
      </p>
      <p className="smallScreenTextCenter smallScreenShow hidden  text-base text-left mb-6 font-Roboto">
        We provide end-to-end personalized <br />
        care to improve your symptoms
      </p>

      <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 60 }, { xs: 8, sm: 16, md: 24, lg: 60 }]} justify="center" className="rowGap">
        {cards.map((card, index) => (
          <Col
            key={index}
            xs={24}
            sm={24}
            lg={12}
            xl={12}
            className={`flex justify-center ${
              index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
            }`}
          >
            <div className="bg-white max-w-[360px] lg:max-w-[532px] p-0 rounded-[20px] lg:rounded-[30px] shadow-lg">
              <div className="pt-9 pb-0 px-4 lg:px-10">
                <h5 className="mb-2 text-xl lg:text-3xl font-semibold text-center first-letter:tracking-tight text-[#3B3B3B]font-Roboto">
                  {card.title}
                </h5>
                <p className="lg:min-h-24 text-sm lg:text-lg font-normal text-center text-[#3B3B3B] font-Roboto">
                  {card.description}
                </p>
              </div>
              <img
                className="rounded-b-[40px] lg:h-[360px] mx-auto"
                src={card.image}
                alt={card.title}
              />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CardsSection;
