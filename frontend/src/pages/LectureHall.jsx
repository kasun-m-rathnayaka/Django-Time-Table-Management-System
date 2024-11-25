import React from 'react'
import SideBar from "../components/SideBar";
import LectureHallTable from '../components/LectureHall';

const LectureHall = () => {
  return (
    <SideBar title={"TimeTable"}>
      <div className="bg-primary-white">
        <LectureHallTable/>
      </div>
    </SideBar>
  )
}

export default LectureHall