import { useStore } from "../store";
import { CalendarWeekdays } from "./CalendarWeekDays";
import { CalendarDays } from "./CalendarDays";
import { useState } from "react";

export const CalendarMonths = () => {
  const CalendarMonths = useStore((state) => state.CalendarMonths);

  const [index, setIndex] = useState<number>(new Date().getMonth());
  const { monthName, date } = CalendarMonths[index];
  //
  return (
    <>
      <header className="py-[40px]">
        <h1 className="text-4xl">
          ✨ Phoenix Standup Calendar - {monthName}, {date.getFullYear()}
        </h1>
      </header>
      <section className="pb-[40px]">
        <button
          disabled={index !== 0 ? false : true}
          className="bg-indigo-900 py-[8px] px-[12px] border-indigo-900 border-2 hover:bg-gray-900 rounded-md transition disabled:bg-gray-900 disabled:opacity-50 mr-[20px]"
          onClick={() => setIndex(index - 1)}
        >
          Previous
        </button>
        <button
          disabled={index === CalendarMonths.length - 1 ? true : false}
          className="bg-indigo-900 py-[8px] px-[12px] border-indigo-900 border-2 hover:bg-gray-900 rounded-md disabled:bg-gray-900 disabled:opacity-50 transition"
          onClick={() => setIndex(index + 1)}
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
