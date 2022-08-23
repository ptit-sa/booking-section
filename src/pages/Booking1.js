import React, { useState } from "react";

import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";
const STABLES = [
  {
    id: 1,
    name: "Al Ula Desert",
    city: "Al Ula",
    image: "https://iili.io/r0LA7e.md.jpg",
  },
  {
    id: 2,
    name: "Nofa Riyadh",
    city: "Exit 857, Riyadh Makkah Highway",
    image: "https://iili.io/r0Lu29.jpg",
  },
  {
    id: 3,
    name: "Dirab Golf & Country Club",
    city: "Riyadh",
    image: "https://iili.io/r0LIr7.jpg",
  },
  {
    id: 4,
    name: "Sporting Club",
    city: "Riyadh",
    image:
      "https://images.unsplash.com/photo-1600715189785-ac0996a2e507?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  },
  {
    id: 5,
    name: "Sporting Club",
    city: "Jeddah",
    image:
      "https://images.unsplash.com/photo-1503418922972-5960b53be1d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
  },
  {
    id: 6,
    name: "Sporting Club",
    city: "Mecca",
    image:
      "https://images.unsplash.com/photo-1621635574078-c6068e1179fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];
export default function Booking1() {
  const [ selectedLocation, setSelectedLocation ] = useState(1);
  const [ selectedDate, setSelectedDate ] = useState(new Date());
  const [ selectedYear, setSelectedYear ] = useState(new Date().getFullYear());
  const [ selectedMonth, setSelectedMonth ] = useState(new Date().getMonth());
  const [ selectedDay, setSelectedDay ] = useState(new Date().getDate());
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
        <div className="w-full mt-10 flex flex-col items-center justify-center">
          <div className="flex flex-row justify-between items-center self-start">
            <span className="text-lg font-bold">Date</span>
          </div>
          <div className="flex flex-row justify-around items-center w-full ">
            <select class="select select-bordered  max-w-xs">
              <option disabled selected>
                Year
              </option>
              <option>2022</option>
              <option>2023</option>
            </select>
            <select class="select select-bordered  max-w-xs">
              <option disabled selected>
                Month
              </option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
          </div>
          <div className=" flex flex-row overflow-x-auto w-full mt-4">
            {Array(31).fill(0).map((item, index) => (
              <span
                className={`flex items-center justify-center p-1 w-10 rounded-lg flex-shrink-0 ${index +
                  1 ===
                selectedDate.getDate()
                  ? "bg-primary"
                  : ""}`}
                key={index}
                onClick={() =>
                  setSelectedDate(
                    new Date(selectedYear, selectedMonth, index + 1)
                  )}
              >
                <p
                  className={`${index + 1 === selectedDate.getDate()
                    ? "text-white"
                    : "text-black"} text-lg `}
                >
                  {index + 1}
                </p>
              </span>
            ))}
          </div>
        </div>
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
