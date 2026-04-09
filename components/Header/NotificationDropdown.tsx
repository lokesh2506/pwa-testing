import Link from "next/link";
import { NotificationProps } from "@/types/notifications/notification";

const NotificationDropdown = ({ notifications = [] }: NotificationProps) => {
  return (
    <div
      className="
        absolute top-full -mt-0.5 right-0 w-[60vw] md:w-72 
        card-bg border border-slate-700/30 
        rounded-xl shadow-lg z-[12]
        max-h-80 overflow-y-auto custom-scrollbar
      "
    >
      {notifications.length > 0 ? (
        notifications.map((item, index) => {
          const content = (
            <div
              className="px-4 py-3 hover:bg-slate-700/30 cursor-pointer transition-colors border-b border-b-gray-300 dark:border-b-gray-100/20"
            >
              <h4 className="text-sm font-semibold card-title">
                {item.notificationTitle}
              </h4>
              <p className="text-xs card-subtitle mt-1">
                {item.subtitle}
              </p>
            </div>
          );

          return item.link ? (
            <Link key={index} href={item.link}>
              {content}
            </Link>
          ) : (
            <div key={index}>{content}</div>
          );
        })
      ) : (
        <div className="px-4 py-3 text-sm card-subtitle">
          No notifications
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;