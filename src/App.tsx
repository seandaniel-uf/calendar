import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Calendar } from "./Calendar";

import { useStore } from "./store";

const App = (): JSX.Element => {
  const hosts = useStore((state) => state.hosts);
  const modal = useStore((state) => state.modal);
  const toggleModal = useStore((state) => state.toggleModal);
  const assignHost = useStore((state) => state.assignHost);
  const assignAlternateHost = useStore((state) => state.assignAlternateHost);

  return (
    <>
      <h1>January</h1>
      <ul>
        <li className="calendar-square" onClick={toggleModal}>
          <p>1</p>
          <button></button>
          {modal && (
            <div className="modal-underlay">
              <ul className="modal">
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
      </ul>
      <Calendar />
    </>
  );
};

export default App;
