import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { COACHES, HORSES, EQUIPS } from "../api/Booking2_data";
export default function Booking2() {
  const [ selectedCoach, setSelectedCoach ] = useState(1);
  const [ selectedHorse, setSelectedHorse ] = useState(1);
  const [ selectedEq, setSelectedEq ] = useState([ 1 ]);
  const navigate = useNavigate();
  const orderId = useSelector((state) => state.order.id);

  const handleNext = () => {
    navigate(`/${orderId}/pay`);
  };
  const updateEq = (id) => {
    //remove eq if it exists in the array or add it if it doesn't
    const newSelectedEq = selectedEq.includes(id)
      ? selectedEq.filter((eq) => eq !== id)
      : [ ...selectedEq, id ];
    setSelectedEq(newSelectedEq);
  };
  return (
    <div className="min-h-screen flex justify-start flex-col p-3 relative ">
      <div className="w-full  fixed top-0 left-0 z-10 flex justify-center items-center flex-row p-4 bg-white ">
        <button className="p-2 self-start " onClick={() => navigate(-1)}>
          <IoIosArrowBack className="text-2xl" />
        </button>
        <h1 className="text-center text-2xl text-prim font-bold  flex-1 pe-5">
          Specifications
        </h1>
      </div>
      <ul class="steps mt-1">
        <li class="step step-primary" />
        <li class="step step-primary" />
        <li class="step" />
      </ul>
      <div className="flex-col mt-2 gap-3">
        <div className="flex flex-row justify-between items-center">
          <span className="text-lg font-bold">Coach</span>
        </div>
        <div className="  overflow-x-auto flex flex-row mt-4 gap-2  bg-white">
          {COACHES.map((item, index) => (
            <div
              className="flex items-start rounded-2xl justify-end w-[45%] h-40 md:h-72 bg-base-100 flex-shrink-0 text-white relative z-10 cursor-pointer"
              key={index}
              style={{
                backgroundImage: `url(${item.image}) `,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              onClick={() => setSelectedCoach(item.id)}
            >
              <div
                className={`w-full h-full flex flex-col justify-end items-start  ${item.id ===
                selectedCoach
                  ? ""
                  : "backdrop-grayscale"} `}
              >
                <div className="flex-col justify-end  z-30 p-2  m-2">
                  <h2 className="w-full text-white font-bold">{item.name}</h2>
                  <div className="flex flex-row items-center gap-2">
                    <ion-icon name="location-outline" size={20} />
                    <p className="w-full text-white ">{item.city}</p>
                  </div>
                  <p className="w-full text-white ">{item.price} SAR /hr</p>
                </div>
              </div>
              <div className="bg-black opacity-20 w-full h-full top-0 left-0 bottom-0 right-0 absolute z-20 rounded-2xl" />
              <div
                className={` w-full h-full top-0 left-0 bottom-0 right-0 absolute z-20 rounded-2xl  items-center justify-center ${item.id ===
                selectedCoach
                  ? "flex"
                  : "hidden"} `}
              >
                <FaCheckCircle className="text-white text-3xl mb-10" />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* EQUIPMENTS */}
      <div className="flex-col mt-5 gap-3">
        <div className="flex flex-row justify-between items-center">
          <span className="text-lg font-bold">Equipment</span>
        </div>
        <div className="  overflow-x-auto flex flex-row mt-4 gap-2  bg-white">
          {EQUIPS.map((item, index) => (
            <div
              className="flex items-start rounded-2xl justify-end w-[45%] h-40 md:h-72 bg-base-100 flex-shrink-0 text-white relative z-10 cursor-pointer"
              key={index}
              style={{
                backgroundImage: `url(${item.image}) `,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              onClick={() => updateEq(item.id)}
            >
              <div
                className={`w-full h-full flex flex-col justify-end items-start  ${selectedEq.includes(
                  item.id
                )
                  ? ""
                  : "backdrop-grayscale"} `}
              >
                <div className="flex-col justify-end  z-30 p-2  m-2">
                  <h2 className="w-full text-white font-bold">{item.name}</h2>

                  <p className="w-full text-white ">{item.price} SAR</p>
                </div>
              </div>
              <div className="bg-black opacity-20 w-full h-full top-0 left-0 bottom-0 right-0 absolute z-20 rounded-2xl" />
              <div
                className={` w-full h-full top-0 left-0 bottom-0 right-0 absolute z-20 rounded-2xl  items-center justify-center ${selectedEq.includes(
                  item.id
                )
                  ? "flex"
                  : "hidden"} `}
              >
                <BsFillCheckSquareFill className="text-white text-3xl " />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Horses */}
      <div className="flex-col mt-5 gap-3">
        <div className="flex flex-row justify-between items-center">
          <span className="text-lg font-bold">Horse</span>
        </div>
        <div className="  overflow-x-auto flex flex-row mt-4 gap-2  bg-white">
          {HORSES.map((item, index) => (
            <div
              className="flex items-start rounded-2xl justify-end w-[45%] h-40 md:h-72 bg-base-100 flex-shrink-0 text-white relative z-10 cursor-pointer"
              key={index}
              style={{
                backgroundImage: `url(${item.image}) `,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              onClick={() => setSelectedHorse(item.id)}
            >
              <div
                className={`w-full h-full flex flex-col justify-end items-start  ${item.id ===
                selectedHorse
                  ? ""
                  : "backdrop-grayscale"} `}
              >
                <div className="flex-col justify-end  z-30 p-2  m-2">
                  <h2 className="w-full text-white font-bold">{item.name}</h2>

                  <p className="w-full text-white ">{item.price} SAR /hr</p>
                </div>
              </div>
              <div className="bg-black opacity-20 w-full h-full top-0 left-0 bottom-0 right-0 absolute z-20 rounded-2xl" />
              <div
                className={` w-full h-full top-0 left-0 bottom-0 right-0 absolute z-20 rounded-2xl  items-center justify-center ${item.id ===
                selectedHorse
                  ? "flex"
                  : "hidden"} `}
              >
                <FaCheckCircle className="text-white text-3xl" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <button
          className="btn btn-primary text-white w-full  text-lg"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
