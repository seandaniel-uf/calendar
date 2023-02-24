import "./index.css";
import { CalendarMonths } from "./components/CalendarMonths";

const App = (): JSX.Element => {
  return (
    <main className="bg-gray-900">
      <div className="m-auto w-[95%] max-w-[95%]">
        <CalendarMonths />
      </div>
    </main>
  );
};

export default App;
