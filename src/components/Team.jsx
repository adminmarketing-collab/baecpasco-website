"use client";
import React from "react";
import Image from "next/image";
import img1 from "../../public/img/team/profile/7.png";
import img2 from "../../public/img/team/profile/12.png";
import img3 from "../../public/img/team/profile/5.png";
import img4 from "../../public/img/team/profile/10.png";
import img5 from "../../public/img/team/profile/11.png";
import img6 from "../../public/img/team/profile/6.png";
import img7 from "../../public/img/team/profile/9.png";
import img8 from "../../public/img/team/profile/8.png";
import img9 from "../../public/img/team/profile/13.png";

const TeamData = {
  title: "Our Team",
  title2: "Meet the Experts",
  TeamList: [
    {
      img: img1,
      title: "Al Batara Balagot, CPA, MBA",
      desig: "Managing Partner",
      spec: "Contact for tax consultations, financial planning, and compliance auditing.",
    },
    {
      img: img2,
      title: "Rezyl Mae Emperado-Tero, CPA, MBA",
      desig: "Managing Partner",
      spec: "Contact for corporate partnerships, regulatory concerns, and financial advisory",
    },
    {
      img: img3,
      title: "Cherry Mae Castro-Orella, CPA, MBA",
      desig: "Managing Partner",
      spec: "Contact for tax strategy, business forecasting, and audit compliance",
    },
    {
      img: img4,
      title: "Jouie Kristian Ogatis-Tero, CPA",
      desig: "Human Resources - Partner",
      spec: "Contact for HR-related concerns, payroll services, and employee compliance matters",
    },
    {
      img: img5,
      title: "Marissa Francisco-Casero, CPA, CTT",
      desig: "Tax Director - Partner",
      spec: "Contact For tax-related concerns, compliance support, and advisory services",
    },
    {
      img: img6,
      title: "Von Zerick M. Casero, CPA, CTT",
      desig: "Branch Manager - Partner",
      spec: "Contact for audit inquiries, corporate compliance, and business consultancy",
    },
    {
      img: img7,
      title: "Rey N. Cabilan",
      desig: "Branch Manager",
      spec: "Contact  for branch-specific concerns, accounting solutions, and local compliance assistance",
    },
    {
      img: img8,
      title: "Esther Racquel O. Balagot",
      desig: "Business Operations Head",
      spec: "Contact for operational concerns, corporate structuring, and business process improvements",
    },
    {
      img: img9,
      title: "Wellore John S. Grado",
      desig: "Senior Tax Associate",
      spec: "Contact for tax filing assistance, compliance support, and tax advisory",
    },
  ],
};

const Team = () => {
  return (
    <div id="merox-team-area" className="merox-team-area pt-[100px] pb-[120px]">
      <div className="container">
        {/* Section Title */}
        <div className="section-title mb-10 flex flex-col items-center mt-4">
  <h4 className="uppercase font-medium text-[20px] relative pl-[30px] mb-2 before:bg-[#f90908] before:h-[2px] before:w-5 before:content-[''] before:absolute before:left-0 before:top-[11px]">
    OUR TEAM
  </h4>

  <h3 className="text-[50px] font-bold leading-[49px] uppercase text-center">
    MEET THE EXPERTS
  </h3>
</div>


        {/* Team Profiles */}
        <div className="flex flex-wrap mx-[-12px]">
          {TeamData.TeamList.map((item, i) => (
            <div
              key={i}
              className="xl:w-1/4 lg:w-1/4 md:w-6/12 sm:w-full px-[12px] mb-[50px]"
            >
              <div className="single-team-wrapper group text-center overflow-hidden shadow-[0px_8px_20px_rgba(0,0,0,0.14)] cursor-pointer h-full">
                {/* Image */}
                <div className="team-img">
                  <Image
                    className="rounded-tr-[10px] rounded-tl-[10px] w-full"
                    src={item.img}
                    alt={item.title}
                  />
                </div>

                {/* Content */}
                <div
                  className="
                    team-content relative bg-white rounded-br-[10px] rounded-bl-[10px]
                    px-[35px] pt-6 pb-10 -mt-[50px] translate-y-[50px]
                    transition-all duration-200 ease-linear
                    min-h-[190px]  /* ✅ makes cards uniform height */
                    before:content-[''] before:absolute before:bottom-full before:left-1/2 before:-translate-x-1/2
                    before:border-l-[15px] before:border-r-[15px] before:border-b-[15px]
                    before:border-transparent before:border-b-white
                    group-hover:translate-y-0 group-hover:bg-[#f90908]
                    group-hover:before:border-b-[#f90908]
                  "
                >
                  <h4 className="text-lg font-bold mb-[5px] group-hover:text-white">
                    {item.title}
                  </h4>

                  {/* ROLE (no border line here anymore) */}
                  <span className="uppercase text-sm font-semibold block text-[#f90908] group-hover:text-white">
                    {item.desig}
                  </span>

                  {/* ✅ Divider line (hidden first, shows on hover) */}
                  <div
                    className="
                      w-full h-[1px] bg-white
                      my-4
                      opacity-0
                      transition-opacity duration-300
                      group-hover:opacity-100
                    "
                  />

                  {/* ✅ Specialization (hidden first, shows on hover) */}
                  <p
                    className="
                      text-[14px] leading-[20px]
                      opacity-0 translate-y-2 max-h-0 overflow-hidden
                      transition-all duration-300 ease-in-out
                      group-hover:opacity-100 group-hover:translate-y-0 group-hover:max-h-[120px]
                      text-white/95
                    "
                  >
                    {item.spec}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
