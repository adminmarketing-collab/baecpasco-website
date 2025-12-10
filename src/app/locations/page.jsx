"use client";
import React from "react";
import About from "@/components/About";
import Counter from "@/components/Counter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import Scrolltop from "@/components/Scrolltop";
import Breadcrumb from "@/components/Breadcrumb";
import Locations from "@/components/Locations";
import BreadcrumbLocations from "@/components/BreadcrumbLocations";

const Index = () => {
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <BreadcrumbLocations title="" />
        <Locations />
        <Counter />
        <Footer />
      </main>
      <Scrolltop />
    </>
  );
};
export default Index;
