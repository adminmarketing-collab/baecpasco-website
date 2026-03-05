"use client";
import React from "react";

const Careers = () => {
  return (
    <div
      id="merox-careers-area "
      className="bg-[#fffff] relative z-[1] py-1 mt-0 md:py-1 "
    >
      <div className="container">
        <p className="font-bold text-[20px] text-red-500 text-center relative pl-[30px] mb-2 ">
          Build Your Future with Balagot & Emperado CPA’s Co.
        </p>

        <p className="text-left text-[18px] text-center leading-6 mb-2">
          At <span className="text-red-500">Balagot & Emperado CPA’s Co.</span>,
          we are more than just an accounting firm—we are a community of
          professionals dedicated to excellence, growth, and innovation. We
          believe in empowering our employees with the right opportunities,
          training, and career advancement to help them thrive in the
          ever-evolving financial landscape.
        </p>

        <p className="text-left text-[18px] text-center leading-7 mb-4">
          Whether you are a seasoned CPA, a fresh graduate eager to start your
          journey, or a professional looking for a dynamic work environment, we
          invite you to explore exciting career opportunities with us.
        </p>

        {/* reduced spacing so footer won't be pushed down */}
        <p className="text-left text-[18px] text-center leading-7 mt-8 mb-8">
          Join a company that values integrity, teamwork, and continuous
          learning. Your future starts here.
        </p>
      </div>
    </div>
  );
};

export default Careers;
