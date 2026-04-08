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
    <div className="flex min-w-full ">
      <Sidebar/>
      <div className="w-full max-w-full">
        <Header/>
        <div className="p-6 max-w-full mx-auto w-full flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {data?.cards?.map((card, index) => (
              <DataCard key={index} cardData={card} />
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 flex flex-col gap-6"></div>
            <div className="flex flex-col gap-6">
              <AlertsCard alerts={alertData?.alerts || []}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NationalMentorDashboard