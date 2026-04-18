"use client";

import CommonButton from "@/components/buttons/CommonButton";
import BatchCardItem from "./BatchCardItem";
import { BatchItem } from "@/types/common/BatchItem";

interface BatchDetailsProps{
    batchData:BatchItem[];
}

const BatchDetailsCard = ({batchData}:BatchDetailsProps) => {
  return (
    <div className="w-full lg:max-w-[25%] card-bg border border-slate-700/50 p-6 rounded-2xl flex flex-col justify-between">
      
      {/* Top Section */}
      <div>
        <h4 className="font-bold text-sm card-title mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-lg">
            calendar_today
          </span>
          Current Batch Details
        </h4>

        <div className="space-y-4">
          {batchData.map((item, index) => (
            <BatchCardItem key={index} {...item} />
          ))}
        </div>
      </div>

      {/* Button */}
      <CommonButton
        buttonStyle="w-full mt-6 py-2 bg-primary hover:bg-primary/80 text-white text-xs font-bold rounded-lg transition-colors"
        content="View Detailed Timeline"
        type="button"
        clickFunction={()=>{console.log("View Detailed Timeline buton clicked")}}
      />
    </div>
  );
};

export default BatchDetailsCard;