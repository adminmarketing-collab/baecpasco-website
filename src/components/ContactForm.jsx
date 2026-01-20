"use client";
import React from "react";
import ContactForm from "./ContactForm";

const ContactData = {
  title: "contact",
  title2: "contact us",
};

const Contact = () => {
  return (
    <div id="merox-contact-area" className="merox-contact-area my-[100px]">
      <div className="container">

        {/* Title Section */}
        <div className="mb-10">
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

        {/* Form Section */}
        <div className="w-full px-4">
          <ContactForm />
        </div>

      </div>
    </div>
  );
};

export default Contact;
