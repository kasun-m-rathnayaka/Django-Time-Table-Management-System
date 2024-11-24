import React, { useState } from "react";

const LectureLeave = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    reason: "",
    duration: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", date: "", reason: "", duration: "" });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Lecture Leave Application Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
            placeholder="Enter your name"
          />
        </label>

        <label style={styles.label}>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>

        <label style={styles.label}>
          Duration:
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
            style={styles.input}
            placeholder="Enter leave days"
          />
        </label>

        <label style={styles.label}>
          Reason:
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
            style={styles.textarea}
            placeholder="Enter reason for leave"
          />
        </label>

        <button type="submit" style={styles.button}>
          Submit
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
  textarea: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    width: "100%",
    fontSize: "1rem",
    marginTop: "5px",
    resize: "vertical",
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

export default LectureLeave;
