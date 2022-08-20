import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { BsFillCheckSquareFill } from "react-icons/bs";

const COACHES = [
  {
    id: 1,
    name: "Ali Munir",

    image:
      "https://images.unsplash.com/photo-1550126417-c0c9e38eba50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2043&q=80",
    price: 200,
  },
  {
    id: 2,
    name: "Ali Munir",
    city: "Zamalek",
    image:
      "https://images.unsplash.com/photo-1623592291219-633d49f67131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 200,
  },
  {
    id: 3,
    name: "Ali Munir",
    city: "Zamalek",
    image:
      "https://images.unsplash.com/photo-1625910513390-a9661b6930ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    price: 200,
  },
  {
    id: 4,
    name: "Ali Munir",
    city: "Zamalek",
    image:
      "https://images.unsplash.com/photo-1604006852748-903fccbc4019?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 200,
  },
  {
    id: 5,
    name: "Ali Munir",
    city: "Zamalek",
    image:
      "https://images.unsplash.com/photo-1623592291219-633d49f67131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 200,
  },
];
const EQUIPS = [
  {
    id: 1,
    name: "Saddle",

    image:
      "https://images.unsplash.com/photo-1489670718895-e803fa0ec35a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 200,
  },
  {
    id: 2,
    name: "Helmet",

    image:
      "https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    price: 200,
  },
  {
    id: 3,
    name: "Club",

    image:
      "https://images.unsplash.com/photo-1522594557936-32b5a71420c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    price: 200,
  },
  {
    id: 4,
    name: "Saddle",

    image:
      "https://images.unsplash.com/photo-1604006852748-903fccbc4019?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 200,
  },
  {
    id: 5,
    name: "Saddle",

    image:
      "https://images.unsplash.com/photo-1623592291219-633d49f67131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 200,
  },
];
const HORSES = [
  {
    id: 1,
    name: "Auge",

    image:
      "https://images.unsplash.com/photo-1594768816441-1dd241ffaa67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    price: 200,
  },
  {
    id: 2,
    name: "Mousike",

    image:
      "https://images.unsplash.com/photo-1576183448756-b50211a9f079?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 200,
  },
  {
    id: 3,
    name: "Gymnastike",

    image:
      "https://images.unsplash.com/photo-1566068256639-2f046b164a98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 200,
  },
  {
    id: 4,
    name: "Nymphe",

    image:
      "https://images.unsplash.com/photo-1634648030313-c26ed1778b92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
    price: 200,
  },
  {
    id: 5,
    name: "Mesembria",

    image:
      "https://images.unsplash.com/photo-1623592291219-633d49f67131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    price: 200,
  },
];
export default function Booking2() {
  const [ selectedCoach, setSelectedCoach ] = useState(1);
  const [ selectedHorse, setSelectedHorse ] = useState(1);
  const [ selectedEq, setSelectedEq ] = useState([ 1 ]);
  const navigate = useNavigate();

  const handleNext = () => {};
  const updateEq = (id) => {
    //remove eq if it exists in the array or add it if it doesn't
    const newSelectedEq = selectedEq.includes(id)
      ? selectedEq.filter((eq) => eq !== id)
      : [ ...selectedEq, id ];
    setSelectedEq(newSelectedEq);
  };
  return (
    <div className="min-h-screen flex justify-start flex-col p-3 ">
      <h1 className="text-center text-2xl text-prim font-bold ">
        {" "}
        Specifications
      </h1>
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

      <div className="self-end mt-5">
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
