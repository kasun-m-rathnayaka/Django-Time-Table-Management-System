import React from "react";

const ViewAdmin = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Admin Overview</h2>
      <p style={styles.text}>
        <strong>Name:</strong> John Doe
      </p>
      <p style={styles.text}>
        <strong>Email:</strong> johndoe@example.com
      </p>
      <p style={styles.text}>
        <strong>Phone:</strong> +1 123-456-7890
      </p>
      <p style={styles.text}>
        <strong>Department:</strong> HR
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px",
    backgroundColor: "#f9f9fc",
    borderRadius: "12px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    margin: "40px auto",
    border: "1px solid #ddd",
  },
  header: {
    fontSize: "2rem",
    color: "#333",
    marginBottom: "20px",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  },
  text: {
    fontSize: "1.1rem",
    color: "#555",
    margin: "8px 0",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
  },
};

export default ViewAdmin;
