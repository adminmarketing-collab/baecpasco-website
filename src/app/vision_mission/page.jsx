"use client";
import React from "react";
import About from "@/components/About";
import Counter from "@/components/Counter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import Scrolltop from "@/components/Scrolltop";
import Breadcrumb from "@/components/Breadcrumb";
import History from "@/components/History";
import Vision_Mission from "@/components/Vision_Mission";

const Index = () => {
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <Breadcrumb title="Vision & Mission of the company " />
        <Vision_Mission />
        <Counter />
        <Footer />
      </main>
      <Scrolltop />
    </>
  );
};
export default Index;
