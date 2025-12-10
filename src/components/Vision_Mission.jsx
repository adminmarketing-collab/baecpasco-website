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



const Vision_Mission = () => {
  return (
    <>
      <div
        id="merox-services-area"
        className="merox-services-area py-  z-[1] md:pb-20 sm:pb-20"
      >
        <div className="merox-services-area-img absolute right-0 top-0 h-full w-2/3 bg-no-repeat bg-center bg-cover -z-[1]">
          {/* <Image
            className="h-full w-full"
            src={ServicesData.bgimg}
            alt="bgimage"
          /> */}
        </div>

        <div className="container text-center">
          <p className="font-bold mt-16 uppercase  text-[20px]  pl-[30px] mb-[15px] before:bg-[#f90908] before:h-[2px] before:w-5 before:content-[''] before:absolute before:left-0 before:top-[11px]">
            Vision Statement
          </p>

          <p className="text-left text-[18px]">Our vision is to be the <span className="text-[#f90908]">trusted partner in financial excellence</span>, known for our commitment to <span className="text-[#f90908]">trust, innovation, and holistic growth.</span> We aim to help businesses and individuals not just achieve financial stability but thrive with confidence, supported by strategic insights and sustainable solutions. Rooted in <span className="text-[#f90908]">integrity and long-term partnerships</span>, we strive to strengthen our foundation while expanding our reach, embracing opportunities beyond local markets. By upholding our ASCEND values, we transform the way businesses grow, ensuring success is measured not just in numbers but in lasting impact and shared prosperity. We see <span className="text-[#f90908]">Balagot & Emperado CPAs Co.</span> as more than a financial firm, we are a force for progress, helping businesses elevate their potential, expand their horizons, and build a lasting legacy.
          </p>

          <p className="font-bold mt-16 uppercase  text-[20px]  pl-[30px] mb-[15px] before:bg-[#f90908] before:h-[2px] before:w-5 before:content-[''] before:absolute before:left-0 before:top-[11px]">
            Mission Statement
          </p>

          <p className="text-left text-[18px]">At <span className="text-[#f90908]">Balagot & Emperado CPAs Co.</span>, we go beyond numbers to help businesses and individuals achieve lasting success. Guided by our <span className="text-[#f90908]">ASCEND</span> values, we provide strategic financial solutions that support growth in every aspect. We are committed to building trust, fostering long-term relationships, and upholding integrity, ensuring a strong foundation for our clients. At the same time, we embrace innovation, expand beyond local markets, and provide insights that drive sustainable progress.
          </p>

          <p className="font-bold mt-16 uppercase  text-[20px]  pl-[30px] mb-[15px] before:bg-[#f90908] before:h-[2px] before:w-5 before:content-[''] before:absolute before:left-0 before:top-[11px]">
            Core Values

          </p>
          <p className="text-left uppercase  text-[20px]  pl-[30px] mb-[15px] before:bg-[#f90908] before:h-[2px] before:w-5 before:content-[''] before:absolute before:left-0 before:top-[11px]">
            ASCEND ONWARDS CENTER
          </p>

          <div className="xl:mr-10">
            <ul className="about-content-list p-0 mt-[25px] mb-[30px] mx-0 list-none">
              <li className="text-left text-[18px] font-semibold mb-[15px]">
                <p> <i className="fa fa-check text-[#f90908] mr-[10px]"></i><span className="text-[#f90908] font-bold">Accountability</span> – We take full ownership of our work, ensuring that every decision and service reflects our commitment to integrity and excellence
                </p> </li>

              <li className="text-left text-[18px] font-semibold mb-[15px]">
                <p> <i className="fa fa-check text-[#f90908] mr-[10px]"></i><span className="text-[#f90908] font-bold">Sustainability</span> –We go beyond short-term gains, focusing on long-term financial stability and fostering lasting relationships with our clients.
                </p> </li>


              <li className="text-left text-[18px] font-semibold mb-[15px]">
                <p> <i className="fa fa-check text-[#f90908] mr-[10px]"></i><span className="text-[#f90908] font-bold">Collaboration </span> –  We believe success is built through strong partnerships, working closely with businesses and individuals to help them grow.
                </p> </li>

              <li className="text-left text-[18px] font-semibold mb-[15px]">
                <p> <i className="fa fa-check text-[#f90908] mr-[10px]"></i><span className="text-[#f90908] font-bold">Excellence </span> –  We hold ourselves to the highest standards, delivering precise, insightful, and effective financial solutions.
                </p> </li>

              <li className="text-left text-[18px] font-semibold mb-[15px]">
                <p> <i className="fa fa-check text-[#f90908] mr-[10px]"></i><span className="text-[#f90908] font-bold">Nurturing Growth</span> – We don’t just manage finances; we empower businesses to expand, innovate, and thrive in a competitive landscape.
                </p> </li>

              <li className="text-left text-[18px] font-semibold mb-[15px]">
                <p> <i className="fa fa-check text-[#f90908] mr-[10px]"></i><span className="text-[#f90908] font-bold">Dedication </span> – Our commitment to client success is unwavering, driving us to continuously improve and adapt to meet evolving needs.
                </p> </li>

            </ul>
          </div>

          <p className="text-left mt-20text-[18px]">With <span className="text-[#f90908] font-bold">ASCEND</span> as our guiding principle, we don’t just serve; we elevate. By staying accountable, fostering sustainability, collaborating with clients, delivering excellence, nurturing growth, and remaining dedicated to success, Balagot & Emperado CPAs Co. continues to reach new heights while empowering businesses to grow not just financially, but strategically and sustainably. As we move onward and upward, we remain committed to strengthening our roots by anchoring our growth in trust, integrity, and long-term partnerships while expanding our horizons to reach new markets, innovate our services, and help businesses unlock their full potential.
          </p>

        </div>

      </div>
    </>
  );
};

export default Vision_Mission;
