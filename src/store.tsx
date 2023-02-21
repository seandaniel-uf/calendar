import React from "react";
import { create } from "zustand";

interface StoreState {
  // hosts
  hosts: string[];
  modal: boolean;
  host: string;
  alternateHost: string;
  toggleModal: () => void;
  assignHost: (e: React.MouseEvent<HTMLButtonElement>) => void;
  assignAlternateHost: (e: React.MouseEvent<HTMLButtonElement>) => void;
  // calendar
  weekdays: string[];
  months: [
    {
      monthName: string;
      date: Date;
    },
    {
      monthName: string;
      date: Date;
    },
    {
      monthName: string;
      date: Date;
    }
  ];
}

export const useStore = create<StoreState>((set, get) => ({
  // hosts
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
  toggleModal: () => {
    set((state) => ({
      modal: !state.modal,
    }));
  },
  // assignHost param/argument for value, not event
  assignHost: (e: any) => {
    set({
      host: e.target.value,
    });

    e.target.parentElement.parentElement.parentElement.previousElementSibling.innerText =
      get().host;
  },
  // assignHost param/argument for value, not event
  // what does this return if we are assigning state
  assignAlternateHost: (e: any): void => {
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

    e.target.parentElement.parentElement.parentElement.previousElementSibling.innerText =
      get().alternateHost;
  },
  // calendar
  weekdays: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  months: [
    {
      monthName: "January",
      date: new Date(2023, 0o0, 0o1, 12, 0o0, 0o0),
    },
    {
      monthName: "February",
      date: new Date(2023, 0o1, 0o1, 12, 0o0, 0o0),
    },
    {
      monthName: "March",
      date: new Date(2023, 0o2, 0o1, 12, 0o0, 0o0),
    },
  ],
}));
