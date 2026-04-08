import { Alert } from "@/types/dashboard/alert";
import { AlertList } from "./AlertList";

interface AlertProps {
  alerts: Alert[];
}

const AlertsCard = ({ alerts }: AlertProps) => {
  return (
    <div className="card-bg rounded-xl border-slate-700/50 p-0 shadow-sm overflow-hidden flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-slate-700/50 flex justify-between items-center bg-red-900/10">
        <h3 className="card-title text-base font-bold flex items-center gap-2">
          <span className="material-symbols-outlined text-red-500">
            warning
          </span>
          Urgent Action Required
        </h3>

        <span className="bg-red-500/20 text-red-500 text-xs px-2 py-1 rounded font-bold">
          {alerts.length} Alerts
        </span>
      </div>
      <div className="flex flex-col divide-y divide-border/50">
          {alerts.map((alert, index) => (
            <AlertList alert={alert} key={index}/>
          ))}
      </div>
    </div>
  );
};

export default AlertsCard;


