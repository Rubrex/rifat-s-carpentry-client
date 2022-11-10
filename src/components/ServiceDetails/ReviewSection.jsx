import { RatingStar } from "flowbite-react/lib/esm/components/Rating/RatingStar";
import React, { useEffect, useState } from "react";
import RatingsStar from "../common/RatingsStar/RatingsStar";

const ReviewSection = ({ reviews }) => {
  const formatDate = (date) => {
    const newDate = new Date(date);
    //  const date = new Date();
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let clock = newDate.toLocaleTimeString();
    const finalFormat = `${clock} : ${day}-${month}-${year}`;
    return finalFormat;
  };

  return (
    <div>
      {/* Reviews Section */}
      <div className="flex flex-col gap-5">
        {reviews.map(
          ({
            _id,
            reviewer_img,
            reviewer_name,
            reviewer_ratings,
            reviewer_email,
            reviewer_origin,
            reviewer_added,
            reviewer_review,
          }) => (
            <div key={_id} className="bg-slate-50 border p-6">
              {/* User image + Origin */}
              <div className="flex items-start justify-between   ">
                <div>
                  <div className="flex items-center gap-5 ">
                    <img
                      className="h-16 w-16 object-cover rounded-full"
                      src={reviewer_img}
                      alt={reviewer_name}
                    />
                    <div className=" flex flex-col justify-between gap-2">
                      <span>{reviewer_name}</span>
                      <div>
                        <RatingsStar stars={reviewer_ratings}></RatingsStar>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-slate-400 text-sm">
                      From: {reviewer_email}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="mt-1">{formatDate(reviewer_added)}</span>
                </div>
              </div>
              {/* Review Text */}
              <div className="py-3">
                <p>{reviewer_review}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ReviewSection;
