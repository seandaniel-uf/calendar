import { useState } from "react";

interface Calendar {
  weekdays: string[];
  months: string[];
  currentDate: string;
}

export const Calendar = (): JSX.Element => {
  const [calendarState, setCalendarState] = useState<Calendar>({
    weekdays: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    currentDate: `${(new Date().getMonth(), new Date().getFullYear())}`,
  });

  {
    console.log(calendarState.currentDate);
  }
  return (
    <>
      <div className="calendar">
        <div className="calendar-header">
          <h2>{calendarState.currentDate}</h2>
        </div>
      </div>
    </>
  );
};
