'use client'

import  useNotification  from "@/hooks/notifications/useNotification";
import { NotificationProps } from "@/types/notifications/notification";
import NotificationDropdown from "./NotificationDropdown";

const NotificationIcon = ({ notifications = [] }: NotificationProps) => {

  const {isOpen,containerRef,setIsOpen} = useNotification();
  return (
    <div ref={containerRef} className="relative">
      {/* Bell Icon */}
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="relative p-2 card-subtitle hover:text-white transition-colors cursor-pointer"
      >
        <span className={`material-symbols-outlined ${isOpen ? 'text-white':''}`}>notifications</span>

        {notifications.length > 0 && (
          <span className="absolute top-1 right-1 text-[10px] bg-red-500 text-white px-1 rounded-full">
            {notifications.length}
          </span>
        )}
      </div>

      {/* Dropdown */}
      {isOpen && (
        <NotificationDropdown notifications={notifications}/>
      )}
    </div>
  );
};

export default NotificationIcon;


