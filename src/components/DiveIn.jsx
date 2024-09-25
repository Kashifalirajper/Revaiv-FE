import React from "react";
import image1 from "../assets/images/diveIn1.png";
import image2 from "../assets/images/diveIn2.png";
import image3 from "../assets/images/diveIn3.png";
import image4 from "../assets/images/diveIn4.png";

const DiveIn = () => {
  return (
    <section className="bg-transparent mt-[-200px]">
      <div class="max-w-screen-xl mx-auto p-5">
        <div
          class="rounded-xl shadow-lg p-8"
          style={{
            background: "linear-gradient(249deg, #F8F0F0 0%, #DEF1F0 100%)",
            border: "5px solid #FFF",
          }}
        >
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto gap-8 grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-5 col-span-12 text-left order-last lg:order-none">
              <h1 className="text-3xl text-left font-bold mb-2">
                Curious? <br /> Dive In!
              </h1>
              <p className="text-xl text-left mb-6">
                RevAiv is built on the vision to create a positive impact on
                people's health.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center px-4 py-2 text-white  font-bold bg-[#1A3333] rounded-md shadow hover:bg-[#1A3344]"
              >
                Get Started
              </a>
            </div>
            <div className="lg:mt-0 lg:col-span-7 col-span-12  lg:flex lg:order-none">
              <div class="grid grid-cols-2 gap-8 mt-8">
                <div class="flex flex-col min-h-52 items-center text-center justify-center p-4 bg-gray-50 rounded-lg shadow">
                  <img src={image1} alt="Relationship" class="mb-3 w-12 h-12" />
                  <p class="text-gray-700">
                    A better relationship with their healthcare provider
                  </p>
                </div>
                <div class="flex flex-col min-h-52 items-center text-center justify-center p-4 bg-gray-50 rounded-lg shadow">
                  <img src={image2} alt="Monitoring" class="mb-3 w-12 h-12" />
                  <p class="text-gray-700">
                    Regularly monitoring their symptoms and health progress
                  </p>
                </div>
                <div class="flex flex-col min-h-52 items-center text-center justify-center p-4 bg-gray-50 rounded-lg shadow">
                  <img src={image3} alt="Adjustments" class="mb-3 w-12 h-12" />
                  <p class="text-gray-700">
                    Making positive lifestyle adjustments
                  </p>
                </div>
                <div class="flex flex-col min-h-52 items-center text-center justify-center p-4 bg-gray-50 rounded-lg shadow">
                  <img src={image4} alt="Care Plan" class="mb-3 w-12 h-12" />

                  <p class="text-gray-700">Personalized Care Plan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiveIn;
