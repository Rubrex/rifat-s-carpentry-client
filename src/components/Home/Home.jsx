import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitleChange from "../../hooks/useTitleChange";
import ScrollToTop from "../common/ScrollToTop/ScrollToTop";
import BannerCarousel from "./BannerCarousel";
import MyLocation from "./MyLocation";
import MyServices from "./MyServices";
import WhatIOffer from "./WhatIOffer";

const Home = () => {
  useTitleChange("Home");
  // Loader Data
  const myservices = useLoaderData();
  return (
    <div>
      <ScrollToTop />
      <BannerCarousel />
      <MyServices myservices={myservices} />
      <WhatIOffer />
      <MyLocation />
    </div>
  );
};

export default Home;
