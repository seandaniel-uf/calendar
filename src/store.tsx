import React from "react";
import { create } from "zustand";

interface StoreState {
  // hosts
  hosts: string[];
  modal: boolean;
  host: string;
  alternateHost: string;
  toggleModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
  assignHost: (e: React.MouseEvent<HTMLButtonElement>) => void;
  assignAlternateHost: (e: React.MouseEvent<HTMLButtonElement>) => void;
  // calendar
  weekdays: string[];
  months: string[];
  currentDay: any;
  changeCurrentDay: (day: any) => void;
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
  toggleModal: (e: any) => {
    set((state) => ({
      modal: !state.modal,
    })),
      e.stopPropagation();
  },
  // assignHost param/argument, do I need to assign this again?
  assignHost: (e: any) => {
    set({
      host: e.target.value,
    });

    e.target.parentElement.parentElement.parentElement.previousElementSibling.innerText =
      get().host;
  },
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
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  currentDay: new Date(),
  // type param necessary?
  changeCurrentDay: (day: any): void => {
    set((state) => ({
      ...state,
      currentDay: new Date(day.year, day.month, day.number),
    }));
  },
}));
