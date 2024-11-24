import React, { useState } from "react";

const Lecture = () => {
  const [adminData, setAdminData] = useState({
    name: "",
    email: "",
    role: "Admin",
    phone: "",
    department: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminData({ ...adminData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Admin added:", adminData);
    // Reset form after submission
    setAdminData({
      name: "",
      email: "",
      role: "Admin",
      phone: "",
      department: "",
    });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Add New Admin</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Name:
          <input
            type="text"
            name="name"
            value={adminData.name}
            onChange={handleChange}
            required
            style={styles.input}
            placeholder="Enter admin name"
          />
        </label>

        <label style={styles.label}>
          Email:
          <input
            type="email"
            name="email"
            value={adminData.email}
            onChange={handleChange}
            required
            style={styles.input}
            placeholder="Enter admin email"
          />
        </label>

        <label style={styles.label}>
          Phone:
          <input
            type="tel"
            name="phone"
            value={adminData.phone}
            onChange={handleChange}
            required
            style={styles.input}
            placeholder="Enter admin phone"
          />
        </label>

        <label style={styles.label}>
          Department:
          <input
            type="text"
            name="department"
            value={adminData.department}
            onChange={handleChange}
            required
            style={styles.input}
            placeholder="Enter department"
          />
        </label>

        <button type="submit" style={styles.button}>
          Add Admin
        </button>
      </form>
    </div>
  );
};

// Styling for the form
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px",
    backgroundColor: "#f4f4f9",
    borderRadius: "10px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    maxWidth: "500px",
    margin: "auto",
  },
  header: {
    fontSize: "1.8rem",
    color: "#333",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  label: {
    marginBottom: "15px",
    color: "#555",
    fontWeight: "bold",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    width: "100%",
    fontSize: "1rem",
    marginTop: "5px",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    fontSize: "1rem",
    cursor: "pointer",
    marginTop: "20px",
  },
};

export default Lecture;
