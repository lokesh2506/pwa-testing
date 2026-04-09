"use client";

import CommonButton from "@/components/buttons/CommonButton";
import { useQuickTargetAdjust } from "@/hooks/dashboard/useQuickTargetAdjust";
import StateDropdown from "./StateDropdown";

const QuickTargetAdjust = () => {
  const {
    selectedState,
    isOpen,
    target,
    dropdownRef,
    states,
    handleInputChange,
    toggleDropdown,
    handleSelectState,
    handleUpdateTarget,
  } = useQuickTargetAdjust();

  return (
    <div className="card-bg rounded-xl border border-slate-700/50 p-6 shadow-sm">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="card-title text-base font-bold">Quick Target Adjust</h3>
        <span className="material-symbols-outlined card-subtitle">tune</span>
      </div>

      <div className="flex flex-col gap-4">

        {/* State Dropdown Component */}
        <StateDropdown
          states={states}
          selectedState={selectedState}
          isOpen={isOpen}
          dropdownRef={dropdownRef}
          onToggle={toggleDropdown}
          onSelectState={handleSelectState}
        />

        {/* Target Input Section */}
        <div>
          <label className="text-xs card-subtitle uppercase font-bold tracking-wider mb-2 block">
            Set New Target
          </label>

          <div className="flex flex-col gap-2">
            <input
              type="text"
              value={target}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder="Enter target number"
              className="flex-1 bg-slate-800 text-white border border-slate-600 rounded-lg p-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
            />

            <CommonButton
              type="button"
              buttonStyle="text-white bg-primary font-bold rounded-lg px-4 py-2 transition-colors cursor-pointer w-full hover:bg-primary/90"
              content="Update"
              clickFunction={handleUpdateTarget}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default QuickTargetAdjust;