import metricData from "@/data/metricCardData.json";
import MetricCard from './NationalCoordinator/MetricCard';
import { MetricCardData } from "@/types/dashboard/metricCard";
import SMPerformanceCard from "./NationalCoordinator/SMPerformanceCard";

import smData from "@/data/smPerformance.json";
import CHOPerformanceCard from "./NationalCoordinator/CHOPerformanceCard";
import BatchDetailsCard from "./NationalCoordinator/BatchDetailsCard";
import batchData from "@/data/batchDetails.json"
import choData from "@/data/choPerformance.json";
import StateComparisonCard from "./NationalCoordinator/StateComparisonCard";
import stateData from "@/data/stateComparison.json";




const metricCardData = metricData as MetricCardData[];


const NationalCoordinator = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {metricCardData.map((card) => (
          <MetricCard key={card.id} data={card} />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <SMPerformanceCard smPerformanceData={smData}/>
        <CHOPerformanceCard
          labels={choData.labels}
          datasets={choData.datasets}
        />
        <BatchDetailsCard batchData={batchData}/>
      </div>
      <div className="">
        <StateComparisonCard
          title={stateData.title}
          subtitle={stateData.subtitle}
          labels={stateData.labels}
          datasets={stateData.datasets}
        />
      </div>
    </div>
  );
};

export default NationalCoordinator;