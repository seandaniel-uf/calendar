import { useStore } from "../store";
import { WeekdaysLegend } from "./WeekdaysLegend";
import { CalendarDays } from "./CalendarDays";
import { useState } from "react";

export const Months = () => {
  const months = useStore((state) => state.months);

  const [index, setIndex] = useState<number>(0);
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
        <WeekdaysLegend />
        <h2>{monthName}</h2>
        <CalendarDays day={date} />
      </section>
      <section>
        <button onClick={previousCalendar}>Previous</button>
        <button onClick={nextCalendar}>Next</button>
      </section>
    </>
  );
};
