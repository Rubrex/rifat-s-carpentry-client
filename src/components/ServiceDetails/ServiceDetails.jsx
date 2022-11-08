import React, { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { useLoaderData } from "react-router-dom";
import GiveYourFeedback from "./GiveYourFeedback";
import ReviewSection from "./ReviewSection";

const ServiceDetails = () => {
  // States
  const [reviews, setReviews] = useState([]);

  // Loader Data
  const {
    service_id,
    service_title,
    service_img,
    service_price,
    service_rating,
    service_description,
  } = useLoaderData();

  // Side effects
  // Load Reviews
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:5000/reviews/${service_id}`
      );
      const data = await response.json();
      setReviews(data);
    };
    fetchData();
  }, [service_id]);

  return (
    <section className="container mx-auto">
      <main>
        {/* Service and Informations */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-5 lg:gap-10">
          {/* cover */}
          <PhotoProvider>
            <PhotoView src={service_img}>
              <img src={service_img} alt="" className="rounded-md" />
            </PhotoView>
          </PhotoProvider>
          {/* Service Related Informations */}
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl text-woodDark font-extrabold ">
              {service_title}
            </h2>
            {/* Ratings with stars */}
            <div className="flex items-start gap-16 ">
              <div>Ratings: {service_rating}</div>
              <span>Price: ${service_price}</span>
            </div>
            {/* full desc */}
            <div>
              <p>{service_description}</p>
            </div>
          </div>
        </div>
      </main>
      <hr className="my-10" />
      {/* Review Sections */}
      <ReviewSection reviews={reviews} />
      {/* Feedback / Login Form */}
      <GiveYourFeedback service_id={service_id} />
    </section>
  );
};

export default ServiceDetails;
