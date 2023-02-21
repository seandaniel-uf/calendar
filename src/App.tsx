import "./App.css";
import { Months } from "./components/Months";

const App = (): JSX.Element => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Months />
    </>
  );
};

export default App;
