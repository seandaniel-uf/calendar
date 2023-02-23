import { useStore } from "../store";
import { WeekdaysLegend } from "./WeekdaysLegend";
import { CalendarDays } from "./CalendarDays";
import { useState } from "react";

export const Months = () => {
  const months = useStore((state) => state.months);

  const [index, setIndex] = useState<number>(new Date().getMonth());
  const { monthName, date } = months[index];

  const previousCalendar = () => {
    index !== 0 && setIndex(index - 1);
  };

  const nextCalendar = () => {
    index !== months.length - 1 && setIndex(index + 1);
  };

  return (
    <>
      <section key={index} className="calendar">
        <h2>
          {monthName}, {date.getFullYear()}
        </h2>
        <WeekdaysLegend />
        <CalendarDays day={date} />
      </section>
      <section>
        <button onClick={previousCalendar}>Previous</button>
        <button onClick={nextCalendar}>Next</button>
      </section>
    </>
  );
};
