"use client";
import React from "react";
import About from "@/components/About";
import Counter from "@/components/Counter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import Scrolltop from "@/components/Scrolltop";
import Breadcrumb from "@/components/Breadcrumb";
import Profile_8 from "@/components/Profile_8";

const Index = () => {
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <Breadcrumb title="Profile" />
        <Profile_8 />
        <Counter />
        <Footer />
      </main>
      <Scrolltop />
    </>
  );
};
export default Index;
