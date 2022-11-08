import React, { useContext } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import loginBannerImg from "../../assets/logo/logo.png";
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";
import OtherSignInProvider from "../common/OtherSignInProvider/OtherSignInProvider";
const Register = () => {
  // Access Context
  const { createUser, updateUser } = useContext(AuthContext);
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
          toast.success("Account created successfully");
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Left Image */}
        <div className="order-2 md:order-1">
          <img src={loginBannerImg} alt="" className="w-1/2 mx-auto" />
        </div>
        {/* Right Form */}
        <div className="mb-10 md:mb-0 order-1 md:order-2">
          <form
            onSubmit={handleRegistration}
            className="flex flex-col gap-4 max-w-[500px] p-14 border-slate-300 border mx-auto rounded-md"
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
                placeholder="email@example.com"
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
