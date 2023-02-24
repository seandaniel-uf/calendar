import { useStore } from "../store";

export const CalendarDays = (props: any): JSX.Element => {
  const hosts = useStore((state) => state.hosts);
  const modal = useStore((state) => state.modal);
  const toggleModal = useStore((state) => state.toggleModal);
  const assignHost = useStore((state) => state.assignHost);
  const assignAlternateHost = useStore((state) => state.assignAlternateHost);

  let firstDayOfMonth = new Date(
    props.day.getFullYear(),
    props.day.getMonth(),
    1
  );

  let weekdayOfFirstDay = firstDayOfMonth.getDay();
  let currentDays = [];

  for (let day = 0; day < 42; day++) {
    if (day === 0 && weekdayOfFirstDay === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
    } else if (day === 0) {
      firstDayOfMonth.setDate(
        firstDayOfMonth.getDate() + (day - weekdayOfFirstDay)
      );
    } else {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    }

    let calendarDay = {
      currentMonth: firstDayOfMonth.getMonth() === props.day.getMonth(),
      date: new Date(firstDayOfMonth),
      month: firstDayOfMonth.getMonth(),
      number: firstDayOfMonth.getDate(),
      selected: firstDayOfMonth.toDateString() === props.day.toDateString(),
      year: firstDayOfMonth.getFullYear(),
      // if current month and current day of the year === current date
      currentMonthDay:
        firstDayOfMonth.getMonth() === props.day.getMonth() &&
        firstDayOfMonth.getDate() === new Date().getDate(),
    };

    currentDays.push(calendarDay);
  }

  return (
    <ul className="flex flex-wrap">
      {currentDays.map((day: any, index: number): JSX.Element => {
        return (
          <li
            key={index}
            className={
              "pb-[69px] px-[20px] w-[calc(100%/7)] border-slate-500 border-2 text-center calendar-day" +
              (day.currentMonth ? " current" : "") +
              (day.currentMonthDay ? " selected" : "")
            }
          >
            <p className="pt-[5px] pb-[40px] text-right">{day.number}</p>
            <button className="text-center" onClick={toggleModal}>
              Assign Host
            </button>
            {modal && (
              <div>
                <ul>
                  {hosts.map((host: string, index: number) => {
                    return (
                      <li key={index}>
                        <button value={host} onClick={assignHost}>
                          {host}
                        </button>
                      </li>
                    );
                  })}
                  <li>
                    <button onClick={assignAlternateHost}>Alternate</button>
                  </li>
                </ul>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};
