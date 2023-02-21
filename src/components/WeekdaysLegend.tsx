import { useStore } from "../store";

export const WeekdaysLegend = () => {
  const weekdays = useStore((state) => state.weekdays);

  return (
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
  );
};
