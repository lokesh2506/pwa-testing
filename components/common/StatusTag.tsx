interface Props {
  label: string;
  bgClass: string;
  textClass: string;
}

const StatusTag = ({ label, bgClass, textClass }: Props) => {
  return (
    <span
      className={`text-[10px] px-2 py-0.5 rounded-full ${bgClass} ${textClass}`}
    >
      {label}
    </span>
  );
};

export default StatusTag;