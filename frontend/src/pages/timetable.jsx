import React from "react";
import TimeTable from "../components/TimeTable";
import SideBar from "../components/SideBar";

const Timetable = () => {
  return (
    <SideBar title={'TimeTable'}>
        <div className="bg-primary-white">
          <TimeTable />
        </div>
      </SideBar>
  );
};

export default Timetable;
