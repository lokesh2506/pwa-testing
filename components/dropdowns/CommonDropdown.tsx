"use client";

import { DropdownOption } from "@/types/common/dropdown";

interface Props {
  label?: string;
  
  options: DropdownOption[];
  selected: DropdownOption;
  isOpen: boolean;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
  onToggle: () => void;
  onSelect: (option: DropdownOption) => void;
}

const CommonDropdown = ({
  label,
  options,
  selected,
  isOpen,
  dropdownRef,
  onToggle,
  onSelect,
}: Props) => {
  return (
    <div className="relative" ref={dropdownRef}>
      {label && (
        <label className="text-xs uppercase font-bold mb-2 block">
          {label}
        </label>
      )}

      {/* Trigger */}
      <div
        onClick={onToggle}
        className="max-w-fit bg-slate-800 text-white border border-slate-600 rounded-lg p-2.5 text-sm cursor-pointer flex justify-between items-center hover:bg-slate-700"
      >
        <span>{selected?.value}</span>

        <span className="material-symbols-outlined text-sm">
          expand_more
        </span>
      </div>

      {/* Options */}
      {isOpen && (
        <div className="absolute left-0 top-full mt-1  bg-slate-800 border border-slate-600 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto custom-scrollbar w-64">
          {options.map((option) => (
            <div
              key={option.key}
              onClick={() => onSelect(option)}
              className={`px-3 py-2 text-sm cursor-pointer ${
                selected?.key === option.key
                  ? "bg-primary text-white"
                  : "text-slate-200 hover:bg-slate-700"
              }`}
            >
              {option.value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommonDropdown;