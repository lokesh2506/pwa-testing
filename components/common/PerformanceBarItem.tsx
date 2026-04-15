import { PerformanceItem } from "@/types/dashboard/performance";

interface Props {
  data: PerformanceItem
}

const PerformanceBarItem = ({ data }: Props) => {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-[10px] card-subtitle uppercase mb-1">
        <span>{data.label}</span>
        <span>{data.value}</span>
      </div>

      <div className="h-8 bg-primary-10 rounded flex items-center relative overflow-hidden">
        <div
          className={`absolute inset-y-0 left-0 border-r  ${data.color}`}
          style={{ width: `${data.percentage}%` }}
        />
        <span className="relative text-xs font-bold ml-3 card-title">
          {data.percentage}%
        </span>
      </div>
    </div>
  );
};

export default PerformanceBarItem;