import React from "react";
import bgimg from "../../public/img/banner/History.png";

const Breadcrumb = () => {
  return (
    <div
  id="merox-breadcrumb-area"
  className="merox-breadcrumb-area bg-center bg-cover relative pt-[234px] px-0 pb-[134px] text-left before:content-none after:content-none"
  style={{ backgroundImage: `url(${bgimg.src})` }}
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
