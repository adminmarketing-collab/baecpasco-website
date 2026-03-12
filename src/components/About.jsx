"use client";
import React from "react";
import about from "../../public/img/about/about.png";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div
      id="merox-about-area"
      className="merox-about-area py-[50px] md:py-[60px]"
    >
      <div className="container">
        <div className="flex flex-wrap mx-[-12px] items-start">
          <div className="xl:w-5/12 lg:w-6/12 md:w-full sm:w-full xsm:w-full px-[12px] wow fadeInLeft">
            <div className="about-img-area relative">
              <Image className="w-full h-auto" src={about} alt="about" />
            </div>
          </div>

          <div className="xl:ml-[8.33333333%] xl:w-6/12 lg:w-6/12 md:w-full sm:w-full xsm:w-full px-[12px] wow fadeInRight lg:flex lg:items-center">
            <div className="lg:pt-10 lg:pb-4 xl:pt-12 xl:pb-6">
              <div className="section-title mb-6 md:mb-6 md:mt-6 sm:mt-6">
                <h3 className="text-[40px] md:text-[40px] font-bold leading-tight uppercase">
                  about{" "}
                  <Link
                    href="/about"
                    className="text-[#f90908] transition-colors duration-200 hover:text-[#c30606]"
                  >
                    Balagot &amp; Emperado CPA's Co
                  </Link>
                </h3>
              </div>

              <div className="about-content">
                <p className="font-bold text-black text-[22px] md:text-2xl mb-4">
                  Experience at Balagot &amp; Emperado CPA's Co.
                </p>

                <p className="mb-5 leading-7">
                  At <Link href="/about" className="text-[#f90908] transition-colors duration-200 hover:text-[#c30606]">Balagot &amp; Emperado CPA's Co.</Link>, we believe strong financial foundations create strong businesses. As an established CPA firm Mindanao organizations rely on, we help entrepreneurs, corporations, and institutions manage financial responsibilities with professionalism and integrity.
                </p>

                <p className="mb-5 leading-7">
                  Our Certified Public Accountants Philippines team brings industry knowledge, regulatory expertise, and hands on experience to every engagement. We focus on delivering practical solutions that strengthen internal controls, improve reporting accuracy, and support strategic decision making.
                </p>

                <p className="mb-0 leading-7">
                  We do not just prepare reports. We build long term financial systems that help businesses operate responsibly and grow sustainably.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
