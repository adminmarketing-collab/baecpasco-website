"use client";
import React from "react";
import Video from "@/components/Video";
import Services from "@/components/Services";
import CoreProcess from "@/components/CoreProcess";
import Careers from "@/components/Careers";
import Cta from "@/components/Cta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ServicesPageClient() {
  return (
    <>
      <Header />
      <main>
        <Video />
        <Services />
        <CoreProcess/>
        <Careers />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
