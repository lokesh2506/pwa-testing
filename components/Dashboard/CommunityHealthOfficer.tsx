import { useGlobalDataStore } from "@/store/globalData.store";
import CommonButton from "../buttons/CommonButton";
import { exportMultiSheetExcel } from "@/utils/exportToExcel";
import CHOManagementCard from "./CHOs/CHOManagementCard";
import { CHOManagementCardProps } from "@/types/chos/choManagement";
import CHOTable from "./CHOs/CHOTable";

const CommunityHealthOfficer = () => {
  const  data  = useGlobalDataStore((s)=>s.choData);
  const handleExport = (data: any) => {
    if (!data) return;

    // 1. CHO Table Data
    const choTable = data.choData.map((item: any) => ({
      "CHO Name": item.choName,
      "ID": item.id,
      "State": item.state,
      "District": item.district,
      "National Mentor": item.nationalMentor,
      "State Mentor": item.stateMentor,
      "Current Phase": item.currentPhase,
    }));

    // 2. CHO Management Summary
    const choManagement = data.choManagementData.map((item: any) => ({
      "Metric": item.heading,
      "Value": item.value,
      "Icon": item.icon,
    }));

    //  Export
    exportMultiSheetExcel(
      {
        CHO_Table: choTable,
        CHO_Management: choManagement,
      },
      "Community_Health_Officer_Report"
    );
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex flex-col gap-2 justify-between items-center md:flex-row">
        <div className="flex flex-col">
           <h1 className="text-xl font-extrabold  card-title md:text-2xl">Community Health Officers</h1>
            <p className=" card-subtitle text-md">Monitor and manage operational performance across all phases.</p>
        </div>
        {/* Export  button */}
        <CommonButton
          buttonStyle="bg-primary text-white px-4 py-2 rounded w-fit ml-auto items-center flex gap-1 cursor-pointer"
           content={<><span className="material-symbols-outlined text-sm">download</span>Export </>}
          type="button"
          clickFunction={()=>handleExport(data)}
        />
      </div>
      <div className="flex flex-col gap-6 w-full">
        {/* Table */}
        <CHOTable data={data?.choData} />

        {/* CHO management overview Card */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data?.choManagementData?.map((item:CHOManagementCardProps, index:number) => (
            <CHOManagementCard
              key={index}
              heading={item.heading}
              value={item.value}
              icon={item.icon}
              colorClass={item.colorClass}
            />
          ))}
        </section>
      </div>
    </div>
  )
}

export default CommunityHealthOfficer