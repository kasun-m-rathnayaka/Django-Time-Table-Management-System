import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavigationType,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/userManagement/Users";
import Timetable from "./pages/timetable";
import LectureLeave from "./pages/LectureLeave";
import Assignments from "./pages/Assingments";
import AddLecture from "./pages/userManagement/AddLecture";
import AddStudent from "./pages/userManagement/AddStudent";
import ViewLecture from "./pages/userManagement/ViewLecture";
import ViewStudent from "./pages/userManagement/ViewStudent";
import Login from "./pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "./pages/NotFound";

const App = () => {
  function logout() {
    localStorage.clear();
    return <Navigate to={"/login"} />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route path="/lectureleave" element={<LectureLeave />} />
        <Route path="/users" element={<Users />} />
        <Route path="/add-lecturer" element={<AddLecture />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/view-lecturers" element={<ViewLecture />} />
        <Route path="/view-students" element={<ViewStudent />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/logout" element={logout} />
      </Routes>
    </Router>
  );
};

export default App;
