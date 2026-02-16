"use client";
import React from "react";
import about from "../../public/img/about/about.png";
import Image from "next/image";

const About = () => {
  return (
    <div
      id="merox-about-area"
      className="merox-about-area py-[60px] md:py-[60px]"
    >
      <div className="container">
        <div className="flex flex-wrap mx-[-12px] items-start">
          {/* Image */}
          <div className="xl:w-5/12 lg:w-6/12 md:w-full sm:w-full xsm:w-full px-[12px] wow fadeInLeft">
            <div className="about-img-area relative">
              <Image className="w-full h-auto" src={about} alt="about" />
            </div>
          </div>

          {/* Content */}
          <div className="xl:ml-[8.33333333%] xl:w-6/12 lg:w-6/12 md:w-full sm:w-full xsm:w-full px-[12px] wow fadeInRight">
            <div className="section-title mb-6 md:mb-8 md:mt-10 sm:mt-10">
              <h4 className="uppercase font-medium text-[18px] ">
                overview
              </h4>
              <h3 className="text-[40px] md:text-[50px] font-bold leading-tight uppercase">
                about{" "}
                <span className="text-[#f90908]">Balagot &amp; Emperado CPA’s Co</span>
              </h3>
            </div>

            <div className="about-content">
              <p className="font-bold text-black text-[22px] md:text-2xl mb-4">
                Experience at Balagot &amp; Emperado CPA’s Co.
              </p>

              <p className="mb-3 leading-7">
                At Balagot &amp; Emperado CPA’s Co., we believe that our people are the
                driving force behind our success. We cultivate a culture of
                professionalism, collaboration, and continuous learning, where every
                team member is empowered to grow, innovate, and make a meaningful
                impact.
              </p>

              <p className="mb-3 leading-7">
                Our firm fosters an environment of mentorship and expertise, where
                knowledge is shared, achievements are celebrated, and growth
                opportunities are abundant. Whether through industry-leading training
                programs, leadership development, or hands-on experience, we ensure
                that our professionals are equipped to thrive in an evolving financial
                landscape.
              </p>

              <p className="mb-3 leading-7">
                Beyond work, we value work-life balance and camaraderie, encouraging a
                supportive community that uplifts and inspires. At Balagot &amp;
                Emperado CPA’s Co., we don’t just build careers—we build futures.
              </p>

              <p className="mb-0 leading-7">
                Be part of a team that values excellence, integrity, and innovation.
                Your journey to professional success starts here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
