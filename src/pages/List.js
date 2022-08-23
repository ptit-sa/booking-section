import React, { useState } from "react";
import { useId } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { setId } from "../features/booking/orderSlice";
import { useDispatch } from "react-redux";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { STABLES } from "../api/Booking1_data";
import { upcomingEvents, previousEvents } from "../api/List_data";
import ReviewModal from "../components/ReviewModal";

export default function List() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ focusedTab, setFocusedTab ] = useState("upcoming");
  const [ activeBooking, setActiveBooking ] = useState();

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
          className={`tab tab-lg tab-bordered   w-1/2 ${focusedTab ===
          "upcoming"
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
              <button className="w-full flex justify-between items-center  border-black px-4 transition ease-in-out active:bg-gray-200 hover:bg-gray-100 my-2">
                <div className="flex flex-row items-center gap-1">
                  <img
                    src={event.location_image}
                    alt=""
                    className="w-8 h-10 object-cover rounded"
                  />
                  <div className="w-full h-full flex flex-col items-start py-2 justify-between px-2">
                    <h1 className="text-sm  font-bold ">
                      {event.location_name},{" "}
                      <span className="text-xs">{event.city}</span>
                    </h1>
                    <p className="text-xs ">{event.date}</p>
                  </div>
                </div>
                <div class="dropdown dropdown-end">
                  <label tabindex="0" class="">
                    <BiDotsHorizontalRounded className="text-2xl text-sec" />
                  </label>
                  <ul
                    tabindex="0"
                    class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <button>edit</button>
                    </li>
                    <li className="text-red-600">
                      <button>Delete</button>
                    </li>
                  </ul>
                </div>
              </button>
            ))
          ) : (
            previousEvents.map((event) => (
              <button className="w-full flex justify-between items-center  border-black px-4 transition ease-in-out active:bg-gray-200 hover:bg-gray-100 my-2">
                <div className="flex flex-row items-center gap-1">
                  <img
                    src={event.location_image}
                    alt=""
                    className="w-8 h-10 object-cover rounded"
                  />
                  <div className="w-full h-full flex flex-col items-start py-2 justify-between px-2">
                    <h1 className="text-sm  font-bold ">
                      {event.location_name},{" "}
                      <span className="text-xs">{event.city}</span>
                    </h1>
                    <p className="text-xs ">{event.date}</p>
                  </div>
                </div>
                <div class="dropdown dropdown-end">
                  <label tabIndex="0" className="">
                    <BiDotsHorizontalRounded className="text-2xl text-sec" />
                  </label>
                  <ul
                    tabindex="0"
                    class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <label
                        for="my-modal-3"
                        class="modal-button"
                        onClick={() => setActiveBooking(event)}
                      >
                        Open Coach review
                      </label>
                    </li>
                    <li className="text-red-600">
                      <button>Delete</button>
                    </li>
                  </ul>
                </div>
              </button>
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
      <ReviewModal booking={activeBooking} />
    </div>
  );
}
