import { useStore } from "../store";

export const CalendarWeekdays = () => {
  const weekdays = useStore((state) => state.weekdays);

  return (
    <ul className="flex">
      {weekdays.map((weekday: string, index: number): JSX.Element => {
        return (
          <li
            key={index}
            className="py-[20px] w-[100%] border-slate-500 border-2 text-center"
          >
            {weekday}
          </li>
        );
      })}
    </ul>
  );
};
