"use client";

import { useDashboardStore } from "@/store/dashboard.store";
import MetricCard from "./NationalCoordinator/MetricCard";
import SMPerformanceCard from "./NationalCoordinator/SMPerformanceCard";
import CHOPerformanceCard from "./NationalCoordinator/CHOPerformanceCard";
import BatchDetailsCard from "./NationalCoordinator/BatchDetailsCard";
import StateComparisonCard from "./NationalCoordinator/StateComparisonCard";

const NationalCoordinator = () => {
  const { data, loading } = useDashboardStore();

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>Select State & District</p>;

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Metric Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {data.metricCardData.map((card: any) => (
          <MetricCard key={card.id} data={card} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-4 gap-6">
        <SMPerformanceCard smPerformanceData={data.smPerformanceData} />

        <CHOPerformanceCard
          labels={data.choPerformanceData.labels}
          datasets={data.choPerformanceData.datasets}
        />

        <BatchDetailsCard batchData={data.batchDetails} />
      </div>

      {/* Comparison */}
      <StateComparisonCard
        title={data.stateComparison.title}
        subtitle={data.stateComparison.subtitle}
        labels={data.stateComparison.labels}
        datasets={data.stateComparison.datasets}
      />
    </div>
  );
};

export default NationalCoordinator;