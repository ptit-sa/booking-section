import React, { useState } from "react";

import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";
import DataPicker from "../components/DataPicker";
import { STABLES } from "../api/Booking1_data";
export default function Booking1() {
  const [ selectedLocation, setSelectedLocation ] = useState(1);

  const navigate = useNavigate();
  const orderId = useSelector((state) => state.order.id);
  const handleNext = () => {
    navigate(`/${orderId}/booking2`);
  };

  return (
    <div className="min-h-screen flex justify-start flex-col p-3 ">
      <h1 className="text-center text-2xl text-prim font-bold mt-2">
        {" "}
        Location and Date
      </h1>
      <ul class="steps mt-4">
        <li class="step step-primary" />
        <li class="step " />
        <li class="step" />
      </ul>
      <div className="flex-col mt-5 gap-3">
        <div className="flex flex-row justify-between items-center">
          <span className="text-lg font-bold">Location</span>
        </div>
        <div className="  overflow-x-auto flex flex-row mt-4 gap-2  bg-white">
          {STABLES.map((item, index) => (
            <div
              className="flex items-start rounded-2xl justify-end w-[45%] h-56 md:h-72 bg-base-100 flex-shrink-0 text-white relative z-10 cursor-pointer"
              key={index}
              style={{
                backgroundImage: `url(${item.image}) `,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              onClick={() => setSelectedLocation(item.id)}
            >
              <div
                className={`w-full h-full flex flex-col justify-end items-start  ${item.id ===
                selectedLocation
                  ? ""
                  : "backdrop-grayscale"} `}
              >
                <div className="flex-col justify-end  z-30 p-2  m-2">
                  <h2 className="w-full text-white font-bold">{item.name}</h2>
                  <div className="flex flex-row items-center gap-2">
                    <ion-icon name="location-outline" size={20} />
                    <p className="w-full text-white ">{item.city}</p>
                  </div>
                </div>
              </div>
              <div className="bg-black opacity-20 w-full h-full top-0 left-0 bottom-0 right-0 absolute z-20 rounded-2xl" />
              <div
                className={` w-full h-full top-0 left-0 bottom-0 right-0 absolute z-20 rounded-2xl  items-center justify-center ${item.id ===
                selectedLocation
                  ? "flex"
                  : "hidden"} `}
              >
                <FaCheckCircle className="text-white text-3xl" />
              </div>
            </div>
          ))}
        </div>
        <DataPicker />
      </div>

      <div className="self-end absolute bottom-5 ">
        <button
          className="btn btn-primary text-white w-44 text-lg"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
