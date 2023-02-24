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
  CalendarMonths: [
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
    },
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
    },
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
    },
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

// import JSON, input into store

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
  weekdays: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
  CalendarMonths: [
    {
      monthName: "January",
      date: new Date(2023, 0, 1, 12, 0, 0),
    },
    {
      monthName: "February",
      date: new Date(2023, 1, 1, 12, 0, 0),
    },
    {
      monthName: "March",
      date: new Date(2023, 2, 1, 12, 0, 0),
    },
    {
      monthName: "April",
      date: new Date(2023, 3, 1, 12, 0, 0),
    },
    {
      monthName: "May",
      date: new Date(2023, 4, 1, 12, 0, 0),
    },
    {
      monthName: "June",
      date: new Date(2023, 5, 1, 12, 0, 0),
    },
    {
      monthName: "July",
      date: new Date(2023, 6, 1, 12, 0, 0),
    },
    {
      monthName: "August",
      date: new Date(2023, 7, 1, 12, 0, 0),
    },
    {
      monthName: "September",
      date: new Date(2023, 8, 1, 12, 0, 0),
    },
    {
      monthName: "October",
      date: new Date(2023, 10, 1, 12, 0, 0),
    },
    {
      monthName: "November",
      date: new Date(2023, 11, 1, 12, 0, 0),
    },
    {
      monthName: "December",
      date: new Date(2023, 12, 1, 12, 0, 0),
    },
  ],
}));
