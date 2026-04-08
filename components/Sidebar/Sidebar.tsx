"use client";

import data from "@/data/sidebar.json";
import CommonButton from "../Buttons/CommonButton";
import UserProfileSection from "./UserProfileSection";
import SideBarMenu from "./SideBarMenu";
import { useSidebar } from "@/hooks/dashboard/useSidebar";
import SideBarArrow from "./SideBarArrow";

const Sidebar = () => {
  const { isOpen, toggle, activeTab,isArrowVisible, setActiveTab, navigate } = useSidebar();

  return (
    <>
      {/* Overlay (Mobile) - Closes sidebar when clicked */}
      {isOpen && (
        <div
          onClick={toggle}
          className="fixed inset-0 bg-black/50 z-30 lg:hidden transition-opacity duration-300"
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-64 z-40 bg-slate-900
          transition-transform duration-300 ease-in-out
          lg:static lg:translate-x-0 lg:z-auto lg:w-64 lg:flex-shrink-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full min-h-0 p-4">
          {/* Top Section */}
          <div className="flex flex-col gap-6 flex-1 min-h-0">
            
            <UserProfileSection userData={data.user} />

            {/* Scrollable side bar Menu  */}
            <div className="flex-1 overflow-y-auto min-h-0 custom-scrollbar pr-2">
              <SideBarMenu
                menuData={data.menu}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </div>

          </div>

          {/* Logout Button */}
          <div className="pt-4 shrink-0">
            <CommonButton
              buttonStyle="flex items-center justify-center gap-2 w-full rounded-lg h-10 px-4 bg-slate-800 hover:text-white card-subtitle hover:bg-slate-700 transition-colors text-sm font-bold"
              content={
                <>
                  <span className="material-symbols-outlined logout-icon">logout</span>
                  <span className="text-sm font-bold">Log Out</span>
                </>
              }
              clickFunction={() => {
                navigate("/");
              }}
            />
          </div>

        </div>
      </aside>

      {/* Mobile Toggle Button - Visible when sidebar is closed */}


      { !isOpen &&
        <SideBarArrow toggle={toggle} isArrowVisible={isArrowVisible}/>
      }
    </>
  );
};

export default Sidebar;