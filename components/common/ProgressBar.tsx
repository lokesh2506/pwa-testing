"use client";

interface Props {
  title: string;
  value: number;
  percentage: number;
  color: string;
}

const ProgressBar = ({ title, value, percentage, color }: Props) => {
  return (
    <div className="relative">
      <div className="flex justify-between text-sm mb-1">
        <span className="card-subtitle font-medium">{title}</span>
        <span className="card-subtitle">
          {value.toLocaleString()} ({percentage}%)
        </span>
      </div>

      <div className="w-full dark:bg-slate-700 bg-gray-400 rounded-full h-2.5">
        <div
          className={`${color} h-2.5 rounded-full transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;