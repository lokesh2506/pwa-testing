import { CardData } from "@/types/dashboard/datacard";
import Header from "../header/Header"
import Sidebar from "../sidebar/Sidebar"
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
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden w-full">
      {/* Sidebar - Handled internally with its own mobile logic */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 overflow-hidden w-full">
        {/* Header - Fixed at top */}
        <Header />

        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar">
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
        </main>
      </div>
    </div>
  )
}

export default NationalMentorDashboard