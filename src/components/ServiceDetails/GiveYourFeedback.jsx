import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import GiveRatings from "../common/GiveRatings/GiveRatings";

const GiveYourFeedback = ({ service_id, handleFeedback, user }) => {
  const location = useLocation();

  return (
    <div className="container mx-auto my-10">
      <form
        onSubmit={handleFeedback}
        className="p-5 max-w-3xl border rounded-md flex flex-col items-center gap-5 mx-auto relative"
      >
        {/* Login / Register first */}

        {!user?.email && (
          <div className="absolute top-0 left-0 w-full h-full bg-white/5 backdrop-blur flex flex-col items-center justify-center">
            <h1 className="text-2xl text-woodDark mb-8 font-bold">
              Please Login to write review
            </h1>
            <div className="flex  border-2  border-woodDark">
              <Link
                className="bg-woodDark hover:bg-woodLight text-white px-6 py-2"
                to="/register"
                state={{ from: location }}
              >
                Register
              </Link>
              <Link
                className=" hover:bg-woodLight  text-woodDark px-6 py-2 "
                to="/login"
                state={{ from: location }}
              >
                Login
              </Link>
            </div>
          </div>
        )}

        <h2 className="text-2xl font-medium text-center">Customer Rating</h2>
        {/* Profile + Ratings */}
        <div className="p-2 border-2 border-woodDark rounded-full flex items-center w-80 justify-center">
          <div className="flex flex-col items-center">
            <img
              src={
                user?.photoURL ||
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
              alt=""
              className="w-14 h-14 rounded-full object-cover"
            />
          </div>
          {/* stars */}
          <div className="flex flex-col justify-between ml-5">
            <p className="text-sm text-slate-500">{user?.displayName}</p>
            <div>
              <GiveRatings initialValue={0} />
            </div>
          </div>
        </div>
        {/* Feedback Field */}
        <div className="flex flex-col w-full items-center">
          <label htmlFor="customerReview" className="text-sm mb-2">
            Give your Feedback:
          </label>
          <textarea
            id="customerReview"
            name="customerReview"
            rows="4"
            placeholder="Your Feedback goes here"
            className="w-full md:w-2/3 px-5  border-woodDark border-2 active:border-woodLight outline-none rounded-md"
          ></textarea>
        </div>
        {/* Submit brn */}
        <button className="border border-woodLight py-2 px-4 text-woodLight hover:bg-woodDark hover:text-white rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default GiveYourFeedback;
