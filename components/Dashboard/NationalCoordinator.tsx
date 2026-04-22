"use client";

import { useDashboardStore } from "@/store/dashboard.store";
import MetricCard from "./NationalCoordinator/MetricCard";
import SMPerformanceCard from "./NationalCoordinator/SMPerformanceCard";
import CHOPerformanceCard from "./NationalCoordinator/CHOPerformanceCard";
import BatchDetailsCard from "./NationalCoordinator/BatchDetailsCard";
import StateComparisonCard from "./NationalCoordinator/StateComparisonCard";

import { exportMultiSheetExcel } from "@/utils/exportToExcel";
import CommonButton from "../buttons/CommonButton";

const NationalCoordinator = () => {
  const { data, loading } = useDashboardStore();

  if (loading) return <p className="card-title">Loading...</p>;
  if (!data) return <p className="card-title">Select State & District</p>;


  const handleExport = (data:any) => {
    if (!data) return;

    // 1. Metric Cards
    const metricData = data.metricCardData.map((item: any) => ({
      Title: item.title,
      Value: item.value,
      Trend: item.trend,
      Progress: item.progress,
    }));

    // 2. SM Performance
    const smPerformance = data.smPerformanceData.map((item: any) => ({
      Label: item.label,
      Value: item.value,
      Percentage: item.percentage,
    }));

    // 3. CHO Performance
    const choPerformance = data.choPerformanceData.labels.map(
      (label: string, index: number) => {
        const row: any = { Label: label };

        data.choPerformanceData.datasets.forEach((ds: any) => {
          row[ds.label] = ds.data[index];
        });

        return row;
      }
    );

    // 4. Batch Details
    const batchDetails = data.batchDetails.flatMap((item: any) =>
      item.batches.map((batch: any) => ({
        Category: item.label,
        BatchName: batch.name,
        Status: batch.status.label,
      }))
    );

    // 5. State Comparison
    const stateComparison = data.stateComparison.labels.map(
      (label: string, index: number) => {
        const row: any = { State: label };

        data.stateComparison.datasets.forEach((ds: any) => {
          row[ds.label] = ds.data[index];
        });

        return row;
      }
    );

    //  Export with multiple sheets
    exportMultiSheetExcel({
      Metrics: metricData,
      SM_Performance: smPerformance,
      CHO_Performance: choPerformance,
      Batch_Details: batchDetails,
      State_Comparison: stateComparison,
    },"National_Coordinator_Report");
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      {/* Export Report button */}
        <CommonButton
          buttonStyle="bg-primary text-white px-4 py-2 rounded w-fit ml-auto"
          content="Export Excel"
          type="button"
          clickFunction={()=>handleExport(data)}
        
        />
      <div className="flex flex-col gap-6 w-full">

        {/* Metric Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {data.metricCardData.map((card: any) => (
            <MetricCard key={card.id} data={card} />
          ))}
        </div>

        {/* Charts */}
        <div className="flex flex-col lg:flex-row gap-6">
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
    </div>
  );
};

export default NationalCoordinator;