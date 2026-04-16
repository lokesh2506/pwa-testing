import { MenuItem } from "@/types/dashboard/sidebar";

interface SideBarMenuProps {
  menuData: MenuItem[];
  activeTab: string | null,
  onTabChange: (key: string) => void; 
}

const SideBarMenu = ({ menuData,activeTab,onTabChange  }: SideBarMenuProps) => {
  return (
    <nav className="flex flex-col gap-2">
      {menuData.map((item) => (
        <div
          key={item?.key}
          onClick={() => onTabChange (item.key)}
          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg 
              ${
              activeTab === item?.key
                  ? "selected-menu-bg selected-menu"
                  : "card-subtitle hover:bg-slate-700 "
              }
          `}
          >
            <span className="material-symbols-outlined">
                {item?.icon}
            </span>
            <span className="text-sm font-medium ">{item?.name}</span>
        </div>
      ))}
    </nav>
  );
};

export default SideBarMenu;