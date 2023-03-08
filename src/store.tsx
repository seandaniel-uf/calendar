import React from "react";
import { create } from "zustand";

interface StoreState {
  // hosts
  hosts: string[];
  modalIndex: number;
  modalOpen: boolean;
  host: string;
  alternateHost: string;
  toggleModal: (index: number) => void;
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
  // non value in mapping of numbers
  modalIndex: -1,
  modalOpen: false,
  host: "",
  alternateHost: "",
  toggleModal: (index) => {
    set({
      modalIndex: index,
      modalOpen: true,
    });
  },

  // assignHost param/argument for value, not event
  assignHost: (e: any) => {
    set({
      host: e.target.value,
      modalOpen: false,
    });
  },
  // assignHost param/argument for value, not event
  // what does this return if we are assigning state
  assignAlternateHost: (e: any): void => {
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
      modalOpen: false,
    });

    e.target.parentElement.parentElement.parentElement.previousElementSibling.innerText =
      get().alternateHost;
  },
  // calendar
  weekdays: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
  CalendarMonths: [
    {
      monthName: "January",
      date: new Date(new Date().getFullYear(), 0, 1, 12, 0, 0),
    },
    {
      monthName: "February",
      date: new Date(new Date().getFullYear(), 1, 1, 12, 0, 0),
    },
    {
      monthName: "March",
      date: new Date(new Date().getFullYear(), 2, 1, 12, 0, 0),
    },
    {
      monthName: "April",
      date: new Date(new Date().getFullYear(), 3, 1, 12, 0, 0),
    },
    {
      monthName: "May",
      date: new Date(new Date().getFullYear(), 4, 1, 12, 0, 0),
    },
    {
      monthName: "June",
      date: new Date(new Date().getFullYear(), 5, 1, 12, 0, 0),
    },
    {
      monthName: "July",
      date: new Date(new Date().getFullYear(), 6, 1, 12, 0, 0),
    },
    {
      monthName: "August",
      date: new Date(new Date().getFullYear(), 7, 1, 12, 0, 0),
    },
    {
      monthName: "September",
      date: new Date(new Date().getFullYear(), 8, 1, 12, 0, 0),
    },
    {
      monthName: "October",
      date: new Date(new Date().getFullYear(), 9, 1, 12, 0, 0),
    },
    {
      monthName: "November",
      date: new Date(new Date().getFullYear(), 10, 1, 12, 0, 0),
    },
    {
      monthName: "December",
      date: new Date(new Date().getFullYear(), 11, 1, 12, 0, 0),
    },
  ],
}));
