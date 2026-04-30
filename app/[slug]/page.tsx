"use client";

import { useParams } from "next/navigation";
import NationalCoordinator from "@/components/Dashboard/NationalCoordinator";
import { useProtected } from "@/hooks/auth/useProtected";
import CommunityHealthOfficer from "@/components/Dashboard/CommunityHealthOfficer";
import { useGlobalDataStore } from "@/store/globalData.store";
import CHOProfile from "@/components/Dashboard/CHOs/CHOProfile";

const Page = () => {
  useProtected();
  const params = useParams();
  const slug = params?.slug as string;

  const {choData,choProfileData} = useGlobalDataStore();

  const CHOs = choProfileData ? <CHOProfile />: choData ? <CommunityHealthOfficer /> : <p className="card-title">Select State & District</p>;

  // Central mapping
  const renderContent = () => {
    switch (slug) {
      case "dashboard":
        return <NationalCoordinator />;

      case "state-mentors":
        return <p className="card-title">StateMentors</p>;

      case "chos":
        return  CHOs;

      case "reports":
        return <p className="card-title">reports</p>;

      case "files":
        return <p className="card-title">Files</p>;

      case "settings":
        return <p className="card-title">Settings</p>;

      default:
        return <div className="card-title" >Page Not Found</div>;
    }
  };

  return <div className="flex w-full h-full">{renderContent()}</div>;
};

export default Page;