"use client";

import { useParams } from "next/navigation";
import NationalCoordinator from "@/components/Dashboard/NationalCoordinator";
import { useProtected } from "@/hooks/auth/useProtected";

const Page = () => {
  useProtected();
  const params = useParams();
  const slug = params?.slug as string;

  // Central mapping
  const renderContent = () => {
    switch (slug) {
      case "dashboard":
        return <NationalCoordinator />;

      case "state-mentors":
        return <p className="card-title">StateMentors</p>;

      case "chos":
        return <p className="card-title">CHOs</p>;

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

  return <div className="flex w-full">{renderContent()}</div>;
};

export default Page;