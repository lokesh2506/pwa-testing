import { MenuItem } from "@/types/dashboard/sidebar";

interface SideBarMenuProps {
  menuData: MenuItem[];
  activeTab: string | null,
  setActiveTab: React.Dispatch<React.SetStateAction<string | null>>;
}

const SideBarMenu = ({ menuData,activeTab,setActiveTab }: SideBarMenuProps) => {
  return (
    <nav className="flex flex-col gap-2">
      {menuData.map((item) => (
        <div
          key={item?.key}
          onClick={() => setActiveTab(item.key)}
          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg 
              ${
              activeTab === item?.key
                  ? "selected-menu-bg selected-menu-text"
                  : "card-subtitle hover:bg-slate-700 hover:text-white"
              }
          `}
          >
            <span className="material-symbols-outlined">
                {item?.icon}
            </span>
            <span className="text-sm font-medium card-subtitle">{item?.name}</span>
        </div>
      ))}
    </nav>
  );
};

export default SideBarMenu;