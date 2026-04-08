import Image from "next/image";
import { UserDetails } from "@/types/dashboard/sidebar";


interface UserProfileProps {
  userData: UserDetails;
}

const UserProfileSection = ({ userData }: UserProfileProps) => {
  return (
    <div className="flex items-center gap-3 pb-4 border-b border-slate-700/30">
      {
        userData.profileImage &&
        <Image
          src={userData.profileImage}
          alt="User Avatar"
          width={48}
          height={48}
          className="rounded-full object-cover"
        />
      }
      
      <div>
        <h2 className="text-white text-sm font-semibold">
          {userData.name}
        </h2>
        <p className="card-subtitle text-xs">
          {userData.role}
        </p>
      </div>
    </div>
  );
};

export default  UserProfileSection;