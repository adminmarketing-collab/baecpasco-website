"use client";
import React from "react";
import About from "@/components/About";
import Counter from "@/components/Counter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import Scrolltop from "@/components/Scrolltop";
import Breadcrumb from "@/components/Breadcrumb";
import Industries from "@/components/Industries";
import BreadcrumbIndustries from "@/components/BreadcrumbIndustries";

const Index = () => {
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <BreadcrumbIndustries title="Industries" />
        <Industries />
        <Counter />
        <Footer />
      </main>
      <Scrolltop />
    </>
  );
};
export default Index;
