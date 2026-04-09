"use client";

import CommonDropdown from "@/components/dropdowns/CommonDropdown";
import { useDropdown } from "@/hooks/common/useDropdown";
import trendData from "@/data/performanceTrend.json";
import LineChart from "@/components/charts/LineChart";

const options = [
  { key: "weekly", value: "Weekly" },
  { key: "monthly", value: "Monthly" },
];

const MentoringPerformance = () => {
  const {
    isOpen,
    selected,
    dropdownRef,
    toggle,
    selectOption,
  } = useDropdown(options);

  const current = trendData[selected.key as "weekly" | "monthly"];

  return (
    <div className="card-bg rounded-xl border border-slate-700/50 p-6 shadow-sm">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="card-title text-lg font-bold">
          Mentoring Performance Trends
        </h2>

        <div className="w-40">
          <CommonDropdown
            options={options}
            selected={selected}
            isOpen={isOpen}
            dropdownRef={dropdownRef}
            onToggle={toggle}
            onSelect={selectOption}
          />
        </div>
      </div>

      {/* Chart */}
      <div className="h-64">
        <LineChart
          labels={current.labels}
          data={current.data}
        />
      </div>
    </div>
  );
};

export default MentoringPerformance;