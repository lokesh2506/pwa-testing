import { MetricCardData } from "@/types/dashboard/metricCard";

interface Props {
  data: MetricCardData;
}

const MetricCard = ({ data }: Props) => {
  const trendStyles: Record<MetricCardData["trendType"], string> = {
    up: "text-emerald-400",
    down: "text-amber-400",
  };

  return (
    <div className="relative overflow-hidden group rounded-2xl p-6 card-bg border border-slate-700/50 shadow-sm transition-all hover:border-primary/50">
      
      {/* Background Icon */}
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <span className="material-symbols-outlined metric-card-icon">
          {data.icon}
        </span>
      </div>

      {/* Title */}
      <p className="card-subtitle text-sm font-medium">
        {data.title}
      </p>

      {/* Value + Trend */}
      <div className="mt-2 flex items-baseline gap-2">
        <h3 className="card-title text-4xl font-bold">
          {data.value}
        </h3>

        <span className={`text-xs flex items-center ${trendStyles[data.trendType]}`}>
          {data.trend}
          <span className="material-symbols-outlined text-xs ml-1">
            {data.trendIcon}
          </span>
        </span>
      </div>

      {/* Progress Bar */}
      <div className="mt-4 w-full bg-primary-10 h-1 rounded-full overflow-hidden">
        <div
          className="bg-primary h-full transition-all duration-500"
          style={{ width: `${data.progress}%` }}
        />
      </div>

      {/* Description */}
      <p className="text-[10px] card-subtitle mt-2 uppercase">
        {data.description}
      </p>
    </div>
  );
};

export default MetricCard;