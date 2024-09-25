import React from "react";
import image1 from "../assets/images/feature-1.jpg";
import image2 from "../assets/images/feature-2.jpg";
import image3 from "../assets/images/feature-3.jpg";
import image4 from "../assets/images/feature-4.jpg";
import image5 from "../assets/images/feature-5.jpg";
import image6 from "../assets/images/feature-6.jpg";

const WhyChooseUS = () => {
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 mt-[-60px] lg:mt-[-150px]">
      <section className="py-12 px-4">
        <h1 className="text-3xl text-left font-bold mb-2">
          Why Choose RevAiV?
        </h1>
        <p className="text-xl text-left mb-6">
          We provide personalized all inclusive features and services to
          alleviate your symptoms
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div class="max-w-lg  bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Know your body
                </h5>
              </a>
              <p class="mb-3 min-h-14 font-normal text-gray-700 dark:text-gray-400">
                We believe that every individual’s health journey is unique.
              </p>
            </div>
            <a href="#">
              <img class="rounded-b-lg" src={image1} alt="" />
            </a>
          </div>

          <div class="max-w-lg  bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Monitor your Cycle
                </h5>
              </a>
              <p class="mb-3 min-h-14 font-normal text-gray-700 dark:text-gray-400">
              Monitoring your cycles helps you to keep an eye on your cycle abnormalities and symptom variations
              </p>
            </div>
            <a href="#">
              <img class="rounded-b-lg" src={image2} alt="" />
            </a>
          </div>
          <div class="max-w-lg  bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Body specific workouts
                </h5>
              </a>
              <p class="mb-3 min-h-14 font-normal text-gray-700 dark:text-gray-400">
              Our AI fitness plans are crafted according to your unique body's needs offering real-time feedback.
              </p>
            </div>
            <a href="#">
              <img class="rounded-b-lg" src={image3} alt="" />
            </a>
          </div>
          <div class="max-w-lg  bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Personalized meal plans
                </h5>
              </a>
              <p class="mb-3 min-h-14 font-normal text-gray-700 dark:text-gray-400">
              Our meal plans are tailored as per your unique body needs and preferences.
              </p>
            </div>
            <a href="#">
              <img class="rounded-b-lg" src={image4} alt="" />
            </a>
          </div>
          <div class="max-w-lg  bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Connect with expert
                </h5>
              </a>
              <p class="mb-3 min-h-14 font-normal text-gray-700 dark:text-gray-400">
              RevAiv provides one-to-one health coach consultation helping you understand your body effectively.
              </p>
            </div>
            <a href="#">
              <img class="rounded-b-lg" src={image5} alt="" />
            </a>
          </div>
          <div class="max-w-lg  bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Get meaningful insights
                </h5>
              </a>
              <p class="mb-3 min-h-14 font-normal text-gray-700 dark:text-gray-400">
              Get valuable insights by tracking your  health parameters and analyzing your progress
              </p>
            </div>
            <a href="#">
              <img class="rounded-b-lg" src={image6} alt="" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUS;
