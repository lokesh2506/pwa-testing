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
        return <p>StateMentors</p>;

      case "chos":
        return <p>CHOs</p>;

      case "reports":
        return <p>reports</p>;

      case "files":
        return <p>Files</p>;

      case "settings":
        return <p>Settings</p>;

      default:
        return <div>Page Not Found</div>;
    }
  };

  return <div className="flex w-full">{renderContent()}</div>;
};

export default Page;