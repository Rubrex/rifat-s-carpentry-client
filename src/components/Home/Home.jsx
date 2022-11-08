import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitleChange from "../../hooks/useTitleChange";
import BannerCarousel from "./BannerCarousel";
import MyServices from "./MyServices";

const Home = () => {
  useTitleChange("Home");
  // Loader Data
  const myservices = useLoaderData();
  return (
    <div>
      <BannerCarousel />
      <MyServices myservices={myservices} />
    </div>
  );
};

export default Home;
