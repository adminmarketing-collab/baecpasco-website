"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import Scrolltop from "@/components/Scrolltop";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";

export default function ContactPageClient() {
  return (
    <>
      <Preloader />
      <Header />

      <main>
        {/* Breadcrumb / Hero */}
        <Breadcrumb title="Contact" />

        {/* Contact Section */}
        <div id="merox-contact-area" className="merox-contact-area my-[100px]">
          <div className="container">

            {/* Title */}
            <div className="mb-10 text-center">
              <h4
                className="uppercase font-medium text-[20px] relative inline-block pl-[30px] mb-[15px]
                before:w-5 before:content-['']
                before:absolute before:left-0 before:top-[11px]"
              >
                contact
              </h4>

              <h1 className="text-[50px] font-bold leading-[49px] uppercase">
                contact us
              </h1>
            </div>

            {/* Form */}
            <div className="w-full max-w-3xl mx-auto px-4">
              <ContactForm />
            </div>

          </div>
        </div>
      </main>

      <Footer />
      <Scrolltop />
    </>
  );
}