import React from "react";
import { create } from "zustand";

interface StoreState {
  hosts: string[];
  modal: boolean;
  toggleModal: () => void;
  assignHost: (e: React.MouseEvent<HTMLButtonElement>) => void;
  assignAlternateHost: () => void;
  alternateHost: string;
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
  toggleModal: () =>
    set((state) => ({
      modal: !state.modal,
    })),
  // assignHost param/argument?
  assignHost: (e: any) => {
    const hostAssigned = e.target.value;
    e.target.parentElement.parentElement.previousElementSibling.innerText =
      hostAssigned;
  },
  // assignAlternateHost param/argument?
  assignAlternateHost: () => {},
}));
// open modal function
// set name function
// alternate function
