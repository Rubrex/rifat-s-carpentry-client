import { Button, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { AuthContext } from "../../contexts/AuthProvider";

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
          <img
            src={logo}
            className="mr-3 h-6 sm:h-9 md:h-20"
            alt="Flowbite Logo"
          />
        </Link>
        <div className="flex md:order-2">
          {/* className="bg-red border border-orange-500 text-orange-500 hover:bg-orange-100 " */}

          <div className="border-2 border-woodDark flex">
            {user?.email ? (
              <button
                onClick={handleLogout}
                className="bg-woodDark hover:bg-woodLight text-white py-2 px-4"
                to="/register"
              >
                Logout
              </button>
            ) : (
              <>
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
              </>
            )}
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
          {user?.email && (
            <>
              <NavLink className="hover:text-woodDark " to="/addservice">
                Add Service
              </NavLink>
              <NavLink className="hover:text-woodDark " to="/myreviews">
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
