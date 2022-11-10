import React from "react";
import { Link } from "react-router-dom";
import footerBackgroundImg from "../../assets/images/footerImageBg.jpg";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import logo from "../../assets/logo/logo.png";

const footerOverlay = {
  backgroundImage: `linear-gradient(0deg, rgba(47, 30, 10, 0.3) 0%, rgba(255,255,255,1)100%),url(${footerBackgroundImg})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const Footer = () => {
  return (
    <div className=" w-full bg-woodDark text-white mt-10" style={footerOverlay}>
      <img
        src={logo}
        alt="rifat's carpenter logo"
        className="mx-auto max-h-32"
      />
      <div className="container mx-auto pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 px-5 lg:px-10">
          {/* About me */}
          <div>
            <h2 className="text-lg font-medium border-b-2 border-woodDark inline pb-1">
              About me
            </h2>
            <p className="mt-5">
              Hi! I'm Mohammad Rifat Hossain,I live in Chattagong near Dakshin
              Burichar. I'm a professional carpenter with 15 years of
              experience. I had completed severel projects and my clients are
              really happy about my wooden job.
            </p>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2">
            <div className="justify-self-center">
              <h2 className="text-lg font-medium border-b-2 border-woodDark inline pb-1">
                My Services
              </h2>
              <br />
              <ul className="mt-5">
                <li>
                  <Link to="/services">List of services</Link>
                </li>
              </ul>
            </div>
            <div className="justify-self-end">
              <h2 className="text-lg font-medium border-b-2 border-woodDark inline pb-1 text-right">
                Follow Me
              </h2>
              <div className="mt-5">
                <ul className="flex gap-2">
                  <li>
                    <FaFacebookSquare className="text-4xl cursor-pointer hover:text-woodDark" />
                  </li>
                  <li>
                    <FaInstagramSquare className="text-4xl cursor-pointer hover:text-woodDark" />
                  </li>
                  <li>
                    <FaLinkedin className="text-4xl cursor-pointer hover:text-woodDark" />
                  </li>
                  <li>
                    <FaTwitterSquare className="text-4xl cursor-pointer hover:text-woodDark" />
                  </li>
                  <li>
                    <FaYoutubeSquare className="text-4xl cursor-pointer hover:text-woodDark" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-10" />
        {/* Copyright */}
        <div className="py-2 text-center text-sm">
          <p>© 2021-2022 rifat's carpentry. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
