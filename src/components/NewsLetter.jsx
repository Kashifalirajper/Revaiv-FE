import React from "react";

const NewsLetter = () => {
  return (
    <section className="bg-[#f0f0f0] pt-2 lg:pt-10 pb-5">
      <div className="max-screen mx-auto p-5 ">
        <div className="px-3 py-4 lg:py-10 bg-[#0C2525] text-white rounded-[20px] lg:rounded-[40px]  w-full">
          <div className="mx-auto flex flex-col items-center justify-between gap-8  sm:flex-row max-w-screen-lg">
            <div className="w-full sm:w-2/5">
              <p className="mt-3 text-sm font-Roboto lg:text-xl leading-none lg:leading-6 tracking-wide font-normal text-white smallScreenTextCenter">
                Sign up for our Newsletter to
              </p>
              <div className="text-2xl font-Roboto lg:text-4xl font-bold tracking-wide smallScreenTextCenter">
                Get Experts’ Advice
              </div>
            </div>
            <div className="w-full sm:w-[55%]">
              <form className="flex text-center rounded-full bg-[#EFFFFF40] px-2 py-2 focus-within:ring-2 focus-within:ring-[#34D1BF] hover:ring-2 hover:ring-[#34D1BF]">
                <input className="w-full smallScreenTextCenter text-base rounded-full appearance-none bg-transparent focus:outline-none text-white placeholder-[#EFFFFF] pl-3" placeholder="Your Email" />
                <button
                  className="smallScreenHide font-Roboto ml-2 shrink-0 text-2xl rounded-full bg-gradient-to-br from-[#2D8383] to-[#34D1BF] px-3 py-1 font-light hover:from-[#3A6D6D] hover:to-[#2CA6A6] focus:outline-none focus:ring-2 focus:ring-[#2CA6A6]/50"
                  type="submit"
                >
                  Sign me up!
                </button>
              </form>
              <button
                  className="hidden font-Roboto mx-auto smallScreenShow mt-4 text-sm px-2 py-2 rounded-3xl bg-gradient-to-br from-[#2D8383] to-[#34D1BF] font-normal hover:from-[#3A6D6D] hover:to-[#2CA6A6] focus:outline-none focus:ring-2 focus:ring-[#2CA6A6]/50"
                  type="submit"
                >
                  Sign me up!
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
