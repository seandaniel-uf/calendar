import { useStore } from "../store";
import { CalendarWeekdays } from "./CalendarWeekDays";
import { CalendarDays } from "./CalendarDays";
import { useState, useEffect } from "react";

export const CalendarMonths = () => {
  const CalendarMonths = useStore((state) => state.CalendarMonths);

  const [index, setIndex] = useState<number>(new Date().getMonth());
  const { monthName, date } = CalendarMonths[index];

  // what to make e.target
  const previousCalendar = (e: any): void => {
    if (index !== 0) {
      e.target.disabled = false;
      setIndex(index - 1);
    } else {
      e.target.disabled = true;
    }
  };

  // what to make e.target
  const nextCalendar = (e: any): void => {
    if (index !== CalendarMonths.length - 1) {
      setIndex(index + 1);
    } else {
      e.target.disabled = true;
    }
  };

  return (
    <>
      <header className="py-[40px]">
        <h1 className="text-4xl">
          ✨ Phoenix Standup Calendar - {monthName}, {date.getFullYear()}
        </h1>
      </header>
      <section className="pb-[40px]">
        <button
          className="bg-indigo-900 py-[8px] px-[12px] border-indigo-900 border-2 hover:bg-gray-900 rounded-md transition disabled:bg-gray-900 disabled:opacity-50 mr-[20px]"
          onClick={(e) => previousCalendar(e)}
        >
          Previous
        </button>
        <button
          className="bg-indigo-900 py-[8px] px-[12px] border-indigo-900 border-2 hover:bg-gray-900 rounded-md disabled:bg-gray-900 disabled:opacity-50 transition"
          onClick={(e) => nextCalendar(e)}
        >
          Next
        </button>
      </section>
      <section className="border-2 border-slate-500">
        <CalendarWeekdays />
        <CalendarDays day={date} />
      </section>
    </>
  );
};
