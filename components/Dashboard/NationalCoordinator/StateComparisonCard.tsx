"use client";

import BarChart from "@/components/charts/BarChart";
import StatusIndicator from "@/components/common/StatusIndicator";
import { MultiChartDataSet } from "@/types/common/multiChart";



interface Props {
  title: string;
  subtitle: string;
  labels: string[];
  datasets: MultiChartDataSet[];
}

const StateComparisonCard = ({
  title,
  subtitle,
  labels,
  datasets,
}: Props) => {
  // convert for chart
  const chartDatasets = datasets.map((ds) => ({
    label: ds.label,
    data: ds.data,
    backgroundColor: ds.chartColor,
  }));

  return (
    <div className="card-bg border border-slate-700/50 p-8 rounded-2xl">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        
        <div>
          <h4 className="text-xl font-bold card-title">
            {title}
          </h4>
          <p className="text-xs card-subtitle mt-1">
            {subtitle}
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 text-xs font-medium">
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
      <div className="h-80">
        <BarChart labels={labels} datasets={chartDatasets} />
      </div>
    </div>
  );
};

export default StateComparisonCard;