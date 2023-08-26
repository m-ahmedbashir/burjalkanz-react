import React from "react";
import HeroSection from "../components/HeroSection";
import CreativeSection from "../components/CreativeSection";
import Banner2 from "../components/Banner-2";
import Banner3 from "../components/Banner-3";
import ServicesSection from "../components/ServicesSection";
import Cta from "../components/Cta";
import LatestWork from "../components/LatestWork";
import BusinessCard from "../components/BussinessCard";

const Home = () => {
  return (
    <>
      <HeroSection />
      <CreativeSection />
      <Banner2 />
      <Banner3 />
      <ServicesSection />
      <Cta />
      <LatestWork />
      <BusinessCard />
    </>
  );
};

export default Home;
