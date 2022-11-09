import React from "react";
import { Carousel } from "flowbite-react";
import "./BannerCarousel.css";
import banner_1 from "../../assets/images/banner/1.jpg";
import banner_2 from "../../assets/images/banner/2.jpg";
import banner_3 from "../../assets/images/banner/3.jpg";
import banner_4 from "../../assets/images/banner/4.jpg";
import banner_5 from "../../assets/images/banner/5.jpg";
import { Link } from "react-router-dom";

const BannerCarousel = () => {
  const bannerImages = [banner_1, banner_2, banner_3, banner_4, banner_5];
  return (
    <section className="h-56 sm:h-64 md:h-[600px] 2xl:h-[600px] w-full">
      <Carousel>
        {bannerImages.map((bannerImg, index) => (
          <div key={index} className="relative  ">
            <div className="relative gradientToRight ">
              <img
                src={bannerImg}
                alt="..."
                width="100%"
                className="relative gradientToRight object-cover"
              />
              <div className="absolute top-9 md:top-1/3 left-5 md:left-24 text-white z-10">
                <h1 className="text-xl lg:text-5xl font-bold">
                  Renovate you housings
                  <br />
                  Modify furnitures
                  <br />
                  Stay Modern
                </h1>
                <p className="mt-8 font-medium hidden md:block">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="flex gap-3 mt-8">
                  <Link
                    to="/services"
                    className="border border-woodLight py-2 px-4 text-woodLight hover:bg-woodDark hover:text-white rounded-md"
                  >
                    Latest Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default BannerCarousel;
