import React from 'react';

const NavigationBar = () => {
  const navItems = ["All Posts", "PCOS", "Holistic Health", "Mental Health", "Nutrition", "Fitness", "Real Stories", "Fertility"];

  return (
    <div className="bg-navigation text-[#3B3B3B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          <div className="flex overflow-x-auto scrollbar-hide">
            <div className="flex space-x-4 lg:space-x-8">
              {navItems.map((item, index) => (
                <a key={index} href="#" className="text-white lg:text-[#3B3B3B] px-3 py-2 rounded-md text-sm font-medium hover:bg-[#2a7a7b] whitespace-nowrap">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
