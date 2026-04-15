interface Props {
  label: string;
  colorClass: string;
}

const StatusIndicator = ({ label, colorClass }: Props) => {
  return (
    <div className="flex items-center gap-1">
      <span className={`w-2 h-2 rounded-full ${colorClass}`}></span>
      <span className="text-[10px] card-subtitle">{label}</span>
    </div>
  );
};

export default StatusIndicator;