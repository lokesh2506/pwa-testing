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

const CommonDropdown = ({label,options,selected,isOpen,dropdownRef,onToggle,onSelect,}: Props) => {
  return (
    <div className="relative" ref={dropdownRef}>
      {label && (
        <label className="text-xs card-subtitle uppercase font-bold tracking-wider mb-2 block">
          {label}
        </label>
      )}

      {/* Trigger */}
      <div
        onClick={onToggle}
        className="w-full bg-slate-800 text-white border border-slate-600 rounded-lg p-2.5 text-sm cursor-pointer flex justify-between items-center hover:bg-slate-700 transition-colors"
      >
        <span>{selected.value}</span>

        <span
          className={`material-symbols-outlined text-sm transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          expand_more
        </span>
      </div>

      {/* Options */}
      {isOpen && (
        <div className=" absolute left-0 top-full mt-1 w-full bg-slate-800 border border-slate-600 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
          {options.map((option) => (
            <div
              key={option.key}
              onClick={() => onSelect(option)}
              className={`px-3 py-2 text-sm cursor-pointer transition-colors ${
                selected.key === option.key
                  ? "bg-primary text-white"
                  : "text-slate-200 hover:bg-slate-700"
              }`}
            >
              <div className="flex justify-between items-center">
                <span>{option.value}</span>

                {selected.key === option.key && (
                  <span className="material-symbols-outlined text-sm">
                    check
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommonDropdown;