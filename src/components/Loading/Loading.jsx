import React from "react";
import Lottie from "lottie-react";
import handsaw from "./handsaw.json";
import ScrollToTop from "../common/ScrollToTop/ScrollToTop";

const Loading = () => {
  return (
    <div className="mx-auto w-full py-24 my-10">
      <ScrollToTop />
      <div className="flex justify-center">
        <Lottie
          animationData={handsaw}
          loop={true}
          className="w-1/6 lg:w-1/12"
        />
      </div>
    </div>
  );
};

export default Loading;
