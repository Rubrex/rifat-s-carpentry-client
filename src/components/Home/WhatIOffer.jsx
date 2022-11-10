import React from "react";
import manDesigning from "../../assets/images/customdesigning.png";
import manInstalling from "../../assets/images/installingMan.png";
import manReparing from "../../assets/images/repairMan.png";

const WhatIOffer = () => {
  return (
    <section className="container mx-auto my-20">
      <div className="text-center my-10">
        <h2 className="text-center py-10 text-4xl font-bold text-woodDark">
          What I offer
        </h2>
        <p className="text-xl">
          I offer full service, custom design and installation
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-4xl mx-auto">
        <div className="flex justify-center items-center flex-col p-10 text-center h-[298px] bg-woodLight/60 hover:scale-105 transition-all">
          <h2 className="text-2xl font-medium">Common Repairs</h2>
          <p>
            You house doors, ceiling, window needs maintenance and repairs over
            time
          </p>
        </div>
        <div>
          <img
            src={manDesigning}
            alt=""
            className="w-full h-[298px] object-cover hover:scale-105 transition-all"
          />
        </div>
        <div className="flex justify-center items-center flex-col p-10 text-center h-[298px] bg-slate-200/60 hover:scale-105 transition-all">
          <h2 className="text-2xl font-medium">Custom Design</h2>
          <p>If you have a design in mind, I'll be there to make it for you.</p>
        </div>
        <div>
          <img
            src={manReparing}
            alt=""
            className="w-full h-[298px] object-cover hover:scale-105 transition-all"
          />
        </div>
        <div className="flex justify-center items-center flex-col p-10 text-center h-[298px] bg-amber-600/60 hover:scale-105 transition-all">
          <h2 className="text-2xl font-medium">Installation</h2>
          <p>
            Need door, window, or any household furnitures installations I'll
            make it easy for you
          </p>
        </div>
        <div>
          <img
            src={manInstalling}
            alt=""
            className="w-full h-[298px] object-cover hover:scale-105 transition-all"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatIOffer;
