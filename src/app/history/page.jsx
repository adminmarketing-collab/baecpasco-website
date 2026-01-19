"use client";
import React from "react";
import History from "@/components/History";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import Scrolltop from "@/components/Scrolltop";



const Index = () => {
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <History />
        <Counter />
        <Footer />
      </main>
      <Scrolltop />
    </>
  );
};
export default Index;
