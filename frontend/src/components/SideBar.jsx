import React, { Children } from "react";
import { Link } from "react-router-dom";

const SideBar = ({ children, title }) => {
  return (
    <div>
      <div style={styles.container}>
        {/* Sidebar */}
        <div style={styles.sidebar}>
          <h2 style={styles.sidebarHeader}>{title}</h2>
          <ul style={styles.navList}>
            <div>
              <li style={styles.navItem}>
                <Link to="/" style={styles.link}>
                  Home
                </Link>
              </li>
              <li style={styles.navItem}>
                <Link to="/timetable" style={styles.link}>
                  Timetable
                </Link>
              </li>
              <li style={styles.navItem}>
                <Link to="/users" style={styles.link}>
                  Users Data
                </Link>
              </li>
              <li style={styles.navItem}>
                <Link to="/lecturehall" style={styles.link}>
                  Lecture Hall
                </Link>
              </li>
              <li style={styles.navItem}>
                <Link to="/lectureleave" style={styles.link}>
                  Leave Form
                </Link>
              </li>
              <li style={styles.navItem}>
                <Link to="/assignments" style={styles.link}>
                  Assign Lecture
                </Link>
              </li>
            </div>
            <div>
              <li style={styles.navItem}>
                <Link to="/logout" style={styles.link}>
                  Logout
                </Link>
              </li>
            </div>
          </ul>
        </div>
        {children}
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
    minWidth: "200px",
    backgroundColor: "#322d29",
    color: "#ecf0f1",
    padding: "20px",
    boxShadow: "2px 0 10px rgba(0, 0, 0, 0.2)",
    animation: "slideIn 0.5s ease-out",
  },
  sidebarHeader: {
    fontSize: "1.5rem",
    marginBottom: "30px",
    textAlign: "center",
  },
  navList: {
    listStyleType: "none",
    padding: 0,
    height: "87vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  navItem: {
    margin: "10px 0",
    fontSize: "0.9rem",
  },
  link: {
    color: "#ecf0f1",
    textDecoration: "none",
    display: "block",
    padding: "10px",
    borderRadius: "5px",
    transition: "background-color 0.3s",
  },
  mainContent: {
    flex: 1,
    padding: "40px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#2c3e50",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    animation: "fadeIn 1s ease-out",
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
  `;

// Add the global styles
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = globalStyles;
document.head.appendChild(styleSheet);

export default SideBar;
