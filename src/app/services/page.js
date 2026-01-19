"use client";
import React from "react";
import Video from "@/components/Video";
import Services from "@/components/Services";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  return (
    <>
      <Header />
      <main>
        <Video />
        <Services />
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;
