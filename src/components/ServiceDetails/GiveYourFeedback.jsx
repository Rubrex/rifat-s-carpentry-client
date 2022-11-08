import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const GiveYourFeedback = ({ service_id, handleFeedback, user }) => {
  return (
    <div className="container mx-auto my-10">
      <form
        onSubmit={handleFeedback}
        className="p-5 max-w-3xl border rounded-md flex flex-col items-center gap-5 mx-auto"
      >
        <h2 className="text-2xl font-medium text-center">Customer Rating</h2>
        {/* Profile + Ratings */}
        <div className="p-2 border-2 border-woodDark rounded-full flex items-center w-80 justify-center">
          <div className="flex flex-col items-center">
            <img
              src={user?.photoURL}
              alt=""
              className="w-14 h-14 rounded-full object-cover"
            />
          </div>
          {/* stars */}
          <div className="flex flex-col justify-between ml-5">
            <p className="text-sm text-slate-500">{user?.displayName}</p>
            <div className="flex items-center justify-between w-full">
              <AiFillStar className="text-3xl text-woodLight cursor-pointer hover:text-woodDark" />
              <AiFillStar className="text-3xl text-woodLight cursor-pointer hover:text-woodDark" />
              <AiFillStar className="text-3xl text-woodLight cursor-pointer hover:text-woodDark" />
              <AiFillStar className="text-3xl text-woodLight cursor-pointer hover:text-woodDark" />
              <AiOutlineStar className="text-3xl" />
            </div>
          </div>
        </div>
        {/* Feedback Field */}
        <div className="flex flex-col">
          <label htmlFor="customerReview" className="text-sm mb-2">
            Give your Feedback:
          </label>
          <textarea
            id="customerReview"
            name="customerReview"
            rows="4"
            cols="50"
            placeholder="Your Feedback goes here"
            className="border-woodDark border-2 active:border-woodLight outline-none rounded-md"
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
