import { CardData } from "@/types/dashboard/datacard";
import DataCard from "./NationalMentor/DataCard"
import cardData from "@/data/datacard.json";
import AlertsCard from "./NationalMentor/AlertsCard";
import alertData from "@/data/alerts.json"
import QuickTargetAdjust from "./NationalMentor/QuickTargetAdjust";
import PolicyDocuments from "./NationalMentor/PolicyDocuments";
import MentoringPerformance from "./NationalMentor/MentoringPerformance";
import CHOPhaseDistribution from "./NationalMentor/CHOPhaseDistribution";
import SMCertification from "./NationalMentor/SMCertification";


const data = cardData as {
  cards: CardData[];
};


const NationalMentorDashboard = () => {
  return (
    <div className="p-4 sm:p-6 max-w-full mx-auto w-full flex flex-col gap-6">
      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data?.cards?.map((card, index) => (
          <DataCard key={index} cardData={card} />
        ))}
      </div>


      {/* Charts and Alerts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left side - Charts (2 cols on desktop) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
            <MentoringPerformance/>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CHOPhaseDistribution/>
            <SMCertification/>
          </div>
        </div>


        {/* Right side - Alerts Card (1 col on desktop) */}
        <div className="flex flex-col gap-6">
          <AlertsCard alerts={alertData?.alerts || []} />
          <QuickTargetAdjust/>
          <PolicyDocuments/>
        </div>
      </div>
    </div>


  )
}


export default NationalMentorDashboard