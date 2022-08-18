import React, { useState } from "react";
import { useId } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { setId } from "../features/booking/orderSlice";
import { useDispatch } from "react-redux";
import { BsCalendar3 } from "react-icons/bs";
const upcomingEvents = [
  {
    id: 1,
    title: "Event 1",
    description: "This is event 1",
    date: "2020-01-01",
    time: "12:00",
  },
  {
    id: 2,
    title: "Event 2",
    description: "This is event 2",
    date: "2020-01-02",
    time: "12:00",
  },
  {
    id: 3,
    title: "Event 3",
    description: "This is event 3",
    date: "2020-01-03",
    time: "12:00",
  },
  {
    id: 4,
    title: "Event 4",
    description: "This is event 4",
    date: "2020-01-04",
    time: "12:00",
  },
  {
    id: 5,
    title: "Event 5",
    description: "This is event 5",
    date: "2020-01-05",
    time: "12:00",
  },
  {
    id: 6,
    title: "Event 6",
    description: "This is event 6",
    date: "2020-01-06",
    time: "12:00",
  },
];
const previousEvents = [
  {
    id: 1,
    title: "Previous Event 1",
    description: "This is Previous event 1",
    date: "2020-01-01",
    time: "12:00",
  },
  {
    id: 2,
    title: "Previous Event 2",
    description: "This is Previous event 2",
    date: "2020-01-02",
    time: "12:00",
  },
  {
    id: 3,
    title: "Previous Event 3",
    description: "This is Previous event 3",
    date: "2020-01-03",
    time: "12:00",
  },
  {
    id: 4,
    title: "Previous Event 4",
    description: "This is Previous event 4",
    date: "2020-01-04",
    time: "12:00",
  },
  {
    id: 5,
    title: "Previous Event 5",
    description: "This is Previous event 5",
    date: "2020-01-05",
    time: "12:00",
  },
];

export default function List() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ focusedTab, setFocusedTab ] = useState("upcoming");
  const handleNewEvent = () => {
    let id = uuidv4();
    dispatch(setId(id));
    navigate(`/${id}/booking1`);
  };
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="flex flex-col gap-2 justify-center h-3/12 py-10 px-10">
        <div className="flex flex-row gap-2">
          <h1 className="text-xl font-bold">My Bookings</h1>
        </div>
        <p className="font-semibold">
          Manage all your bookings or create new ones!
        </p>
      </div>
      <div className="tabs w-full">
        <button
          className={`tab tab-lg tab-bordered  w-1/2 ${focusedTab === "upcoming"
            ? "tab-active"
            : ""}`}
          onClick={() => setFocusedTab("upcoming")}
        >
          Upcoming
        </button>
        <button
          className={`tab tab-lg tab-bordered  w-1/2 ${focusedTab === "previous"
            ? "tab-active"
            : ""}`}
          onClick={() => setFocusedTab("previous")}
        >
          Previous
        </button>
      </div>
      <div className="w-full h-full flex justify-evenly items-center ">
        <div className="min-h-full overflow-scroll w-full  items-center justify-center pt-4">
          {focusedTab === "upcoming" ? (
            upcomingEvents.map((event) => (
              <div className=" flex justify-around items-center  border-black px-2">
                <div className="w-full h-full flex flex-col items-start py-2 justify-between px-4">
                  <h1 className="text-lg  font-bold ">{event.title}</h1>
                  <p>{event.date}</p>
                </div>
                <BsCalendar3 className="text-2xl" />
              </div>
            ))
          ) : (
            previousEvents.map((event) => (
              <div className=" flex justify-around items-center  border-black px-2">
                <div className="w-full h-full flex flex-col items-start py-2 justify-between px-4">
                  <h1 className="text-lg  font-bold ">{event.title}</h1>
                  <p>{event.date}</p>
                </div>
                <BsCalendar3 className="text-2xl" />
              </div>
            ))
          )}
        </div>
      </div>

      <div className="p-4 self-end mt-5 w-full  flex justify-center items-center">
        <button
          className="btn btn-primary text-white w-44 text-lg"
          onClick={handleNewEvent}
        >
          + New
        </button>
      </div>
    </div>
  );
}
