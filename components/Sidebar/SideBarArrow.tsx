import { SidebarArrow } from "@/types/dashboard/sidebar"

const SideBarArrow = ({toggle,isArrowVisible}:SidebarArrow) => {
  return (
    <div
      onClick={toggle}
      className={`fixed bottom-6 left-6 z-50 transition-all duration-300 lg:hidden ${
      isArrowVisible ? "opacity-100" : "opacity-0"
      }`} 
    >
    
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
      <span className="material-symbols-outlined text-black">
        chevron_right
      </span>
      </div>
    </div>
  )
}

export default SideBarArrow