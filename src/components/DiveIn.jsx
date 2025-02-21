import React from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/images/diveIn1.png";
import image2 from "../assets/images/diveIn2.png";
import image3 from "../assets/images/diveIn3.png";
import image4 from "../assets/images/diveIn4.png";

const DiveIn = () => {
  const navigate = useNavigate();

  return (
    <section
      style={{
        background: "linear-gradient(249deg, #F8F0F0 0%, #DEF1F0 100%)"
      }}
      className="shadow-lg"
    >
      <div className="max-screen mx-auto">
        <div className="rounded-[20px] lg:rounded-[40px]  mx-auto  p-1 pb-2">
          <div className="grid py-8 mx-auto gap:2 lg:gap-8 grid-cols-12">
            <div className="flex flex-col justify-center mr-auto  lg:col-span-5 col-span-12 w-full text-left smallScreenTextCenter">
              <h1 className="text-xl font-medium lg:text-5xl text-left lg:font-bold mb-6 font-Roboto smallScreenTextCenter">
                Curious? <br /> Dive In!
              </h1>
              <p className="text-base lg:text-xl text-left mb-6 smallScreenTextCenter font-Roboto">
                RevAiv is built on the vision to create a positive impact on
                people's health.
              </p>
              <button
                onClick={() => navigate("/get-started")}
                className="smallScreenHide getStartedBtn bg-[#1A3333] text-white max-w-44"
              >
                Get Started
              </button>
            </div>
            <div className="lg:mt-0 lg:col-span-7 col-span-12 justify-end  lg:flex lg:order-none">
              <div className="grid grid-cols-2 gap-2 lg:gap-4">
                <div className="max-w-56 flex flex-col  items-center text-left p-4 lg:p-4 bg-gray-50 rounded-[12px] :lg:rounded-[20px] shadow">
                  <img
                    src={image1}
                    alt="Relationship"
                    className="mb-3 h-16 lg:h-28"
                  />
                  <p className="text-xs lg:text-base text-center text-gray-700 font-Roboto">
                    Compassionate Care Team
                  </p>
                </div>
                <div className="max-w-56 flex flex-col  items-center text-left p-4 lg:p-4 bg-gray-50 rounded-[12px] :lg:rounded-[20px] shadow">
                  <img
                    src={image2}
                    alt="Monitoring"
                    className="mb-3 h-16 lg:h-28"
                  />
                  <p className="text-xs lg:text-base text-center text-gray-700 font-Roboto">
                    Personalized Lifestyle Interventions
                  </p>
                </div>
                <div className="max-w-56 flex flex-col  items-center text-left p-4 lg:p-4 bg-gray-50 rounded-[12px] :lg:rounded-[20px] shadow">
                  <img
                    src={image3}
                    alt="Adjustments"
                    className="mb-3 h-16 lg:h-28"
                  />
                  <p className="text-xs lg:text-base text-center text-gray-700 font-Roboto">
                    Insightful Progress Tracking
                  </p>
                </div>
                <div className="max-w-56 flex flex-col  items-center text-left p-4 lg:p-4 bg-gray-50 rounded-[12px] :lg:rounded-[20px] shadow">
                  <img
                    src={image4}
                    alt="Care Plan"
                    className="mb-3 h-16 lg:h-28"
                  />

                  <p className="text-xs lg:text-base text-center text-gray-700 font-Roboto">
                    Flexible Care Plans
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-center w-full">
            <button
              onClick={() => navigate("/get-started")}
              className="smallScreenShow hide getStartedBtn mb-4 bg-[#1A3333] text-white"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiveIn;
