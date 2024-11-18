import React from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div style={styles.container}>
      <h1>User Management</h1>
      <p>Manage users by category: Admin, Lecturers, and Students.</p>

      {/* Admin Section */}
      <div style={styles.section}>
        <h2>Admin</h2>
        <p>Manage administrative users.</p>
        <div style={styles.actions}>
          <button
            style={styles.button}
            onClick={() => handleNavigation("/add-admin")}
          >
            Add Admin
          </button>
          <button
            style={styles.button}
            onClick={() => handleNavigation("/view-admins")}
          >
            View Admins
          </button>
        </div>
      </div>

      {/* Lecturer Section */}
      <div style={styles.section}>
        <h2>Lecturers</h2>
        <p>Manage lecturer users.</p>
        <div style={styles.actions}>
          <button
            style={styles.button}
            onClick={() => handleNavigation("/add-lecturer")}
          >
            Add Lecturer
          </button>
          <button
            style={styles.button}
            onClick={() => handleNavigation("/view-lecturers")}
          >
            View Lecturers
          </button>
        </div>
      </div>

      {/* Students Section */}
      <div style={styles.section}>
        <h2>Students</h2>
        <p>Manage student users.</p>
        <div style={styles.actions}>
          <button
            style={styles.button}
            onClick={() => handleNavigation("/add-student")}
          >
            Add Student
          </button>
          <button
            style={styles.button}
            onClick={() => handleNavigation("/view-students")}
          >
            View Students
          </button>
        </div>
      </div>
    </div>
  );
};

// Styling for the component
const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "auto",
  },
  section: {
    backgroundColor: "#f9f9f9",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
  },
  actions: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  },
};

export default Users;
