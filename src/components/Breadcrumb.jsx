import React from "react";
import bgimg from "../../public/img/banner/History.png";

const Breadcrumb = ({ compact = false, position = "center center" }) => {
  return (
    <div
      id="merox-breadcrumb-area"
      className={`merox-breadcrumb-area relative bg-cover px-0 text-left before:content-none after:content-none ${
        compact ? "pb-[126px] pt-[228px] md:pb-[142px] md:pt-[242px]" : "pb-[134px] pt-[234px]"
      }`}
      style={{
        backgroundImage: `url(${bgimg.src})`,
        backgroundPosition: position,
      }}
    >
      <div className="container">
        <div className="flex flex-wrap mx-[-12px]">
          <div className="w-full px-[12px] flex-[0_0_auto]">
            {/* Intentionally empty - client wants no title text */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;


