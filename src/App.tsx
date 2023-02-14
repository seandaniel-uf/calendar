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
  const alternateHost = useStore((state) => state.alternateHost);

  return (
    <ul>
      <li onClick={toggleModal}>
        <button>1</button>
        {modal && (
          <div className="modal-underlay">
            <ul className="modal">
              {hosts.map((host) => {
                return (
                  <button value={host} onClick={assignHost}>
                    {host}
                  </button>
                );
              })}
              <button onClick={assignAlternateHost}>Alternate</button>
            </ul>
          </div>
        )}
      </li>
      <li>
        <button>2</button>
      </li>
      <li>
        <button>3</button>
      </li>
    </ul>
  );
};

export default App;
