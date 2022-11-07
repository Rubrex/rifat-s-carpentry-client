import { Button, Navbar } from "flowbite-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

const Header = () => {
  return (
    <div className="container mx-auto ">
      <Navbar fluid={true} rounded={true}>
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            className="mr-3 h-6 sm:h-9 md:h-20"
            alt="Flowbite Logo"
          />
        </Link>
        <div className="flex md:order-2">
          {/* className="bg-red border border-orange-500 text-orange-500 hover:bg-orange-100 " */}

          <div className="border-2 border-woodDark flex">
            <NavLink
              className="bg-woodDark hover:bg-woodLight text-white py-2 px-4"
              to="/register"
            >
              Register
            </NavLink>
            <NavLink
              className=" hover:bg-woodLight   text-woodDark py-2 px-4"
              to="/login"
            >
              Login
            </NavLink>
          </div>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <NavLink className="hover:text-woodDark " to="/services">
            Services
          </NavLink>
          <NavLink className="hover:text-woodDark " to="/blogs">
            Blogs
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;