import React from "react";
import { ImLocation } from "react-icons/im";
import { BiPhoneCall } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MyLocation.css";

const MyLocation = () => {
  const position = [23.783869481071843, 90.42607841790681];
  return (
    <div className="min-h-min bg-woodDark text-white">
      <div className="grid grid-cols-1  md:grid-cols-11 ">
        {/* Text Section */}
        <div className="md:col-span-4 flex flex-col justify-center items-center p-10">
          <h2 className="text-3xl font-bold mb-10">Contact Info</h2>
          <div className="flex flex-col md:text-lg gap-2">
            <div className="flex items-center gap-2">
              <ImLocation className="text-xl" />
              <p>Road 105, North Badda, Dhaka - 1212</p>
            </div>
            <div className="flex items-center gap-2">
              <BiPhoneCall className="text-xl" />
              <p>(+880) 1980-728221</p>
            </div>
            <div className="flex items-center gap-2">
              <GrMail className="text-xl" />
              <p>rubel.hossain0649@gmail.com</p>
            </div>
          </div>
        </div>
        {/* Maps section */}
        <div className="md:col-span-7">
          <MapContainer center={position} zoom={17} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                Rifat's Carpentry <br /> Get your job done.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default MyLocation;
