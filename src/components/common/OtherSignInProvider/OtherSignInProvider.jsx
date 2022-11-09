import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const OtherSignInProvider = () => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const { loginProvider } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    loginProvider(googleProvider)
      .then((result) => {
        const user = result.user;
        if (user?.email) {
          const currentUser = { email: result.user.email };
          console.log(currentUser);
          fetch("http://localhost:5000/jwt", {
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
          navigate("/");
        }
      })
      .catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  const handleGithubSignIn = () => {
    loginProvider(githubProvider)
      .then((result) => {
        const user = result.user;
        if (user?.email) {
          const currentUser = { email: result.user.email };
          fetch("http://localhost:5000/jwt", {
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
          navigate("/");
        }
      })
      .catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <div>
      <p className="my-8 text-center">Or Sign in with</p>
      <div className="text-black text-4xl flex justify-center items-center gap-5">
        <div onClick={handleGoogleSignIn}>
          <FaGoogle className="cursor-pointer text-green-500" />
        </div>
        <div onClick={handleGithubSignIn}>
          <FaGithub className="cursor-pointer text-slate-800" />
        </div>
      </div>
    </div>
  );
};

export default OtherSignInProvider;
