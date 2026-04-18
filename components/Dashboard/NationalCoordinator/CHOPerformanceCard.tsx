"use client";

import BarChart from "@/components/charts/BarChart";
import StatusIndicator from "../../common/StatusIndicator";
import { MultiChartDataSet } from "@/types/common/multiChart";



interface Props {
  labels: string[];
  datasets: MultiChartDataSet[];
}

const CHOPerformanceCard = ({ labels, datasets }: Props) => {
  
  // Convert to chart.js format
  const chartDatasets = datasets.map((ds) => ({
    label: ds.label,
    data: ds.data,
    backgroundColor: ds.chartColor, 
  }));

  return (
    <div className="w-full  lg:max-w-[50%] card-bg border border-slate-700/50 p-6 rounded-2xl">
      
      {/* Header */}
      <div className="flex flex-col gap-2 md:flex-row justify-between items-center mb-6">
        <h4 className="font-bold text-sm card-title">
          CHO Performance Overview
        </h4>

        {/* Legend */}
        <div className="flex items-center gap-4 w-full md:w-auto justify-end">
          {datasets.map((item, i) => (
            <StatusIndicator
              key={i}
              label={item.label}
              colorClass={item.color}
            />
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="h-[250px]">
        <BarChart labels={labels} datasets={chartDatasets} />
      </div>
    </div>
  );
};

export default CHOPerformanceCard;