import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const GiveYourFeedback = () => {
  return (
    <div className="container mx-auto my-10">
      <form className="p-5 max-w-3xl border rounded-md flex flex-col items-center gap-5 mx-auto">
        <h2 className="text-2xl font-medium text-center">Customer Rating</h2>
        {/* Profile + Ratings */}
        <div className="p-2 border-2 border-woodDark rounded-full flex items-center w-80 justify-center">
          <div className="flex flex-col items-center">
            <img
              src="https://media.istockphoto.com/photos/beautiful-afro-girl-with-curly-hairstyle-picture-id1381221247?b=1&k=20&m=1381221247&s=170667a&w=0&h=4bt0RFmAffRSqrKa2N2vJAFbWgmbRg7x-0ziJaRtpxE="
              alt=""
              className="w-14 h-14 rounded-full object-cover"
            />
          </div>
          {/* stars */}
          <div className="flex flex-col justify-between ml-5">
            <p className="text-sm text-slate-500">Valir Morghul</p>
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
          <label for="customerReview" className="text-sm mb-2">
            Give your Feedback:
          </label>
          <textarea
            id="customerReview"
            name="customerReview"
            rows="4"
            cols="50"
            className="border-woodDark border-2 active:border-woodLight outline-none rounded-md"
          >
            At w3schools.com you will learn how to make a website. They offer
            free tutorials in all web development technologies.
          </textarea>
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
