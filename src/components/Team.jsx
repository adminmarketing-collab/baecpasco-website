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
    { img: img1, title: "Al Batara Balagot, CPA, MBA", desig: "Managing Partner" },
    { img: img2, title: "Rezyl Mae Emperado-Tero, CPA, MBA", desig: "Managing Partner" },
    { img: img3, title: "Cherry Mae Castro-Orella, CPA, MBA", desig: "Managing Partner" },
    { img: img4, title: "Jouie Kristian Ogatis-Tero, CPA", desig: "Human Resources - Partner" },
    { img: img5, title: "Marissa Francisco-Casero, CPA, CTT", desig: "Tax Director - Partner" },
    { img: img6, title: "Von Zerick M. Casero, CPA, CTT", desig: "Branch Manager - Partner" },
    { img: img7, title: "Rey N. Cabilan", desig: "Branch Manager" },
    { img: img8, title: "Esther Racquel O. Balagot", desig: "Business Operations Head" },
    { img: img9, title: "Wellore John S. Grado", desig: "Senior Tax Associate" },
   
    
  ],
};


const Team = () => {
  return (
    <div
      id="merox-team-area"
      className="merox-team-area pt-[100px] pb-[120px] wow fadeInUp"
    >
      <div className="container">
        {/* Section Title */}
        <div className="flex flex-wrap mx-[-12px]">
          <div className="w-full px-[12px] flex-[0_0_auto]">
            <div className="section-title mb-10">
              <h4 className="uppercase font-medium text-[20px] relative pl-[30px] mb-[15px] before:bg-[#f90908] before:h-[2px] before:w-5 before:content-[''] before:absolute before:left-0 before:top-[11px]">
                {TeamData.title}
              </h4>
              <h3 className="text-[50px] font-bold leading-[49px] uppercase">
                {TeamData.title2}
              </h3>
            </div>
          </div>
        </div>

        {/* Team Profiles */}
        <div className="flex flex-wrap mx-[-12px]">
          {TeamData.TeamList.map((item, i) => (
            <div
              key={i}
              className="xl:w-1/4 lg:w-1/4 md:w-6/12 sm:w-full px-[12px] flex-[0_0_auto] mb-[50px]"
            >
              <div className="single-team-wrapper text-center overflow-hidden transition-all duration-[0.35s] shadow-[0px_8px_20px_0px_rgba(0,0,0,0.14)] group cursor-pointer">
                
                {/* Image */}
                <div className="team-img relative">
                  <Image
                    className="rounded-tr-[10px] rounded-tl-[10px] w-full"
                    src={item.img}
                    alt={item.title}
                  />
                </div>

                {/* White card with triangle */}
                <div className="team-content py-5 pt-6 pb-10 px-[35px] bg-white rounded-br-[10px] rounded-bl-[10px] -mt-[50px] translate-y-[50px] transition-all duration-150 ease-linear 
                  before:content-[''] before:absolute before:bottom-full before:h-0 before:border-l-[15px] before:border-solid before:border-transparent before:border-r-[15px] before:border-b-[15px] before:border-b-white before:-ml-[15px] 
                  group-hover:translate-y-0 group-hover:bg-[#f90908] group-hover:before:border-b-[#f90908]">
                  <h4 className="text-lg font-bold capitalize mb-[5px] group-hover:text-white">
                    {item.title}
                  </h4>
                  <span className="uppercase text-sm text-[#f90908] font-semibold block pb-[15px] mb-[15px] border-b-[1px] border-solid border-white group-hover:text-white">
                    {item.desig}
                  </span>
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