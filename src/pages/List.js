import React from "react";
import { useId } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
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
];

export default function List() {
  const navigate = useNavigate();

  const handleNewEvent = () => {
    let id = uuidv4();
    navigate(`/${id}/booking1`);
  };
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="flex justify-evenly items-center font-bold ">
        <div className="w-1/2 h-10 bg-prim items-center justify-center ">
          <h1 className="text-lg h-full text-white text-center flex items-center justify-center">
            Upcoming
          </h1>
        </div>
        <div className="w-1/2 h-10 bg-prim border-l-2 border-black ">
          <h1 className="text-lg h-full text-white text-center flex items-center justify-center">
            Previous
          </h1>
        </div>
      </div>
      <div className="w-full h-full flex justify-evenly items-center ">
        <div className="min-h-full overflow-scroll w-1/2  items-center justify-center pt-4">
          {upcomingEvents.map((event) => (
            <div className=" flex justify-between items-center  border-black">
              <div className="w-full h-full flex justify-center items-center py-2">
                <h1 className="w-full text-lg text-center">{event.title}</h1>
              </div>
            </div>
          ))}
        </div>
        <div className="min-h-full overflow-scroll w-1/2   items-center justify-center pt-4 border-l border-black">
          {previousEvents.map((event) => (
            <div className=" flex justify-between items-center  border-black">
              <div className="w-full h-full flex justify-center items-center py-2">
                <h1 className="w-full text-lg text-center">{event.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="sticky bottom-0 left-50 right-50 w-full bg-prim h-10 text-white flex items-center justify-center text-xl rounded-t-2xl font-bold"
        onClick={handleNewEvent}
      >
        + New
      </div>
    </div>
  );
}