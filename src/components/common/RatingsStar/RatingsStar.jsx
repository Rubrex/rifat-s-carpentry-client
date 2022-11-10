import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const RatingsStar = ({ stars }) => {
  const filledStars = parseInt(stars);
  const emptyStars = 5 - filledStars;

  const filled = Array(filledStars).fill(" ");
  const empty = Array(emptyStars).fill(" ");

  return (
    <div className="flex items-center">
      {filled?.map((elem, index) => (
        <AiFillStar
          key={index}
          className="text-woodLight cursor-pointer hover:text-woodDark text-xl"
        />
      ))}
      {empty?.map((elem, index) => (
        <AiOutlineStar
          key={index}
          className="text-woodLight cursor-pointer hover:text-woodDark text-xl"
        />
      ))}
    </div>
  );
};

export default RatingsStar;
