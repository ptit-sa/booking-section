import React from "react";
import { ImLocation } from "react-icons/im";
import { BsCalendarWeekFill } from "react-icons/bs";
import { MdOutlineSports } from "react-icons/md";
import { MdSportsMotorsports } from "react-icons/md";
import { FaHorseHead } from "react-icons/fa";

export default function Pay() {
  return (
    <div className="min-h-screen flex justify-start flex-col p-3 ">
      <h1 className="text-center text-2xl text-prim font-bold mt-2">Payment</h1>
      <ul className="steps mt-4 text-white ">
        <li className="step  step-primary" />
        <li className="step step-primary" />
        <li className="step step-primary" />
      </ul>
      <div className="flex flex-col gap-4 mt-7 ">
        <h1 className="text-xl font-bold">Booking Details</h1>
        <div className="flex flex-col gap-3 bg-gray-200 p-5 rounded-2xl">
          <div className="flex flex-row gap-2 items-center flex-wrap">
            <div className="flex flex-row gap-1">
              <ImLocation className="text-lg text-prim" />
              <p className="text-sm font-semibold">location:</p>
            </div>
            <p>Giza Sporting Club, Zamalek</p>
          </div>
          <div className="flex flex-row gap-2 items-center flex-wrap">
            <div className="flex flex-row gap-1">
              <BsCalendarWeekFill className="text-lg text-prim" />
              <p className="text-sm font-semibold">Date:</p>
            </div>
            <p>2022, Aug 21st, 6:00 pm</p>
          </div>
          <div className="flex flex-row gap-2 items-center flex-wrap">
            <div className="flex flex-row gap-1">
              <MdOutlineSports className="text-lg text-prim" />
              <p className="text-sm font-semibold">Coach:</p>
            </div>
            <p>Ali Munir</p>
          </div>
          <div className="flex flex-row gap-2 items-center flex-wrap">
            <div className="flex flex-row gap-1">
              <FaHorseHead className="text-lg text-prim" />
              <p className="text-sm font-semibold">Horse:</p>
            </div>
            <p>Gemanistica</p>
          </div>
          <div className="flex flex-row gap-2 items-center flex-wrap">
            <div className="flex flex-row gap-1">
              <MdSportsMotorsports className="text-lg text-prim" />
              <p className="text-sm font-semibold">Equipment:</p>
            </div>
            <p>Helmet, Club</p>
          </div>
        </div>
      </div>
    </div>
  );
}
