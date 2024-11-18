import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2 style={styles.sidebarHeader}>Dashboard</h2>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/users" style={styles.link}>
              Users
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/timetable" style={styles.link}>
              Timetable
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/lectureleave" style={styles.link}>
              Lecture Leave Form
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/assignments" style={styles.link}>
              Assignments
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <h1 style={styles.mainHeader}>
          Welcome to the Timetable Management System
        </h1>
        <p style={styles.mainText}>
          Manage users, view and update timetables, and much more.
        </p>
      </div>
    </div>
  );
};

// Styling
const styles = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  sidebar: {
    width: "250px",
    backgroundColor: "#2c3e50",
    color: "#ecf0f1",
    padding: "20px",
    boxShadow: "2px 0 10px rgba(0, 0, 0, 0.2)",
    animation: "slideIn 0.5s ease-out",
  },
  sidebarHeader: {
    fontSize: "1.5rem",
    marginBottom: "20px",
    textAlign: "center",
    color: "#ecdbff",
  },
  navList: {
    listStyleType: "none",
    padding: 0,
  },
  navItem: {
    margin: "15px 0",
  },
  link: {
    color: "#ecf0f1",
    textDecoration: "none",
    fontSize: "1.1rem",
    display: "block",
    padding: "10px",
    borderRadius: "5px",
    transition: "background-color 0.3s",
  },
  linkHover: {
    backgroundColor: "#34495e",
  },
  mainContent: {
    flex: 1,
    padding: "40px",
    backgroundImage: "url('https://via.placeholder.com/800x600')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#2c3e50",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    animation: "fadeIn 1s ease-out",
  },
  mainHeader: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    color: "#ecdbff",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    animation: "fadeInDown 1s",
  },
  mainText: {
    fontSize: "1.2rem",
    maxWidth: "600px",
    textAlign: "center",
    color: "#fff",
    animation: "fadeInUp 1s",
  },
};

// Keyframes for animations
const globalStyles = `
@keyframes slideIn {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
`;

// Add the global styles
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = globalStyles;
document.head.appendChild(styleSheet);

export default Home;
