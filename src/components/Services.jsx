"use client";
import React from "react";
import bgimg from "../../public/img/services/services-bg.jpg";
import icon1 from "../../public/img/services/1.png";
import icon2 from "../../public/img/services/1.png";
import icon3 from "../../public/img/services/1.png";
import icon4 from "../../public/img/services/1.png";
import icon5 from "../../public/img/services/1.png";
import icon6 from "../../public/img/services/1.png";
import Image from "next/image";

const ServicesData = {
  title: "OUR SERVICES",
  // title2: "SERVICES",
  bgimg: bgimg,
  ServicesList: [
    {
      icon: icon1,
      title: "Audit & Assurance",
      brief:
        "We deliver reliable audit and assurance services to ensure financial transparency, compliance, and credibility. Our experience team conducts thorough evaluations to enhance operational efficiency and stakeholder confidence.",
      AboutList: [
        {
          title: "Financial Statement Audit – Independent assessments to verify the accuracy and reliability of financial reports.",
        },
        {
          title: "Internal Audit – Risk-based evaluations to strengthen internal controls and corporate governance.",
        },
        {
          title: "Compliance Audit – Ensuring adherence to industry standards, tax regulations, and mandatory financial reporting requirements.",
        },
      ],
    },

    {
      icon: icon2,
      title: "Accounting & Financial Reporting",
      brief:
        "We provide comprehensive accounting solutions that enable businesses to maintain accurate financial records and make data-driven decisions.",
      AboutList: [
        {
          title: "Financial Statement Preparation – Preparation of financial reports aligned with local and international standards.",
        },
        {
          title: "Management Accounting – Strategic financial insights to guide business planning and decision-making.",
        },
        {
          title: "Outsourced Accounting Services – Reliable bookkeeping and accounting services tailored to your business needs.",
        },
      ],
    },
    {
      icon: icon3,
      title: "Taxation & Compliance",
      brief:
        "Navigating the complexities of taxation is crucial for financial health. We provide expert guidance to help businesses manage tax obligations efficiently while maximizing savings.",
      AboutList: [
        {
          title: "Tax Planning & Advisory – Strategic tax solutions to optimize business operations and minimize liabilities.",
        },
        {
          title: "Tax Return Preparation & Filing – Accurate computation and timely submission of tax requirements.",
        },
        {
          title: "Business Tax Compliance & Risk Management – Ensuring adherence to regulatory requirements and mitigating potential risks",
        },
        {
          title: "Tax Assessment Assistance -  Assisting taxpayers during the examination of books of accounts and other records related to all tax deficiency for the covered period.",
        },
        {
          title: "Tax Training and workshop - Organize seminars to equip taxpayers with the latest knowledge on tax updates.",
        },
      ],
    },

  ],
};

const ServicesData2 = {
  title: "OUR SERVICES",
  // title2: "SERVICES",
  bgimg: bgimg,
  ServicesList: [
    {
      icon: icon4,
      title: "Bookkeeping & Payroll Services",
      brief:
        "We offer reliable bookkeeping and payroll solutions to ensure seamless financial management and employee satisfaction.",
      AboutList: [
        {
          title: "Bookkeeping Services – Maintaining organized and up-to-date financial records.",
        },
        {
          title: "Payroll Processing – Accurate and timely salary computation, tax deductions, and benefits management.",
        },
        {
          title: "Financial Data Reconciliation – Ensuring consistency and accuracy across financial accounts.",
        },
      ],
    },
    {
      icon: icon5,
      title: "Business & Financial Consultancy",
      brief:
        "We provide expert consultancy services to help businesses navigate financial challenges and drive sustainable growth.",
      AboutList: [
        {
          title: "Business Advisory Services – Guidance on financial strategy, risk management, and business expansion.",
        },
        {
          title: " Financial Forecasting & Budgeting – Data-driven insights for informed decision-making and resource allocation.",
        },
      ],
    },
    {
      icon: icon6,
      title: "Regulatory Compliance & Corporate Services",
      brief:
        "We assist businesses in meeting legal and regulatory requirements, ensuring smooth operations and risk mitigation.",
      AboutList: [
        {
          title: "Business Registration & Licensing – Assistance with company formation, permits, and compliance documentation.",
        },
        {
          title: "Corporate Governance Advisory – Strengthening business structures for operational efficiency and transparency.",
        },
        {
          title: " Regulatory Reporting & Documentation – Ensuring adherence to government and industry regulations.",
        },
      ],
    },
  ],
};

const Services = () => {
  return (
    <>
      <div
        id="merox-services-area"
        className="merox-services-area py-32 bg-[#24262d] relative z-[1] md:pb-20 sm:pb-20"
      >
        <div className="merox-services-area-img absolute right-0 top-0 h-full w-2/3 bg-no-repeat bg-center bg-cover -z-[1]">
          {/* <Image
            className="h-full w-full"
            src={ServicesData.bgimg}
            alt="bgimage"
          /> */}
        </div>


        <div className="container text-center">
          <h4 className="text-white uppercase font-medium text-[20px] relative pl-[30px] mb-[15px] before:bg-[#f90908] before:h-[2px] before:w-5 before:content-[''] before:absolute before:left-0 before:top-[11px]">
            {ServicesData.title}
          </h4>

          <h3 className=" mb-20 font-bold text-indent text-[18px] text-white">At <span className="text-red-500">Balagot & Emperado CPA’s Co.</span>, We offer accounting, audit, tax, and financial advice to help businesses stay stable, follow rules, and grow. We make sure our work is accurate, honest, and fits each client’s needs.

          </h3>




          <div className="xl:grid xl:grid-cols-2 xl:gap-x-8">


            <div className="services-box bg-white xl:p-[20px] lg:p-[100px] md:p-20 sm:py-20 sm:px-10">
              {ServicesData.ServicesList.map((item, i) => (

                <>
                  <div
                    className="single-services flex mb-9 transition-all duration-[0.3s] cursor-pointer hover:scale-[0.90] last:mb-0"
                    key={i}
                  >
                    <Image
                      className="shadow-[0px_8px_20px_0px_rgba(0,0,0,0.14)] rounded w-[50px] h-[50px]"
                      src={item.icon}
                      alt="icon"
                    />
                    <div className="services-content-box ml-[30px]">
                      <h3 className="text-left text-[24px] font-medium leading-none capitalize mb-[15px]">
                        {item.title}
                      </h3>
                      <p className="text-left mb-0">{item.brief}</p>
                    </div>


                  </div>

                  <div class="menu">
                    <ul>
                      <li>
                        <input type="checkbox" id={i} />
                        <label for={i} className="text-2xl text-[#f90908]">▼</label>
                        <ul className="submenu about-content-list p-0 mt-[25px] mb-[30px] mx-0 list-none">
                          {item?.AboutList.map((item2, i) => (
                            <li className="text-left text-[14px] text-[#24262d] font-semibold mb-[15px]" key={i}>
                              <p><i className="fa fa-check text-[#f90908] mr-[10px]"></i>{item2.title}</p>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </div>



                </>

              ))}
            </div>


            <div className="services-box bg-white xl:p-[20px] lg:p-[100px] md:p-20 sm:py-20 sm:px-10">
              {ServicesData2.ServicesList.map((item, x) => (

                <>
                  <div
                    className="single-services flex mb-9 transition-all duration-[0.3s] cursor-pointer hover:scale-[0.90] last:mb-0"
                    key={x}
                  >
                    <Image
                      className="shadow-[0px_8px_20px_0px_rgba(0,0,0,0.14)] rounded w-[50px] h-[50px]"
                      src={item.icon}
                      alt="icon"
                    />
                    <div className="services-content-box ml-[30px]">
                      <h3 className="text-left text-[24px] font-medium leading-none capitalize mb-[15px]">
                        {item.title}
                      </h3>
                      <p className="text-left mb-0">{item.brief}</p>
                    </div>


                  </div>


                  <div class="menu">
                    <ul>
                      <li>
                        <input type="checkbox" id={x+10} />
                        <label for={x+10} className="text-2xl text-[#f90908]">▼</label>
                        <ul className="submenu about-content-list p-0 mt-[25px] mb-[30px] mx-0 list-none">
                          {item?.AboutList.map((item2, i) => (
                            <li className="text-left text-[14px] text-[#24262d] font-semibold mb-[15px]" key={i}>
                              <p><i className="fa fa-check text-[#f90908] mr-[10px]"></i>{item2.title}</p>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </div>
                </>

              ))}
            </div>
          </div>


          <div className="flex flex-wrap mx-[-12px]">
            <div className="xl:ml-[8.33333333%] xl:w-4/12 lg:w-4/12 md:w-full sm:w-full xsm:w-full order-2 wow fadeInRight flex-[0_0_auto]">
              <div className="section-title lite mb-10 mt-[245px] sm:mt-20">
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
