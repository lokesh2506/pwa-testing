import {
  DISTRIBUTION_COLORS,
  DEFAULT_COLOR,
} from "@/config/distributionConfig";

import PerformanceBarItem from "../../common/PerformanceBarItem";
import { PerformanceItem } from "@/types/dashboard/performance";
import StatusIndicator from "../../common/StatusIndicator";

interface smPerformanceProps {
  smPerformanceData: PerformanceItem[];
}


const SMPerformanceCard = ({smPerformanceData}:smPerformanceProps) => {
  return (
    <div className="w-full lg:max-w-[25%] card-bg border border-slate-700/50 p-6 rounded-2xl">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h4 className="font-bold text-sm card-title">
          SM Performance
        </h4>
        <span className="material-symbols-outlined card-subtitle text-lg">
          more_vert
        </span>
      </div>

      {/* Performance Items */}
      <div className="flex flex-col gap-4">
        {smPerformanceData.map((item, index) => {
          const color =
            DISTRIBUTION_COLORS[index % DISTRIBUTION_COLORS.length] ||
            DEFAULT_COLOR;

          return (
            <PerformanceBarItem
              key={index}
              data={{ ...item, color }}
            />
          );
        })}
      </div>

      {/* Footer Legend */}
      <div className="mt-6 pt-6 border-t border-slate-700 flex justify-between text-[10px]">
        
        <StatusIndicator label="Goal" colorClass="bg-slate-600" />
        <StatusIndicator label="Active" colorClass="bg-primary" />
        <StatusIndicator label="Final" colorClass="bg-emerald-500" />

      </div>
    </div>
  );
};

export default SMPerformanceCard;

