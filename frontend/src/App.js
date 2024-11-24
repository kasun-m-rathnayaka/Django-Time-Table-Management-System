import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Users from "./components/userManagement/Users";
import Timetable from "./components/timeTable/timetable";
import LectureLeave from "./components/LectureLeave";
import AddAdmin from "./components/userManagement/AddAdmin";
import ViewAdmin from "./components/userManagement/ViewAdmin";
import Assignments from "./components/Assignment/Assingments";
import AddLecture from "./components/userManagement/AddLecture";
import AddStudent from "./components/userManagement/AddStudent";
import ViewLecture from "./components/userManagement/ViewLecture";
import ViewStudent from "./components/userManagement/ViewStudent";
import Login from "./components/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/lectureleave" element={<LectureLeave />} />
        <Route path="/add-admin" element={<AddAdmin />} />
        <Route path="/view-admins" element={<ViewAdmin />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route path="/add-lecturer" element={<AddLecture />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/view-lecturers" element={<ViewLecture />} />
        <Route path="/view-students" element={<ViewStudent />} />
      </Routes>
    </Router>
  );
};

export default App;
