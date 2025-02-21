import React from "react";
import logo from "../../assets/images/Logo.png";

const FooterSection = () => {
  return (
    <div
      className="max-w-screen-lg mx-auto my-12 p-6 rounded-[20px] shadow"
      style={{
        background: "linear-gradient(249deg, #F8F0F0 0%, #DEF1F0 100%)",
        border: "5px solid #FFFFFF",
      }}
    >
      <div className="text-center flex flex-col justify-center items-center">
        {/* <h2 className="text-2xl font-bold text-gray-800 mb-4">RevAiv</h2> */}
        <img src={logo} alt="" className="w-28 mb-10" />
        <p className="text-[#3B3B3B] text-base lg:text-2xl font-bold">
          Join us on our journey to make a lasting impact on health and
          wellness.
        </p>
        <p className="text-[#3B3B3B] text-base lg:text-2xl font-bold mb-10">
          Together, we can pave the way for a brighter, healthier tomorrow.
        </p>
        <p className="text-[#3B3B3B] text-base lg:text-2xl">
          For inquiries, reach out to us at{" "}
          <a
            href="mailto:health@revaiv.app"
            className="text-[#01C7B1] font-bold hover:underline"
          >
            health@revaiv.app
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default FooterSection;
