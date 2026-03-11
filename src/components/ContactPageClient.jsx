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
        <Breadcrumb compact position="center 42%" />

        <div id="merox-contact-area" className="merox-contact-area mt-[36px] mb-[72px] md:mt-[42px] md:mb-[84px]">
          <div className="container">
            <div className="mb-6 text-center md:mb-8">
              <h1 className="text-center text-[38px] font-bold uppercase leading-tight md:text-[50px] md:leading-[49px]">
                contact us
              </h1>
            </div>

            <div className="mx-auto w-full max-w-3xl px-4">
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

