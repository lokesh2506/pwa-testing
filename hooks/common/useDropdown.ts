"use client"
import { useEffect, useRef, useState } from "react";
import { DropdownOption } from "@/types/common/dropdown";

export const useDropdown = (options: DropdownOption[]) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<DropdownOption>(options[0]);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggle = () => setIsOpen((prev) => !prev);

  const selectOption = (option: DropdownOption) => {
    setSelected(option);
    setIsOpen(false);
  };

  // click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return {
    isOpen,selected,dropdownRef,toggle,selectOption,
  };
};