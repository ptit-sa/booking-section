import React, { useCallback, useEffect, useMemo, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";

dayjs.extend(isoWeek);

export default function DatePicker() {
  const DAYS = useMemo(
    () => [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
    []
  );
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  const now = dayjs();
  console.log(
    "🚀 ~ file: DatePicker.js ~ line 6 ~ DatePicker ~ now",
    now.format()
  );

  const [ selectedDate, setSelectedDate ] = useState(now);
  console.log(
    "🚀 ~ file: DatePicker.js ~ line 11 ~ DatePicker ~ selectedDate",
    selectedDate
  );
  const [ selectedYear, setSelectedYear ] = useState(now.year());
  const [ selectedMonth, setSelectedMonth ] = useState(now.month());
  const [ selectedDay, setSelectedDay ] = useState(now.date());
  const [ selectedHour, setSelectedHour ] = useState(now.hour());

  const updateSelectedDay = useCallback((day) => {
    // console.log("UPDATED DAY", {
    //   selectedYear,
    //   selectedMonth,
    //   selectedDay,
    //   day,
    //   selectedHour,
    //   newDate: new Date(
    //     selectedYear,
    //     selectedMonth,
    //     selectedDay,
    //     selectedHour
    //   ),
    // });
    // let newDate = new Date(selectedYear, selectedMonth, day);
    setSelectedDay(day);
    // setSelectedDate(dayjs(newDate));
  }, []);

  const updateSelectedHour = useCallback((hour) => {
    // console.log("UPDATED HOUR", {
    //   selectedYear,
    //   selectedMonth,
    //   selectedDay,
    //   hour,
    //   newDate: new Date(selectedYear, selectedMonth, selectedDay, hour),
    // });
    // let newDate = new Date(selectedYear, selectedMonth, selectedDay, hour);
    setSelectedHour(hour);
    // setSelectedDate(dayjs(newDate));
  }, []);

  const updateSelectedMonth = (month) => {
    // let newDate = new Date(selectedYear, month, selectedDay);
    setSelectedMonth(month);
    // setSelectedDate(dayjs(newDate));
  };
  const updateSelectedYear = (year) => {
    // let newDate = new Date(year, selectedMonth, selectedDay);
    setSelectedYear(year);
    // setSelectedDate(dayjs(newDate));
  };

  useEffect(
    () => {
      // let firstDay = document.getElementById(`day${1}${selectedMonth}`);
      let selected = document.getElementById(`day${now.date()}${now.month()}`);
      let positionInsideDayPicker;
      const dayPicker = document.getElementById("dayPicker");
      if (selected) {
        positionInsideDayPicker = selected.offsetLeft;
        console.log(
          "🚀 ~ file: DatePicker.js ~ line 83 ~ DatePicker ~ positionInsideDayPicker",
          positionInsideDayPicker
        );
        dayPicker.scrollLeft = positionInsideDayPicker - 230;
      } else {
        dayPicker.scrollLeft = 0;
      }
    },
    [ selectedMonth ]
  );
  useEffect(
    () => {
      let firstHour = document.getElementById(`hour${9}${selectedDay}`);
      let selected = document.getElementById(`hour${now.hour()}${now.date()}`);
      let positionInsideHourPicker;
      const hourPicker = document.getElementById("hour-picker");
      if (selected) {
        positionInsideHourPicker = selected.offsetTop;
        console.log(
          "🚀 ~ file: DatePicker.js ~ line 83 ~ DatePicker ~ positionInsideHourPicker",
          positionInsideHourPicker
        );
        // selected.scrollIntoView({
        //   behavior: "smooth",
        //   block: "center",
        //   inline: "center",
        // });
        hourPicker.scrollTop = positionInsideHourPicker - 700;
      } else {
        hourPicker.scrollTop = 0;
      }
    },
    [ selectedDay ]
  );
  useEffect(
    () => {
      let newDate = selectedDate.date(selectedDay);
      setSelectedDate(newDate);
    },
    [ selectedDay ]
  );
  useEffect(
    () => {
      let newDate = selectedDate.hour(selectedHour);
      setSelectedDate(newDate);
    },
    [ selectedHour ]
  );
  useEffect(
    () => {
      let newDate = selectedDate.month(selectedMonth);
      setSelectedDate(newDate);
    },
    [ selectedMonth ]
  );
  useEffect(
    () => {
      let newDate = selectedDate.year(selectedYear);
      setSelectedDate(newDate);
    },
    [ selectedYear ]
  );
  useEffect(
    () => {
      console.log(
        "selectedDate changed",
        selectedDate.format("DD-MM-YYYY__ha")
      );
    },
    [ selectedDate ]
  );

  return (
    <div className="w-full mt-10 flex flex-col items-center justify-center">
      <div className="flex flex-row justify-between items-center self-start">
        <span className="text-lg font-bold">Date</span>
      </div>
      <div className="flex flex-row justify-around items-center w-full mt-4 ">
        <select
          className="select select-bordered  max-w-xs"
          onChange={(e) => updateSelectedYear(e.target.value)}
          defaultValue={selectedYear}
        >
          <option disabled>Year</option>
          <option value={2022}>2022</option>
          <option value={2023}>2023</option>
        </select>
        <select
          class="select select-bordered  max-w-xs"
          onChange={(e) => updateSelectedMonth(e.target.value)}
          defaultValue={selectedMonth}
        >
          <option disabled>Month</option>
          <option value={0}>January</option>
          <option value={1}>February</option>
          <option value={2}>March</option>
          <option value={3}>April</option>
          <option value={4}>May</option>
          <option value={5}>June</option>
          <option value={6}>July</option>
          <option value={7}>August</option>
          <option value={8}>September</option>
          <option value={9}>October</option>
          <option value={10}>November</option>
          <option value={11}>December</option>
        </select>
      </div>
      <div className="flex flex-row items-center justify-evenly w-full mt-6">
        <div className="flex flex-row items-center gap-2 text-sm">
          <span className="w-4 h-4 bg-prim rounded" />
          available
        </div>
        <div className="flex flex-row items-center gap-2 text-sm">
          <span className="w-4 h-4 bg-orange-400 rounded" />
          mostly booked
        </div>
        <div className="flex flex-row items-center gap-2 text-sm">
          <span className="w-4 h-4 bg-gray-600 rounded" />
          fully booked
        </div>
      </div>
      <div
        className=" flex flex-row overflow-x-auto w-full mt-4"
        id="dayPicker"
      >
        {Array(selectedDate.daysInMonth() || 30).fill(0).map((item, index) => (
          <div
            className={`transition ease-in-out flex flex-col items-center justify-between py-2 px-3   rounded-lg flex-shrink-0 border-gray-200 border mx-2
              ${dayjs(new Date(selectedYear, selectedMonth, index + 1)).isSame(
                selectedDate,
                "day"
              )
                ? "bg-prim"
                : ""}      
              ${dayjs(
                new Date(selectedYear, selectedMonth, index + 2)
              ).isBefore(now)
                ? "bg-gray-200 text-gray-400"
                : "text-black"} 
            `}
            key={index}
            id={`day${index}${selectedMonth}`}
            onClick={() => {
              if (
                !dayjs(
                  new Date(selectedYear, selectedMonth, index + 2)
                ).isBefore(now)
              ) {
                updateSelectedDay(index + 1);
              }
            }}
          >
            <p
              className={`${dayjs(
                new Date(selectedYear, selectedMonth, index + 1)
              ).isSame(selectedDate, "day")
                ? "text-white"
                : ""} text-sm `}
            >
              {MONTHS[selectedMonth]}
            </p>
            <p
              className={`${dayjs(
                new Date(selectedYear, selectedMonth, index + 1)
              ).isSame(selectedDate, "day")
                ? "text-white"
                : ""} text-lg font-bold `}
            >
              {index + 1}
            </p>
            <p
              className={`${dayjs(
                new Date(selectedYear, selectedMonth, index + 1)
              ).isSame(selectedDate, "day")
                ? "text-white"
                : ""} text-xs `}
            >
              {DAYS[
                dayjs(
                  new Date(selectedYear, selectedMonth, index + 1)
                ).isoWeekday()
              ] || "Sun"}
            </p>
          </div>
        ))}
      </div>
      <div
        className="flex flex-col w-max my-8 justify-start items-center gap-2 h-40  md:h-80 overflow-y-auto"
        id="hour-picker"
      >
        {Array(15).fill(0).map((hour, index) => {
          return (
            <button
              id={`hour${index + 9}${selectedDay}`}
              className={`min-w-[80vw] max-w-72 py-2 text-center rounded-xl border font-bold ease-in-out  transition
                ${dayjs(
                  new Date(selectedYear, selectedMonth, selectedDay, index + 9)
                ).isBefore(now)
                  ? "bg-gray-200 text-gray-400"
                  : " active:bg-prim active:text-white border-prim"}
                  ${dayjs(
                    new Date(
                      selectedYear,
                      selectedMonth,
                      selectedDay,
                      index + 9
                    )
                  ).isSame(selectedDate, "hour")
                    ? "bg-prim text-white"
                    : ""} 
                `}
              disabled={dayjs(
                new Date(selectedYear, selectedMonth, selectedDay, index + 9)
              ).isBefore(now)}
              onClick={() => updateSelectedHour(index + 9)}
            >
              {index + 9 >= 12 ? (
                `${index + 9 - 12 || 12} PM`
              ) : (
                `${index + 9} AM`
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
