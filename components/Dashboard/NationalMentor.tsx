import { CardData } from "@/types/dashboard/datacard";
import Header from "../Header/Header"
import Sidebar from "../Sidebar/Sidebar"
import DataCard from "./NationalMentor/DataCard"
import rawData from "@/data/datacard.json";
import AlertsCard from "./NationalMentor/AlertsCard";
import alertData from "@/data/alerts.json"

const data = rawData as {
  cards: CardData[];
};

const NationalMentorDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden w-full">
      {/* Sidebar - Handled internally with its own mobile logic */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 overflow-hidden w-full">
        {/* Header - Fixed at top */}
        <Header />

        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden">
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
                {/* Add your charts here */}
              </div>

              {/* Right side - Alerts Card (1 col on desktop) */}
              <div className="flex flex-col gap-6">
                <AlertsCard alerts={alertData?.alerts || []} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default NationalMentorDashboard