import React, { useContext } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import loginBannerImg from "../../assets/logo/logo.png";
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";
import OtherSignInProvider from "../common/OtherSignInProvider/OtherSignInProvider";
import useTitleChange from "../../hooks/useTitleChange";
import ScrollToTop from "../common/ScrollToTop/ScrollToTop";
const Register = () => {
  // Hooks
  useTitleChange("Register");
  const navigate = useNavigate();
  // variables
  const from = location.state?.from?.pathname || "/";
  // Access Context
  const { createUser, updateUser, user, setLoading } = useContext(AuthContext);
  // Event Handlers
  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const profileImg = form.imageLink.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((res) => {
        if (res.user?.email) {
          const profile = { displayName: name, photoURL: profileImg };
          updateUser(profile);

          // Create JWT Token and save it on local storage
          const currentUser = { email: res.user.email };
          fetch("https://rifat-carpenter-server.vercel.app/jwt", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(currentUser),
          })
            .then((res) => res.json())
            .then((data) => {
              // Change loading state from AuthContext
              setLoading(false);
              localStorage.setItem("carpentry_token", data.token);
              navigate(from, { replace: true });
              toast.success("Registered Successfully");
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  };

  if (user?.email) {
    navigate("/");
  }

  return (
    <div className="container mx-auto my-10 mb-24">
      <ScrollToTop />
      <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-4xl mx-auto  border-slate-300 border overflow-hidden rounded-lg">
        {/* Left Image */}
        <div className="w-full h-full relative">
          <div className="absolute w-full h-full bg-white/50  flex justify-center items-center flex-col">
            <img src={loginBannerImg} className="w-2/3 mx-auto" alt="" />
            <h1 className="text-5xl font-extrabold text-white text-center">
              Register
            </h1>
          </div>
          <img
            src="https://images.pexels.com/photos/5089152/pexels-photo-5089152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className=" mx-auto order-2 md:order-1 object-cover w-full h-full z-10"
          />
        </div>
        {/* Right Form */}
        <div className="mb-10 md:mb-0 order-1 md:order-2">
          <form
            onSubmit={handleRegistration}
            className="flex flex-col gap-4 max-w-[500px] p-14  mx-auto rounded-md"
          >
            {/* Name */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name1" value="Your Name" />
              </div>
              <TextInput
                id="name1"
                type="text"
                name="name"
                placeholder="Your Name"
                required={true}
              />
            </div>
            {/* Profile Image Link */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="imageLink" value="Your Profile Image Link" />
              </div>
              <TextInput
                id="imageLink"
                type="text"
                name="imageLink"
                placeholder="Link to the image"
                required={true}
              />
            </div>
            {/* Email */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                name="email"
                placeholder="name@mailme.com"
                required={true}
              />
            </div>
            {/* Confirm Password */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Confirm Password" />
              </div>
              <TextInput
                id="password1"
                type="password"
                name="password"
                required={true}
              />
            </div>
            {/* Already have an account */}
            <div>
              <Link to="/login">Already have an account</Link>
            </div>
            <Button
              type="submit"
              color="orange"
              className=" bg-woodDark hover:bg-woodLight text-white"
            >
              Sign Up
            </Button>
            {/* Other Signin */}
            <OtherSignInProvider />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
