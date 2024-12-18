import React from "react";
import TimeTable from "../components/TimeTable";
import SideBar from "../components/SideBar";

const Home = () => {
  return (
    <>
      <SideBar title={'Dashboard'}>
        <div className="bg-primary-white">
          <TimeTable />
        </div>
      </SideBar>
    </>
  );
};

export default Home;
