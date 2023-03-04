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
      currentMonthDay:
        firstDayOfMonth.getMonth() === props.day.getMonth() &&
        firstDayOfMonth.getDate() === new Date().getDate() &&
        firstDayOfMonth.getMonth() === new Date().getMonth(),
    };

    currentDays.push(calendarDay);

    //
    //
    //
    //
    //
    //
  }

  return (
    <ul className="calendar-days flex flex-wrap">
      {currentDays.map((day: any, index: number): JSX.Element => {
        return (
          <li
            key={index}
            className={
              "pb-[69px] px-[20px] w-[calc(100%/7)] border-slate-500 border-2 text-center calendar-day" +
              (day.currentMonth ? " current" : " prev-next-month") +
              (day.currentMonthDay ? " selected" : "")
            }
          >
            <p className="pt-[5px] pb-[40px] text-right">{day.number}</p>
            <button
              className="transition assign-host-btn text-center hover:text-indigo-900"
              onClick={() => toggleModal(index)}
            >
              Assign Host
            </button>
            {modal === index && (
              <div className="bg-gray-900/[0.8] fixed w-[100%] z-[1010] h-[100%] top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] flex justify-center items-center">
                <ul className="max-w-[320px] w-[320px]">
                  {hosts.map((host: string, index: number) => {
                    return (
                      <li key={index}>
                        <button
                          className="text-gray-300 bg-indigo-900 py-[8px] px-[12px] border-indigo-900 border-2 hover:bg-gray-900 rounded-md transition mb-[20px]"
                          value={host}
                          onClick={assignHost}
                        >
                          {host}
                        </button>
                      </li>
                    );
                  })}
                  <li>
                    <button
                      className="text-gray-300 bg-indigo-900 py-[8px] px-[12px] border-indigo-900 border-2 hover:bg-gray-900 rounded-md transition"
                      onClick={assignAlternateHost}
                    >
                      Alternate
                    </button>
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
