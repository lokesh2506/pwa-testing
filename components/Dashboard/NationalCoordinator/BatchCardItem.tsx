import StatusTag from "@/components/common/StatusTag";
import { BatchItem } from "@/types/common/BatchItem";


const BatchCardItem = ({ label, batches }: BatchItem) => {
  return (
    <div className="p-3 bg-primary-10 rounded-xl border border-slate-700/30">
      
      <p className="text-[10px] card-subtitle uppercase tracking-tighter mb-2">
        {label}
      </p>

      {batches.map((batch, index) => (
        <div
          key={index}
          className={`flex justify-between items-center ${
            index !== batches.length - 1 ? "mb-2" : ""
          }`}
        >
          <span className="font-bold card-title text-sm">
            {batch.name}
          </span>

          <StatusTag
            label={batch.status.label}
            bgClass={batch.status.bgClass}
            textClass={batch.status.textClass}
          />
        </div>
      ))}
    </div>
  );
};

export default BatchCardItem;