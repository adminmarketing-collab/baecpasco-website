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


const ServicesData = {
  title: "OUR SERVICES",
  // title2: "SERVICES",
  bgimg: bgimg,
  ServicesList: [
    {
      icon: icon1,
      title: "Corporate & Business Enterprises",
      brief:
        "We support corporations, SMEs, and startups by providing financial planning, tax compliance, auditing, and advisory services, ensuring business efficiency and growth.",
    },

    {
      icon: icon2,
      title: "Government & Public Sector",
      brief:
        "Our firm offers specialized financial consulting, regulatory compliance, and auditing services for government agencies and institutions to uphold transparency and financial accountability.",
    },
    {
      icon: icon3,
      title: "Healthcare & Medical Services",
      brief:
        "We assist hospitals, clinics, and medical practitioners in managing financial records, taxation, and compliance, helping them focus on patient care while ensuring financial stability.",
    },
    {
      icon: icon3,
      title: "Educational Institutions",
      brief:
        "From schools to universities, we provide financial management solutions, tax advisory, and audit services to support educational organizations in achieving sustainability and operational efficiency.",
    },
    {
      icon: icon3,
      title: "Real Estate & Construction",
      brief:
        "Our expertise in financial reporting, risk management, and tax advisory ensures real estate developers, property managers, and construction firms maintain profitability and compliance.",
    },

  ],
};

const ServicesData2 = {
  title: "OUR SERVICES",
  // title2: "SERVICES",
  bgimg: bgimg,
  ServicesList: [
    {
      icon: icon1,
      title: "Nonprofit Organizations & NGOs",
      brief:
        "We help charitable organizations and NGOs navigate financial regulations, grants, and tax exemptions, ensuring they maximize their impact while maintaining compliance.",
    },

    {
      icon: icon2,
      title: "Retail, Hospitality & Tourism",
      brief:
        "From retail stores to hotels and tourism agencies, we provide bookkeeping, financial planning, and tax strategies to help businesses stay competitive and profitable.",
    },
    {
      icon: icon3,
      title: "Manufacturing & Industrial Sector",
      brief:
        "We assist manufacturers and industrial companies in optimizing financial operations, ensuring tax efficiency, and managing financial risks effectively.",
    },
    {
      icon: icon3,
      title: "Agriculture & Agribusiness",
      brief:
        "Supporting farmers, agribusinesses, and cooperatives with financial planning, subsidies management, and tax compliance to enhance productivity and sustainability.",
    },
    {
      icon: icon3,
      title: "Technology & IT Services",
      brief:
        "We cater to tech firms and IT service providers by offering strategic financial solutions, investment planning, and compliance assistance to foster growth and innovation."
    },

  ],
};



const Industries = () => {
  return (
    <>
      <div
        id="merox-services-area"
        className="merox-services-area py-32 bg-left  z-[1] md:pb-20 sm:pb-20"
      >
        <div className="merox-services-area-img absolute right-0 top-0 h-full w-2/3 bg-no-repeat bg-center bg-cover -z-[1]">
          {/* <Image
            className="h-full w-full"
            src={ServicesData.bgimg}
            alt="bgimage"
          /> */}
        </div>

        <div className="container text-center">
          <p className=" mt-12 mb-12 text-left uppercase font-bold text-[20px]  pl-[30px] mb-[15px] before:bg-[#f90908] before:h-[2px] before:w-5 before:content-[''] before:absolute before:left-0 before:top-[11px]">
            Industries We Serve

          </p>

          <p className=" mt-12 mb-12  font-bold text-indent text-[18px] text-left">Empowering Businesses Across Diverse Sectors</p>

          <p className=" mb-10 text-indent text-[18px] text-left">At <span className="text-red-500">Balagot & Emperado CPA’s Co.</span>, we take pride in delivering expert financial solutions tailored to a wide range of industries. With our deep understanding of sector-specific challenges, regulatory requirements, and growth opportunities, we provide businesses with the strategic financial support they need to thrive.
            Our team of highly skilled professionals ensures that each client receives personalized services designed to enhance financial stability, compliance, and long-term success.
          </p>


          {/* <p className="text-left mt-12 mb-12uppercase font-medium text-[20px] relative pl-[30px]  before:bg-[#f90908] before:h-[2px] before:w-5 before:content-[''] before:absolute before:left-0 before:top-[11px]">
            Industries We Cater To:
          </p> */}

          <div className="xl:grid xl:grid-cols-2 xl:gap-x-8">


          <div className="about-single-counter  border-[1px] border-solid border-[#f1f1f1] py-10 px-[10px] rounded-[20px] transition-all duration-[0.3s] cursor-pointer mb-[30px] hover:shadow-[0px_8px_20px_0px_rgba(0,0,0,0.14)] text-left services-box bg-white p-2 rounded sm:mb-10 services-box bg-left xl:p-[20px] lg:p-[100px] md:p-20 sm:py-20 sm:px-10">
              {ServicesData.ServicesList.map((item, i) => (

                <>
                  <div
                    className="single-services flex mb-9 transition-all duration-[0.3s] cursor-pointer hover:scale-[0.90] last:mb-0"
                    key={i}
                  >
                    {/* <Image
                              className="shadow-[0px_8px_20px_0px_rgba(0,0,0,0.14)] rounded w-[50px] h-[50px]"
                              src={item.icon}
                              alt="icon"
                            /> */}
                    <div className="services-content-box ml-[30px]">
                      <p className="text-left text-[24px] font-medium leading-none capitalize mb-[15px]">
                        <i className="fa fa-check text-[#f90908] mr-[10px]"></i>{item.title}
                      </p>
                      <p className="text-left mb-0">{item.brief}</p>
                    </div>


                  </div>



                </>

              ))}
            </div>


            <div className="about-single-counter  border-[1px] border-solid border-[#f1f1f1] py-10 px-[10px] rounded-[20px] transition-all duration-[0.3s] cursor-pointer mb-[30px] hover:shadow-[0px_8px_20px_0px_rgba(0,0,0,0.14)] text-left services-box bg-white p-2 rounded sm:mb-10 services-box bg-left xl:p-[20px] lg:p-[100px] md:p-20 sm:py-20 sm:px-10">
              {ServicesData2.ServicesList.map((item, i) => (

                <>
                  <div
                    className="single-services flex mb-9 transition-all duration-[0.3s] cursor-pointer hover:scale-[0.90] last:mb-0"
                    key={i}
                  >
                    {/* <Image
                              className="shadow-[0px_8px_20px_0px_rgba(0,0,0,0.14)] rounded w-[50px] h-[50px]"
                              src={item.icon}
                              alt="icon"
                            /> */}
                    <div className="services-content-box ml-[30px]">
                      <p className="text-left text-[24px] font-medium leading-none capitalize mb-[15px]">
                        <i className="fa fa-check text-[#f90908] mr-[10px]"></i>{item.title}
                      </p>
                      <p className="text-left mb-0">{item.brief}</p>
                    </div>


                  </div>



                </>

              ))}
            </div>
          </div>
          <p className=" text-left mt-10  text-indent text-[18px] text-left">
            At <span className="text-red-500">Balagot & Emperado CPA’s Co.</span>, we go beyond numbers—we build partnerships that drive success. No matter your industry, we are here to help you navigate financial complexities and achieve long-term financial stability.

          </p>

        </div>

      </div>
    </>
  );
};

export default Industries;
