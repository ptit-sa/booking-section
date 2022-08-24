import React, { useEffect, useMemo, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";

dayjs.extend(isoWeek);

export default function DataPicker() {
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
    "🚀 ~ file: DataPicker.js ~ line 6 ~ DataPicker ~ now",
    now.format()
  );
  const [ selectedDate, setSelectedDate ] = useState(now);
  console.log(
    "🚀 ~ file: DataPicker.js ~ line 11 ~ DataPicker ~ selectedDate",
    selectedDate
  );
  const [ selectedYear, setSelectedYear ] = useState(now.year());
  const [ selectedMonth, setSelectedMonth ] = useState(now.month());
  const [ selectedDay, setSelectedDay ] = useState(now.date());

  const updateSelectedDay = (day) => {
    let newDate = new Date(selectedYear, selectedMonth, day);
    setSelectedDay(day);
    setSelectedDate(dayjs(newDate));
  };
  const updateSelectedMonth = (month) => {
    let newDate = new Date(selectedYear, month, selectedDay);
    setSelectedMonth(month);
    // setSelectedDate(dayjs(newDate));
  };
  const updateSelectedYear = (year) => {
    let newDate = new Date(year, selectedMonth, selectedDay);
    setSelectedYear(year);
    // setSelectedDate(dayjs(newDate));
  };

  console.log({
    now: {
      month: now.month(),
      day: now.date(),
    },
    selectedDate: selectedDate.format("DD-MM-YYYY"),
    selectedYear,
    selectedMonth,
    selectedDay,
  });

  useEffect(
    () => {
      let selected = document.getElementById(`day${now.date()}${now.month()}`);
      let firstDay = document.getElementById(`day${1}${selectedMonth}`);
      if (selected) {
        selected.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      } else {
        firstDay.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    },
    [ selectedMonth ]
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
      <div className=" flex flex-row overflow-x-auto w-full mt-4">
        {Array(selectedDate.daysInMonth()).fill(0).map((item, index) => (
          <div
            className={`flex flex-col items-center justify-between py-2 px-3   rounded-lg flex-shrink-0 border-gray-200 border mx-2 ${dayjs(
              new Date(selectedYear, selectedMonth, index + 1)
            ).isSame(selectedDate, "day")
              ? "bg-prim"
              : ""}               ${dayjs(
              new Date(selectedYear, selectedMonth, index + 2)
            ).isBefore(now)
              ? "bg-gray-200 text-gray-400"
              : "text-black"}     `}
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
    </div>
  );
}
