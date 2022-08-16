import React, { useState } from "react";
const STABLES = [
  {
    id: 1,
    name: "Giza Sporting Club",
    city: "Zamalek",
    image:
      "https://images.unsplash.com/photo-1576692192914-9abed71b3ef9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2133&q=80",
  },
  {
    id: 2,
    name: "Giza Sporting Club",
    city: "Zamalek",
    image:
      "https://images.unsplash.com/photo-1594044536215-ec075882eecb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
  },
  {
    id: 3,
    name: "Giza Sporting Club",
    city: "Zamalek",
    image:
      "https://images.unsplash.com/photo-1518484233463-f6ddb68400ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    id: 4,
    name: "Giza Sporting Club",
    city: "Zamalek",
    image:
      "https://images.unsplash.com/photo-1600715189785-ac0996a2e507?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  },
  {
    id: 5,
    name: "Giza Sporting Club",
    city: "Zamalek",
    image:
      "https://images.unsplash.com/photo-1503418922972-5960b53be1d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
  },
  {
    id: 6,
    name: "Giza Sporting Club",
    city: "Zamalek",
    image:
      "https://images.unsplash.com/photo-1621635574078-c6068e1179fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];
export default function Booking1() {
  const [ selected, setSelected ] = useState(1);
  return (
    <div className="flex justify-center flex-col p-3">
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
          <span className="text-prim">View All</span>
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
              onClick={() => setSelected(item.id)}
            >
              <div
                className={`w-full h-full flex flex-col justify-end items-center  ${item.id ===
                selected
                  ? ""
                  : "backdrop-grayscale"} `}
              >
                <div className="flex-col justify-end  z-30 p-2  mb-2">
                  <h2 className="w-full text-white font-bold">{item.name}</h2>
                  <div className="flex flex-row items-center gap-2">
                    <ion-icon name="location-outline" size={20} />
                    <p className="w-full text-white ">{item.city}</p>
                  </div>
                </div>
              </div>
              <div className="bg-black opacity-20 w-full h-full top-0 left-0 bottom-0 right-0 absolute z-20 rounded-2xl" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
