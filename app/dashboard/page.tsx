import NationalCoordinator from "@/components/Dashboard/NationalCoordinator"
import "../../styles/dashboard.css"
import NationalMentorDashboard from "@/components/Dashboard/NationalMentor"

const page = () => {
  return (
    <div className="flex">
      {/* <NationalMentorDashboard/> */}
      <NationalCoordinator/>
    </div>
  )
}

export default page