"use client";

import React from "react";
import About from "@/components/About";
import AboutExtra from "@/components/AboutExtra";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import Scrolltop from "@/components/Scrolltop";
import Breadcrumb from "@/components/Breadcrumb";

export default function AboutPageClient() {
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <Breadcrumb title="About" />
        <About />
        <AboutExtra />
        <Cta />
        <Footer />
      </main>
      <Scrolltop />
    </>
  );
}