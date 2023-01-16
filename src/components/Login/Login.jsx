import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import loginBannerImg from "../../assets/logo/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";
import OtherSignInProvider from "../common/OtherSignInProvider/OtherSignInProvider";
import useTitleChange from "../../hooks/useTitleChange";
import ScrollToTop from "../common/ScrollToTop/ScrollToTop";

const Login = () => {
  useTitleChange("Login");
  // Hooks
  const navigate = useNavigate();
  const location = useLocation();
  // variables
  const from = location.state?.from?.pathname || "/";

  // Access Context
  const { logIn } = useContext(AuthContext);
  // Event Handlers
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((res) => {
        if (res.user?.email) {
          // save JWT Token
          const currentUser = { email: res.user.email };

          fetch("https://rifat-carpenter-server.vercel.app/jwt", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(currentUser),
          })
            .then((res) => res.json())
            .then((data) =>
              localStorage.setItem("carpentry_token", data.token)
            );
          toast.success("Logged In Successfully");
          navigate(from, { replace: true });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mx-auto my-10 mb-24">
      <ScrollToTop />
      <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-4xl mx-auto  border-slate-300 border overflow-hidden rounded-lg">
        {/* Left Image */}
        <div className="w-full h-full relative">
          <div className="absolute w-full h-full bg-white/50  flex justify-center items-center flex-col">
            <img src={loginBannerImg} className="w-2/3 mx-auto" alt="" />
            <h1 className="text-5xl font-extrabold text-white text-center">
              Login
            </h1>
          </div>
          <img
            src="https://images.pexels.com/photos/6790027/pexels-photo-6790027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className=" mx-auto order-2 md:order-1 object-cover w-full h-full z-10"
          />
        </div>

        {/* Right Form */}
        <div className="mb-10 md:mb-0 order-1 md:order-2">
          <form
            onSubmit={handleLogin}
            className="flex flex-col gap-4 max-w-[500px] p-14 mx-auto"
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                name="email"
                defaultValue="nikita41@gmail.com"
                placeholder="name@example.com"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput
                id="password1"
                name="password"
                type="password"
                defaultValue="123456"
                required={true}
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" name="checked" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <div className="flex items-center gap-2">
              <Link to="/register">Don't have an account ?</Link>
            </div>

            <Button
              type="submit"
              color="orange"
              className=" bg-woodDark hover:bg-woodLight text-white"
            >
              Sign In
            </Button>
            <OtherSignInProvider />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
