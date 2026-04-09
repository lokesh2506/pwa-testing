// @/components/Dropdowns/StateDropdown.tsx

import { State } from "@/hooks/dashboard/useQuickTargetAdjust";

interface StateDropdownProps {
  states: State[];
  selectedState: State;
  isOpen: boolean;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
  onToggle: () => void;
  onSelectState: (state: State) => void;
}

const StateDropdown = ({
  states,
  selectedState,
  isOpen,
  dropdownRef,
  onToggle,
  onSelectState,
}: StateDropdownProps) => {
  return (
    <div className="relative" ref={dropdownRef}>
      <label className="text-xs card-subtitle uppercase font-bold tracking-wider mb-2 block">
        Select State
      </label>

      {/* Dropdown Trigger */}
      <div
        onClick={onToggle}
        className="w-full bg-slate-800 text-white border border-slate-600 rounded-lg p-2.5 text-sm cursor-pointer flex justify-between items-center hover:bg-slate-700 transition-colors"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span>{selectedState.name}</span>
        <span className={`material-symbols-outlined text-sm transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
          expand_more
        </span>
      </div>

      {/* Dropdown List - Scrollable */}
      {isOpen && (
        <div className="absolute left-0 top-full mt-1 w-full bg-slate-800 border border-slate-600 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto custom-scrollbar">
          {states.map((state) => (
            <div
              key={state.code}
              onClick={() => onSelectState(state)}
              className={`w-full text-left px-3 py-2 text-sm transition-colors ${
                selectedState.code === state.code
                  ? "bg-primary text-white"
                  : "text-slate-200 hover:bg-slate-700"
              }`}
              role="option"
              aria-selected={selectedState.code === state.code}
            >
              <div className="flex items-center justify-between">
                <span>{state.name}</span>
                {selectedState.code === state.code && (
                  <span className="material-symbols-outlined text-sm">check</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StateDropdown;