import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitleChange from "../../hooks/useTitleChange";
import BannerCarousel from "./BannerCarousel";
import MyServices from "./MyServices";
import WhatIOffer from "./WhatIOffer";

const Home = () => {
  useTitleChange("Home");
  // Loader Data
  const myservices = useLoaderData();
  return (
    <div>
      <BannerCarousel />
      <MyServices myservices={myservices} />
      <WhatIOffer />
    </div>
  );
};

export default Home;
