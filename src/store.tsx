import React from "react";
import { create } from "zustand";

interface StoreState {
  hosts: string[];
  modal: boolean;
  host: string;
  alternateHost: string;
  toggleModal: () => void;
  assignHost: (e: React.MouseEvent<HTMLButtonElement>) => void;
  assignAlternateHost: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const useStore = create<StoreState>((set, get) => ({
  hosts: [
    "Sean",
    "Larsen",
    "Sahib",
    "Toufic",
    "Francis",
    "Shareeza",
    "No Standup",
  ],
  modal: false,
  host: "",
  alternateHost: "",
  toggleModal: () =>
    set((state) => ({
      modal: !state.modal,
    })),
  // assignHost param/argument?
  assignHost: (e: any) => {
    set({
      host: e.target.value,
    });

    e.target.parentElement.parentElement.parentElement.previousElementSibling.innerText =
      get().host;
  },
  assignAlternateHost: (e: any) => {
    // remove "No Standup" from alternate, no duplicate if host is already assigned, no duplicate if alternateHost is already assigned
    const alternateHostArray = get().hosts.filter((string: string): boolean => {
      return (
        string !== "No Standup" &&
        string !== get().host &&
        string !== get().alternateHost
      );
    });

    set({
      alternateHost:
        alternateHostArray[
          Math.floor(Math.random() * alternateHostArray.length)
        ],
    });

    console.log(get().alternateHost);

    e.target.parentElement.parentElement.parentElement.previousElementSibling.innerText =
      get().alternateHost;
  },
}));
