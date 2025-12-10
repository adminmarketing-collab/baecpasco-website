"use client";
import React from "react";
import bgimg from "../../public/img/services/services-bg.jpg";
import icon1 from "../../public/img/services/1.png";
import icon2 from "../../public/img/services/2.png";
import icon3 from "../../public/img/services/3.png";
import icon4 from "../../public/img/services/4.png";
import icon5 from "../../public/img/services/5.png";
import icon6 from "../../public/img/services/6.png";
import Image from "next/image";



const Careers = () => {
  return (
    <>
      <div
        id="merox-services-area"
        className="merox-services-area py-3 relative z-[1] md:pb-20 sm:pb-20"
      >
        <div className="merox-services-area-img absolute right-0 top-0 h-full w-2/3 bg-no-repeat bg-center bg-cover -z-[1]">
          {/* <Image
            className="h-full w-full"
            src={ServicesData.bgimg}
            alt="bgimage"
          /> */}
        </div>

        <div className="container text-center">
          <p className=" font-bold mt-12 mb-12uppercase font-medium text-[20px] relative pl-[30px] mb-[15px] before:bg-[#f90908] before:h-[2px] before:w-5 before:content-[''] before:absolute before:left-0 before:top-[11px]">
          Build Your Future with Balagot & Emperado CPA’s Co.

          </p>

          <p className=" text-left text-[18px] ">At <span className="text-red-500">Balagot & Emperado CPA’s Co.</span>, we are more than just an accounting firm—we are a community of professionals dedicated to excellence, growth, and innovation. We believe in empowering our employees with the right opportunities, training, and career advancement to help them thrive in the ever-evolving financial landscape.</p>
          <p className=" text-left text-[18px] ">Whether you are a seasoned CPA, a fresh graduate eager to start your journey, or a professional looking for a dynamic work environment, we invite you to explore exciting career opportunities with us.</p> 
          <p className=" text-left text-[18px]  mt-20">Join a company that values integrity, teamwork, and continuous learning. Your future starts here.</p>

        </div>

      </div>
    </>
  );
};

export default Careers;
