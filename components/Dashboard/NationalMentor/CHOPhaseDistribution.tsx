"use client";

import data from "@/data/choDistribution.json";
import {
  DISTRIBUTION_COLORS,
  DEFAULT_COLOR,
} from "@/config/distributionConfig";
import ProgressBar from "@/components/common/ProgressBar";

const CHOPhaseDistribution = () => {
  return (
    <div className="card-bg rounded-xl border border-slate-700/50 p-6 shadow-sm flex flex-col">
      
      {/* Header */}
      <h3 className="card-title text-base font-bold mb-1">
        CHO Phase Distribution
      </h3>
      <p className="card-subtitle text-sm mb-6">
        Current phase progression across all states
      </p>

      {/* List */}
      <div className="flex-1 flex flex-col justify-center gap-5">
        {data.items.map((item, index) => {
          const color =
            DISTRIBUTION_COLORS[index % DISTRIBUTION_COLORS.length] ||
            DEFAULT_COLOR;

          return (
            <ProgressBar
              key={item.id}
              title={item.distributionTitle}
              value={item.distributionValue}
              percentage={item.distributionPercentage}
              color={color}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CHOPhaseDistribution;