import React from "react";
import { useLoaderData } from "react-router-dom";
import BannerCarousel from "./BannerCarousel";
import MyServices from "./MyServices";

const Home = () => {
  // Loader Data
  const myservices = useLoaderData();
  console.log(myservices);
  return (
    <div>
      <BannerCarousel />
      <MyServices myservices={myservices} />
    </div>
  );
};

export default Home;
