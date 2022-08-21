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
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2 items-center flex-wrap">
              <div className="flex flex-row gap-1 items-center">
                <ImLocation className="text-sm text-prim" />
                <p className="text-xs font-bold">location:</p>
              </div>
              <p className="text-sm">Giza Sporting Club, Zamalek</p>
            </div>
            <p className="text-sm font-bold ">
              200 <span className="text-2xs ">SAR</span>
            </p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2 items-center flex-wrap">
              <div className="flex flex-row gap-1 items-center">
                <BsCalendarWeekFill className="text-sm text-prim" />
                <p className="text-xs font-bold">Date:</p>
              </div>
              <p className="text-sm">2022, Aug 21st, 6:00 pm</p>
            </div>
            <p className="text-sm font-bold ">
              200 <span className="text-2xs ">SAR</span>
            </p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2 items-center flex-wrap">
              <div className="flex flex-row gap-1 items-center">
                <MdOutlineSports className="text-sm text-prim" />
                <p className="text-xs font-bold">Coach:</p>
              </div>
              <p className="text-sm">Ali Munir</p>
            </div>
            <p className="text-sm font-bold ">
              200 <span className="text-2xs ">SAR</span>
            </p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2 items-center flex-wrap">
              <div className="flex flex-row gap-1 items-center">
                <FaHorseHead className="text-sm text-prim" />
                <p className="text-xs font-bold">Horse:</p>
              </div>
              <p className="text-sm">Gemanistica</p>
            </div>
            <p className="text-sm font-bold ">
              200 <span className="text-2xs ">SAR</span>
            </p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2 items-center flex-wrap">
              <div className="flex flex-row gap-1 items-center">
                <MdSportsMotorsports className="text-sm text-prim" />
                <p className="text-xs font-bold">Equipment:</p>
              </div>
              <p className="text-sm">Helmet, Club</p>
            </div>
            <p className="text-sm font-bold ">
              400 <span className="text-2xs ">SAR</span>
            </p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2 items-center flex-wrap">
              <div className="flex flex-row gap-1 items-center">
                <p className="text-lg font-bold">Total</p>
              </div>
            </div>
            <p className="text-lg font-bold ">
              400 <span className="text-xs ">SAR</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
