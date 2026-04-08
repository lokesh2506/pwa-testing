import { SearchBox } from "./SearchBox"
import data from "@/data/notification.json";
import ThemeToggle from "./ThemeToggle";
import NotificationIcon from "./NotificationIcon";


const Header = () => {
  return (
    <div className='sticky top-0 z-10 header-glassy-background 

      backdrop-blur-md border-b border-slate-700/30 
      px-6 py-4 flex items-center justify-between'
    > 
      <h1 className="text-slate-900 dark:text-white text-lg md:text-2xl font-bold leading-tight">
        National Overview
      </h1>
      <div className="flex items-center gap-4">
         {/* Theme Toggle */}
        <ThemeToggle />
        {/* Search box */}
        <SearchBox 
          searchBoxStyle={`card-bg border border-slate-700 text-sm text-white rounded-full pl-10 pr-4 py-2 
            focus:outline-none focus:border-primary w-full max-w-64" 
          `}
          placeholder="Search states, mentors..."
          type="text"
        />
        <NotificationIcon  notifications={data.notifications} />
      </div>
      
    </div>
  )
}

export default Header



