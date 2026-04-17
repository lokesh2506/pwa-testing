
"use client";

import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <div className="flex h-screen bg-neutral-100 dark:bg-neutral-950">
      {/* Sidebar */}
      <Sidebar/>
      {/* Main Section */}
      <div className="flex flex-col flex-1 w-full">
        {/* Header */}
        <Header/>
        {/* Content */}
        <main className="flex-1 overflow-y-auto p-4 custom-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
}
