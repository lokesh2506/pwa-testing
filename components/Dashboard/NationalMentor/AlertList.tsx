'use client'
import { useTimeAgo } from "@/hooks/dashboard/getTimeAgo";
import { Alert } from "@/types/dashboard/alert";
import Link from "next/link";

interface AlertListProps {
  alert: Alert;
}

export const AlertList = ({alert}:AlertListProps) => {
  
  const timeAgo = useTimeAgo(alert.alertDate);

  return (  
    <div
      className="p-4 hover:bg-hover/50 transition-colors cursor-pointer group"
    >
      <div className="flex justify-between items-start mb-1">
        <h4 className="card-title font-semibold text-sm">
          {alert.alertTitle}
        </h4>
        <span className="text-xs card-subtitle">
          {timeAgo}
        </span>
      </div>

      <p className="card-subtitle text-sm mb-2 group-hover:text-white transition-colors">
        {alert.alertDescription}
      </p>

      <Link  href={alert.alertLink} className="selected-menu-text text-xs font-bold uppercase tracking-wide hover:underline">
        {alert.alertLinkData}
      </Link>
    </div>
  )
}