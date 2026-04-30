
"use client";

import { useGlobalDataStore } from "@/store/globalData.store";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Loader from "../common/Loader";
import Breadcrumbs from "../common/Breadcrumbs";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const {  loading } = useGlobalDataStore();


  return (
    <div className="flex h-screen bg-neutral-100 dark:bg-neutral-950">
      {/* Sidebar */}
      <Sidebar/>
      {/* Main Section */}
      <div className="flex flex-col flex-1 w-full">
        {/* Header */}
        <Header/>
        {/* Content */}
        {
          loading ? <Loader/> 
          : <main className="flex-1 overflow-y-auto p-4 custom-scrollbar">
            {/* Breadcrumbs */}
              <Breadcrumbs />
              {children}
            </main>
        }
      </div>
    </div>
  );
}
