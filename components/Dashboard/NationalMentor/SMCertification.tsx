"use client";

import BarChart from "@/components/charts/BarChart";
import data from "@/data/smCertification.json";

const SMCertification = () => {
  return (
    <div className="card-bg rounded-xl border border-slate-700/50 p-6 shadow-sm flex flex-col">
      
      {/* Header */}
      <h3 className="card-title text-base font-bold mb-1">
        SM Certification Levels
      </h3>
      <p className="card-subtitle text-sm mb-6">
        Mentor qualification breakdown
      </p>

      {/* Chart */}
      <div className="flex-1 h-40">
        <BarChart
          labels={data.labels}
          values={data.values}
        />
      </div>
    </div>
  );
};

export default SMCertification;