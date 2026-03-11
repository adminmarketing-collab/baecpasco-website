"use client";
import React, { useEffect, useState } from "react";
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

const DESKTOP_BREAKPOINT = 1280;

const TeamData = [
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
    accreditation: ["BOA", "BIR"],
    affiliations: ["PICPA", "ACPAPP", "Chamber of Commerce"],
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
    accreditation: ["Quickbooks Certified Advisor"],
    spec: "Contact for branch-specific concerns, accounting solutions, and local compliance assistance",
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
];

const Team = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const updateViewport = () => setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT);
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  useEffect(() => {
    if (isDesktop) {
      setActiveIndex(null);
    }
  }, [isDesktop]);

  const handleCardClick = (index) => {
    if (isDesktop) return;
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <div id="merox-team-area" className="merox-team-area pt-[2px] pb-[4px]">
      <div className="container">
        <h3 className="text-[50px] font-bold leading-[49px] uppercase text-center">
          MEET OUR TEAM
        </h3>
      </div>

      <div className="team-grid flex flex-wrap justify-center mx-[-8px] md:mx-[-6px] xl:mx-[-40px]">
        {TeamData.map((item, i) => {
          const isOpen = activeIndex === i;

          return (
            <div
              key={i}
              className="team-grid-item w-full xl:w-1/4 px-[8px] md:px-[6px] xl:px-[8px] mb-[24px] xl:mb-[50px]"
            >
              <div
                className={`single-team-wrapper group relative text-center shadow-[0px_8px_20px_rgba(0,0,0,0.14)] rounded-[10px] ${
                  isDesktop ? "cursor-pointer overflow-visible pb-[210px] bg-transparent" : "cursor-pointer overflow-hidden bg-white"
                }`}
                onClick={() => handleCardClick(i)}
                role={isDesktop ? undefined : "button"}
                tabIndex={isDesktop ? undefined : 0}
                onKeyDown={(event) => {
                  if (!isDesktop && (event.key === "Enter" || event.key === " ")) {
                    event.preventDefault();
                    handleCardClick(i);
                  }
                }}
              >
                <div className="team-img overflow-hidden rounded-tr-[10px] rounded-tl-[10px] bg-[#57585c]">
                  <Image className="team-photo w-full" src={item.img} alt={item.title} />
                </div>

                {isDesktop ? (
                  <div className="team-content absolute left-0 right-0 bottom-0 overflow-visible">
                    <span
                      className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-[15px]
                      border-l-[15px] border-r-[15px] border-b-[15px]
                      border-l-transparent border-r-transparent border-b-white
                      transition-colors duration-300 group-hover:border-b-[#f90908]"
                    />

                    <div
                      className="rounded-br-[10px] rounded-bl-[10px] bg-white px-[35px] pt-6 pb-8 overflow-hidden
                      h-[210px] group-hover:h-[340px]
                      transition-[height,background-color] duration-300 ease-in-out group-hover:bg-[#f90908]"
                    >
                      <h4 className="text-lg font-bold mb-[5px] group-hover:text-white">
                        {item.title}
                      </h4>

                      <span className="uppercase text-sm font-semibold block text-[#f90908] group-hover:text-white">
                        {item.desig}
                      </span>

                      {item.accreditation && (
                        <div className="mt-2 text-[13px] leading-[18px] text-white">
                          Accreditation: {item.accreditation.join(", ")}
                        </div>
                      )}

                      {item.affiliations && (
                        <div className="text-[13px] leading-[18px] text-white">
                          Affiliations: {item.affiliations.join(", ")}
                        </div>
                      )}

                      <div className="w-full h-[1px] bg-white my-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      <p className="text-[14px] leading-[20px] opacity-0 translate-y-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 text-white/95">
                        {item.spec}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className={`px-4 pt-4 pb-5 transition-colors duration-300 ${isOpen ? "bg-[#f90908]" : "bg-white"}`}>
                    <h4 className={`text-[15px] leading-[1.35] font-bold transition-colors duration-300 ${isOpen ? "text-white" : "text-[#192b56]"}`}>
                      {item.title}
                    </h4>

                    <span className={`mt-1 block uppercase text-[11px] font-semibold tracking-[0.08em] transition-colors duration-300 ${isOpen ? "text-white" : "text-[#f90908]"}`}>
                      {item.desig}
                    </span>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-[280px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
                      }`}
                    >
                      {item.accreditation && (
                        <div className={`text-[13px] leading-[18px] mb-2 ${isOpen ? "text-white" : "text-[#4a4a4a]"}`}>
                          Accreditation: {item.accreditation.join(", ")}
                        </div>
                      )}

                      {item.affiliations && (
                        <div className={`text-[13px] leading-[18px] mb-2 ${isOpen ? "text-white" : "text-[#4a4a4a]"}`}>
                          Affiliations: {item.affiliations.join(", ")}
                        </div>
                      )}

                      <div className={`w-full h-[1px] mb-3 ${isOpen ? "bg-white/70" : "bg-black/10"}`} />

                      <p className={`text-[14px] leading-[20px] ${isOpen ? "text-white/95" : "text-[#4a4a4a]"}`}>
                        {item.spec}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .team-photo {
          display: block;
        }

        @media (max-width: 767px) {
          .team-photo {
            aspect-ratio: 4 / 4.4;
            object-fit: cover;
            object-position: center top;
          }
        }

        @media (min-width: 768px) and (max-width: 1279px) {
          .team-grid {
            max-width: 780px;
            margin-left: auto;
            margin-right: auto;
          }

          .team-grid-item {
            width: 50%;
          }

          .team-photo {
            aspect-ratio: 4 / 4.5;
            object-fit: cover;
            object-position: center top;
          }
        }
      `}</style>
    </div>
  );
};

export default Team;
