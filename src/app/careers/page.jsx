"use client";
import React from "react";
import About from "@/components/About";
import Counter from "@/components/Counter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import Scrolltop from "@/components/Scrolltop";
import Breadcrumb from "@/components/Breadcrumb";
import Careers from "@/components/Careers";
import BreadcrumbCareers from "@/components/BreadcrumbCareers";

const Index = () => {
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <BreadcrumbCareers title="Careers" />
        <Careers />
        <Counter />
        <Footer />
      </main>
      <Scrolltop />
    </>
  );
};
export default Index;
