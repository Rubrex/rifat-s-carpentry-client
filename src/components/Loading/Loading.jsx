import React from "react";
import Lottie from "lottie-react";
import handsaw from "./handsaw.json";

const Loading = () => {
  return (
    <div className="mx-auto w-full py-24 my-10">
      <div className="flex justify-center">
        <Lottie animationData={handsaw} loop={true} className="w-1/6" />
      </div>
    </div>
  );
};

export default Loading;
