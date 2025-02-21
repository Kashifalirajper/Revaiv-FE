import React from "react";
import image1 from "../../assets/images/diveIn1.png";
import image2 from "../../assets/images/diveIn2.png";
import image3 from "../../assets/images/diveIn3.png";
import image4 from "../../assets/images/diveIn4.png";

const Solutions = () => {
  return (
    <section className="py-16 mt-32 bg-gradient-to-b from-white via-[#DEF1F0] to-white">
      <div className="max-screen flex-col mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#3B3B3B]">
            Our Solutions
          </h2>
        </div>

        {/* Solutions for Patients and Practitioners */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* For Patients */}
          <div
            className="bg-white rounded-lg shadow-lg p-8"
            style={{
              background:
                "linear-gradient(179.77deg, #F7FBFF 0.21%, #FFFFF8 99.81%)",
              border: "5px solid #FFF",
            }}
          >
            <h3 className="text-2xl font-semibold text-[#3B3B3B] mb-6">
              FOR PATIENTS
            </h3>
            <ul className="space-y-4 text-gray-700 text-base">
              <li>1:1 Health Coach Assessment</li>
              <li>Self-Evaluation of condition severity</li>
              <li>Health Tracking and monitoring</li>
              <li>Tailored therapeutic care plans</li>
            </ul>
          </div>

          {/* For Allied Care Practitioners */}
          <div
            className="bg-white rounded-lg shadow-lg p-8"
            style={{
              background:
                "linear-gradient(179.77deg, #F7FBFF 0.21%, #FFFFF8 99.81%)",
              border: "5px solid #FFF",
            }}
          >
            <h3 className="text-2xl font-semibold text-[#3B3B3B] mb-6">
              FOR ALLIED CARE PRACTITIONERS
            </h3>
            <ul className="space-y-4 text-gray-700 text-base">
              <li>Clinical grade Patient App</li>
              <li>Client Progress Dashboard</li>
              <li>Therapeutic diet library and creator</li>
              <li>Motion Simulator AI Fitness plans</li>
              <li>CRM tool to schedule, engage and record patient profiles</li>
            </ul>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center bg-white rounded-2xl shadow p-6 w-52">
              <img
                src={image1}
                alt="Compassionate Care Team"
                className="mb-4 h-20"
              />
              <p className="text-base font-medium text-gray-700 text-center">
                Compassionate Care Team
              </p>
            </div>
            <div className="flex flex-col items-center bg-white rounded-2xl shadow p-6 w-52">
              <img
                src={image2}
                alt="Personalized Lifestyle Interventions"
                className="mb-4 h-20"
              />
              <p className="text-base font-medium text-gray-700 text-center">
                Personalized Lifestyle Interventions
              </p>
            </div>
            <div className="flex flex-col items-center bg-white rounded-2xl shadow p-6 w-52">
              <img
                src={image3}
                alt="Insightful Progress Tracking"
                className="mb-4 h-20"
              />
              <p className="text-base font-medium text-gray-700 text-center">
                Insightful Progress Tracking
              </p>
            </div>
            <div className="flex flex-col items-center bg-white rounded-2xl shadow p-6 w-52">
              <img
                src={image4}
                alt="Flexible Care Plans"
                className="mb-4 h-20"
              />
              <p className="text-base font-medium text-gray-700 text-center">
                Flexible Care Plans
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
