"use client";
import React from "react";
import History from "./History";
import Vision_Mission from "./Vision_Mission";
import Locations from "./Locations";
import Team from "./Team";

const AboutExtra = () => {
  return (
    <section
      style={{
        padding: "3rem 1rem",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          marginBottom: "2rem",
        }}
      >
        
      </h1>

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <History />
        <Vision_Mission />
        <Locations />
        <Team />
      </div>
    </section>
  );
};

export default AboutExtra;
