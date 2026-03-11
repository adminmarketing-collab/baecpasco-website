"use client";
import React from "react";
import Image from "next/image";

const ServicesData = {
  ServicesList: [
    {
      icon: "/img/industries/Corporate & Business Enterprises.png",
      title: "Corporate & Business Enterprises",
      brief:
        "We support corporations, SMEs, and startups by providing financial planning, tax compliance, auditing, and advisory services, ensuring business efficiency and growth.",
    },
    {
      icon: "/img/industries/Government & Public Sector.png",
      title: "Government & Public Sector",
      brief:
        "Our firm offers specialized financial consulting, regulatory compliance, and auditing services for government agencies and institutions to uphold transparency and financial accountability.",
    },
    {
      icon: "/img/industries/Healthcare & Medical Services.png",
      title: "Healthcare & Medical Services",
      brief:
        "We assist hospitals, clinics, and medical practitioners in managing financial records, taxation, and compliance, helping them focus on patient care while ensuring financial stability.",
    },
    {
      icon: "/img/industries/Educational Institutions.png",
      title: "Educational Institutions",
      brief:
        "From schools to universities, we provide financial management solutions, tax advisory, and audit services to support educational organizations in achieving sustainability and operational efficiency.",
    },
    {
      icon: "/img/industries/Real Estate & Construction.png",
      title: "Real Estate & Construction",
      brief:
        "Our expertise in financial reporting, risk management, and tax advisory ensures real estate developers, property managers, and construction firms maintain profitability and compliance.",
    },
  ],
};

const ServicesData2 = {
  ServicesList: [
    {
      icon: "/img/industries/Nonprofit Organizations & NGOs.png",
      title: "Nonprofit Organizations & NGOs",
      brief:
        "We help charitable organizations and NGOs navigate financial regulations, grants, and tax exemptions, ensuring they maximize their impact while maintaining compliance.",
    },
    {
      icon: "/img/industries/Retail, Hospitality & Tourism.png",
      title: "Retail, Hospitality & Tourism",
      brief:
        "From retail stores to hotels and tourism agencies, we provide bookkeeping, financial planning, and tax strategies to help businesses stay competitive and profitable.",
    },
    {
      icon: "/img/industries/Manufacturing & Industrial Sector.png",
      title: "Manufacturing & Industrial Sector",
      brief:
        "We assist manufacturers and industrial companies in optimizing financial operations, ensuring tax efficiency, and managing financial risks effectively.",
    },
    {
      icon: "/img/industries/Agriculture & Agribusiness.png",
      title: "Agriculture & Agribusiness",
      brief:
        "Supporting farmers, agribusinesses, and cooperatives with financial planning, subsidies management, and tax compliance to enhance productivity and sustainability.",
    },
    {
      icon: "/img/industries/Technology & IT Services.png",
      title: "Technology & IT Services",
      brief:
        "We cater to tech firms and IT service providers by offering strategic financial solutions, investment planning, and compliance assistance to foster growth and innovation.",
    },
  ],
};

const IndustryItem = ({ item }) => {
  return (
    <div className="single-services mb-9 grid grid-cols-[40px_minmax(0,1fr)] items-start gap-4 last:mb-0">
      <div className="-mt-2">
        <Image
          src={item.icon}
          alt={item.title}
          width={40}
          height={40}
          className="h-10 w-10 object-contain [filter:brightness(0)_saturate(100%)_invert(16%)_sepia(100%)_saturate(7496%)_hue-rotate(355deg)_brightness(103%)_contrast(118%)]"
        />
      </div>

      <div className="services-content-box min-w-0">
        <p className="mb-[15px] text-left text-xl font-medium capitalize leading-tight md:text-[22px]">
          {item.title}
        </p>
        <p className="mb-0 text-left">{item.brief}</p>
      </div>
    </div>
  );
};

const Industries = () => {
  return (
    <div
      id="merox-services-area"
      className="merox-services-area bg-left py-8 md:py-12 z-[1]"
    >
      <div className="container mt-8 mb-8 text-center">
        <h1 className="text-3xl font-bold uppercase leading-tight md:text-4xl xl:text-[50px] xl:leading-[49px]">
          Industries We Serve
        </h1>

        <p className="mb-6 mt-6 text-center text-base font-bold md:text-lg">
          Empowering Businesses Across Diverse Sectors
        </p>

        <p className="mx-auto mb-10 max-w-5xl text-center text-base leading-7 md:text-lg">
          At <span className="text-red-500">Balagot & Emperado CPA’s Co.</span>, we
          take pride in delivering expert financial solutions tailored to a wide range of industries.
          With our deep understanding of sector-specific challenges, regulatory requirements, and growth opportunities,
          we provide businesses with the strategic financial support they need to thrive.
          Our team of highly skilled professionals ensures that each client receives personalized services designed
          to enhance financial stability, compliance, and long-term success.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 md:gap-8">
          <div className="about-single-counter mb-[30px] rounded-[20px] border-[1px] border-solid border-[#f1f1f1] bg-white px-4 py-6 text-left transition-all duration-[0.3s] cursor-pointer hover:shadow-[0px_8px_20px_0px_rgba(0,0,0,0.14)] sm:px-6 md:p-8 lg:mb-0 lg:p-8 xl:p-[20px]">
            {ServicesData.ServicesList.map((item, i) => (
              <IndustryItem item={item} key={i} />
            ))}
          </div>

          <div className="about-single-counter mb-[30px] rounded-[20px] border-[1px] border-solid border-[#f1f1f1] bg-white px-4 py-6 text-left transition-all duration-[0.3s] cursor-pointer hover:shadow-[0px_8px_20px_0px_rgba(0,0,0,0.14)] sm:px-6 md:p-8 lg:mb-0 lg:p-8 xl:p-[20px]">
            {ServicesData2.ServicesList.map((item, i) => (
              <IndustryItem item={item} key={i} />
            ))}
          </div>
        </div>

        <p className="mx-auto max-w-5xl text-left text-base leading-7 md:text-lg">
          At <span className="text-red-500">Balagot & Emperado CPA’s Co.</span>, we go beyond numbers—we build partnerships that drive success.
          No matter your industry, we are here to help you navigate financial complexities and achieve long-term financial stability.
        </p>
      </div>
    </div>
  );
};

export default Industries;






