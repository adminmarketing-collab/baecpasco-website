"use client";
import React from "react";
import ContactForm from "./ContactForm"; // import the form component

const ContactData = {
  title: "contact",
  title2: "contact us",
};

const Contact = () => {
  return (
    <div id="merox-contact-area" className="merox-contact-area my-[100px]">
      <div className="container">

        {/* Row: Title left, Form right */}
        <div className="flex flex-wrap -mx-4 items-start">

          {/* Left Column: Title */}
          <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0 flex flex-col justify-center">
            <div className="section-title">
              <h4 className="uppercase font-medium text-[20px] relative pl-[30px] mb-[15px] 
                before:bg-[#f90908] before:h-[2px] before:w-5 before:content-[''] 
                before:absolute before:left-0 before:top-[11px]">
                {ContactData.title}
              </h4>
              <h3 className="text-[50px] font-bold leading-[49px] uppercase">
                {ContactData.title2}
              </h3>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="w-full lg:w-1/2 px-4 flex justify-end">
            <ContactForm />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
