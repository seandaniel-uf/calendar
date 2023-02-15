import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { useStore } from "./store";

const App = (): JSX.Element => {
  const hosts = useStore((state) => state.hosts);
  const modal = useStore((state) => state.modal);
  const toggleModal = useStore((state) => state.toggleModal);
  const assignHost = useStore((state) => state.assignHost);
  const assignAlternateHost = useStore((state) => state.assignAlternateHost);

  return (
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
      <li className="calendar-square" onClick={toggleModal}>
        <p>2</p>
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
      <li className="calendar-square" onClick={toggleModal}>
        <p>3</p>
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
  );
};

export default App;
