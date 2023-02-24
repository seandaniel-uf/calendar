import { useStore } from "../store";
import { CalendarWeekdays } from "./CalendarWeekDays";
import { CalendarDays } from "./CalendarDays";
import { useState } from "react";

export const CalendarMonths = () => {
  const CalendarMonths = useStore((state) => state.CalendarMonths);

  const [index, setIndex] = useState<number>(new Date().getMonth());
  const { monthName, date } = CalendarMonths[index];

  const previousCalendar = () => {
    index !== 0 && setIndex(index - 1);
  };

  const nextCalendar = () => {
    index !== CalendarMonths.length - 1 && setIndex(index + 1);
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
          className="bg-indigo-900 py-[8px] px-[12px] border-indigo-900 border-2 hover:bg-gray-900 rounded-md transition mr-[20px]"
          onClick={previousCalendar}
        >
          Previous
        </button>
        <button
          className="bg-indigo-900 py-[8px] px-[12px] border-indigo-900 border-2 hover:bg-gray-900 rounded-md transition"
          onClick={nextCalendar}
        >
          Next
        </button>
      </section>
      <section>
        <CalendarWeekdays />
        <CalendarDays day={date} />
      </section>
    </>
  );
};
