import React from "react";
import { Carousel } from "flowbite-react";
import "./BannerCarousel.css";
import banner_1 from "../../assets/images/banner/1.jpg";
import banner_2 from "../../assets/images/banner/2.jpg";
import banner_3 from "../../assets/images/banner/3.jpg";
import banner_4 from "../../assets/images/banner/4.jpg";
import banner_5 from "../../assets/images/banner/5.jpg";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const BannerCarousel = () => {
  const bannerImages = [banner_1, banner_2, banner_3, banner_4, banner_5];
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="h-56 sm:h-64 md:h-[600px] 2xl:h-[600px] w-full">
      <Carousel>
        {bannerImages.map((bannerImg, index) => (
          <div key={index} className="relative gradientToRight ">
            <img
              src={bannerImg}
              alt="banner image"
              width="100%"
              className="relative gradientToRight object-cover"
            />
            <div className="absolute top-9 md:top-1/3 left-5 md:left-24 text-white z-10">
              <div className="text-xl lg:text-5xl font-bold ">
                <h1>Renovate you housings</h1>
                <h1 className="my-5">Modify furnitures</h1>
                <h1>Stay Modern</h1>
              </div>
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
        ))}
      </Carousel>

      {/* Slick Slider */}
    </section>
  );
};

export default BannerCarousel;
