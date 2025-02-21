import React from "react";
const Commitment = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16 min-h-96 flex items-center"
      style={{
        background: `linear-gradient(180deg, #296969 14.85%, #05312C 100%)`,
      }}
    >
      <div className="relative max-w-screen-lg mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Our Commitment</h2>
        <p className="text-lg text-white leading-7">
          At Revaiv Health, we are committed to building a healthier future for
          everyone. Our focus <br /> on innovation, collaboration, and integrity
          ensures that we not only meet the evolving <br /> needs of our users but
          also create a thriving ecosystem for our partners.
        </p>
      </div>
    </section>
  );
};

export default Commitment;
