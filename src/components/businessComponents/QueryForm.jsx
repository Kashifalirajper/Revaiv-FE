import React from "react";

const QueryForm = () => {
  return (
    <div className="max-w-4xl mx-auto mt-16 bg-transparent  p-4">
      <form className="space-y-6  mb-10">
        {/* Name Field */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-700 font-medium mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* Email Field */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-700 font-medium mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* Profession Field */}
        <div className="flex flex-col">
          <label
            htmlFor="profession"
            className="text-gray-700 font-medium mb-2"
          >
            Profession
          </label>
          <select
            id="profession"
            name="profession"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value=""></option>
            <option value="Dietician">Dietician</option>
            <option value="Health Coaches">Health Coaches</option>
            <option value="Fitness Coaches">Fitness Coaches</option>
            <option value="Physical Therapist">Physical Therapist</option>
            <option value="Doctor">Doctor</option>
          </select>
        </div>

        {/* WhatsApp Number Field */}
        <div className="flex flex-col">
          <label htmlFor="whatsapp" className="text-gray-700 font-medium mb-2">
            WhatsApp number <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center">
            <select className="p-3 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500">
              <option value="+971">+971</option>
              <option value="+1">+1</option>
              <option value="+91">+91</option>
              <option value="+92">+92</option>
            </select>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              className="p-3 border rounded-r-lg flex-1 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
        </div>

        {/* Radio Options */}
        <div>
          <p className="text-gray-700 font-medium mb-2">
            Please select what suits you best
          </p>
          <div className="space-y-3">
            <label className="flex items-center">
              <input
                type="radio"
                name="workType"
                value="freelance"
                className="h-4 w-4 text-green-500 focus:ring-green-500"
              />
              <span className="ml-2 text-gray-700">
                I'm a freelance practitioner
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="workType"
                value="ownClinic"
                className="h-4 w-4 text-green-500 focus:ring-green-500"
              />
              <span className="ml-2 text-gray-700">I have my own clinic</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="workType"
                value="clinicHospital"
                className="h-4 w-4 text-green-500 focus:ring-green-500"
              />
              <span className="ml-2 text-gray-700">
                I'm working for a clinic/hospital
              </span>
            </label>
          </div>
        </div>

        {/* Query Field */}
        <div className="flex flex-col">
          <label htmlFor="query" className="text-gray-700 font-medium mb-2">
            Please specify your query
          </label>
          <textarea
            id="query"
            name="query"
            rows="6"
            className="p-3 border  rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-8 py-3 rounded-lg text-white font-medium transition-all duration-200 shadow-md"
            style={{
              background: "linear-gradient(91.86deg, #01C7B1 0%, #4D9999 100%)",
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default QueryForm;
