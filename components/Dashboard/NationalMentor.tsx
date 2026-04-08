import Header from "../Header/Header"
import Sidebar from "../Sidebar/Sidebar"
import DataCard from "./NationalMentor/DataCard"

const NationalMentorDashboard = () => {
  return (
    <div className="flex min-w-full ">
      <Sidebar/>
      <div className="w-full max-w-full">
        <Header/>
        <div>
          <DataCard/>
        </div>
      </div>
    </div>
  )
}

export default NationalMentorDashboard