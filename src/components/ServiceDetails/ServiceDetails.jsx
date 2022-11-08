import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import GiveYourFeedback from "./GiveYourFeedback";
import ReviewSection from "./ReviewSection";

const ServiceDetails = () => {
  // Loader Data
  const {
    service_id,
    service_title,
    service_img,
    service_price,
    service_rating,
    service_description,
  } = useLoaderData();
  // States
  const [reviews, setReviews] = useState([]);
  const [refresh, setRefresh] = useState(true);
  //Access Context
  const { user } = useContext(AuthContext);
  // event handler for Feedback
  const handleFeedback = (event) => {
    event.preventDefault();
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let time = date.toLocaleTimeString();

    const form = event.target;

    const ser_id = service_id;
    const added = `${time} ${day}/${month}/${year}`;
    const name = user.displayName;
    const profileImage = user.photoURL;
    const email = user.email;
    const ratings = 4;
    const feedback = form.customerReview.value;
    const origin = "Google";
    console.log(added);

    const review = {
      service_id: ser_id,
      reviewer_name: name,
      reviewer_img: profileImage,
      reviewer_email: email,
      reviewer_ratings: ratings,
      reviewer_review: feedback,
      reviewer_origin: origin,
      reviewer_added: added,
    };
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Thanks for your feedback");
          form.reset();
          setRefresh(!refresh);
        }
      })
      .catch((err) => console.log(err));
  };

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
  }, [service_id, refresh]);

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
      <GiveYourFeedback
        service_id={service_id}
        handleFeedback={handleFeedback}
        user={user}
      />
    </section>
  );
};

export default ServiceDetails;