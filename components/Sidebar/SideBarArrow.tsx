import { SidebarArrow } from "@/types/dashboard/sidebar"
import CommonButton from "@/components/buttons/CommonButton";


const SideBarArrow = ({ toggle,isArrowVisible }: SidebarArrow) => {
  return (
    <CommonButton
      type="button"
      clickFunction={toggle}
      buttonStyle={`
        fixed bottom-6 left-6 z-50 xl:hidden
        w-10 h-10 p-0
        dark:bg-white bg-slate-900 rounded-full
        flex items-center justify-center
        shadow-lg hover:shadow-xl
        cursor-pointer
        hover:scale-110 transition-transform duration-200
         ${
          isArrowVisible ? "opacity-100" : "opacity-0"
        }
      `}
      content={
        <span className="material-symbols-outlined text-slate-900 dark:text-white text-xl">
          chevron_right
        </span>
      }
    />
  );
};

export default SideBarArrow;