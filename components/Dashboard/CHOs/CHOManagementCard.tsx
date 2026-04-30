import { CHOManagementCardProps } from "@/types/chos/choManagement";


const CHOManagementCard = ({heading,value,icon,colorClass = "text-primary bg-primary/10",
}: CHOManagementCardProps) => {
  return (
    <div className="card-bg p-5 rounded-xl border border-slate-700/50 shadow-sm transition-colors flex items-center gap-4">
      
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClass}`}>
        <span className="material-symbols-outlined">{icon}</span>
      </div>

      <div>
        <p className="text-[10px]  font-bold card-subtitle uppercase tracking-widest">
          {heading}
        </p>
        <h4 className="text-2xl font-bold card-title">{value}</h4>
      </div>
      
    </div>
  );
};

export default CHOManagementCard;