import React from "react";
import SideBar from "../components/SideBar";
import UserTable from "../components/UserTable";

const Users = () => {
  return (
    <SideBar title={"TimeTable"}>
      <div className="bg-primary-white">
        <UserTable />
      </div>
    </SideBar>
  );
};

export default Users;
