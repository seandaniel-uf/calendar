import { useState } from "react";
import { CalendarDays } from "./CalendarDays";
import { useStore } from "../store";

export const Calendar = (): JSX.Element => {
  const weekdays = useStore((state) => state.weekdays);
  const months = useStore((state) => state.months);
  const currentDay = useStore((state) => state.currentDay);

  return (
    <>
      <div className="calendar">
        <div className="calendar-header">
          <h1>
            {months[currentDay.getMonth()]}, {currentDay.getFullYear()}
          </h1>
        </div>
        <div className="calendar-body">
          <div className="table-header">
            {weekdays.map((weekday: string, index: number): JSX.Element => {
              return (
                <div key={index} className="weekday">
                  <p>{weekday}</p>
                </div>
              );
            })}
          </div>
        </div>
        <CalendarDays day={currentDay} />
      </div>
    </>
  );
};
