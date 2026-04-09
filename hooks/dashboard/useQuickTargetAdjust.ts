"use client"

import { useState, useRef, useEffect } from "react";
import statesData from "@/data/states.json";

export interface State {
  name: string;
  code: string;
}

export const useQuickTargetAdjust = () => {
  const [selectedState, setSelectedState] = useState<State>(statesData.states[0]);
  console.log("selectedState",selectedState)
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [target, setTarget] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Handle input - only numbers allowed
  const handleInputChange = (value: string) => {
    const numericValue = value.replace(/\D/g, "");
    setTarget(numericValue);
  };

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Select state
  const handleSelectState = (state: State) => {
    setSelectedState(state);
    setIsOpen(false);
  };

  // Update target
  const handleUpdateTarget = () => {
    if (!target) {
      console.warn("Please enter a target value");
      return;
    }

    console.log("Update clicked", {
      state: selectedState,
      target: parseInt(target, 10),
    });

    // Reset or handle success
    setTarget("");
  };

  return {
    selectedState,
    isOpen,
    target,
    dropdownRef,
    states: statesData.states,
    handleInputChange,
    toggleDropdown,
    handleSelectState,
    handleUpdateTarget,
  };
};