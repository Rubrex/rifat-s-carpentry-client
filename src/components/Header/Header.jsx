import { Button, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { AuthContext } from "../../contexts/AuthProvider";
import "./Header.css";

const Header = () => {
  // Hooks
  const { user, logOut } = useContext(AuthContext);
  // Event handlers
  const handleLogout = () => {
    logOut()
      .then(() => toast.success("Logged out"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mx-auto ">
      <Navbar fluid={true} rounded={true}>
        <Link to="/" className="flex items-center">
          <img src={logo} className="mr-3 h-14 md:h-20" alt="Flowbite Logo" />
        </Link>
        <div className="flex md:order-2">
          {/* className="bg-red border border-orange-500 text-orange-500 hover:bg-orange-100 " */}

          <div className="border-2 border-woodDark flex">
            {user?.email ? (
              <button
                onClick={handleLogout}
                className="bg-woodDark border-2 border-transparent  hover:bg-woodLight text-white py-1 px-4"
                to="/register"
              >
                Logout
              </button>
            ) : (
              <>
                <NavLink
                  className="bg-woodDark  border-2 border-transparent hover:bg-woodLight text-white py-1 px-4"
                  to="/register"
                >
                  Register
                </NavLink>
                <NavLink
                  className=" hover:bg-woodLight border-2 border-transparent   text-woodDark py-1 px-4"
                  to="/login"
                >
                  Login
                </NavLink>
              </>
            )}
          </div>
          <Navbar.Toggle className="ml-5" />
        </div>
        <Navbar.Collapse className="bg-slate-200 md:bg-white p-5 md:p-0 ">
          <NavLink
            className="hover:text-woodDark text-woodLight  md:text-slate-800 mb-2 md:mb-0 py-1 px-4"
            to="/services"
          >
            Services
          </NavLink>
          <NavLink
            className="hover:text-woodDark text-woodLight  md:text-slate-800 mb-2 md:mb-0 py-1 px-4"
            to="/blogs"
          >
            Blogs
          </NavLink>
          {user?.email && (
            <>
              <NavLink
                className="hover:text-woodDark text-woodLight  md:text-slate-800 mb-2 md:mb-0 py-1 px-4"
                to="/addservice"
              >
                Add Service
              </NavLink>
              <NavLink
                className="hover:text-woodDark text-woodLight  md:text-slate-800 mb-2 md:mb-0 py-1 px-4"
                to="/myreviews"
              >
                My Reviews
              </NavLink>
            </>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
