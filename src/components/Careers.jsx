"use client";
import React from "react";

const Careers = () => {
  return (
    <div
      id="merox-careers-area"
      className="relative z-[1] py-10 md:py-14"
    >
      <div className="container">
        <p className="font-bold text-[20px] relative pl-[30px] mb-6 before:bg-[#f90908] before:h-[2px] before:w-5 before:content-[''] before:absolute before:left-0 before:top-[11px]">
          Build Your Future with Balagot & Emperado CPA’s Co.
        </p>

        <p className="text-left text-[18px] leading-7 mb-4">
          At <span className="text-red-500">Balagot & Emperado CPA’s Co.</span>,
          we are more than just an accounting firm—we are a community of
          professionals dedicated to excellence, growth, and innovation. We
          believe in empowering our employees with the right opportunities,
          training, and career advancement to help them thrive in the
          ever-evolving financial landscape.
        </p>

        <p className="text-left text-[18px] leading-7 mb-4">
          Whether you are a seasoned CPA, a fresh graduate eager to start your
          journey, or a professional looking for a dynamic work environment, we
          invite you to explore exciting career opportunities with us.
        </p>

        {/* reduced spacing so footer won't be pushed down */}
        <p className="text-left text-[18px] leading-7 mt-8">
          Join a company that values integrity, teamwork, and continuous
          learning. Your future starts here.
        </p>
      </div>
    </div>
  );
};

export default Careers;
