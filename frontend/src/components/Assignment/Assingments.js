import React, { useState } from "react";

const Assignments = () => {
  const [assignments, setAssignments] = useState([
    { assignmentName: "", dueDate: "", class: "" },
  ]);

  // Handle input change for each assignment field
  const handleInputChange = (index, field, value) => {
    const updatedAssignments = [...assignments];
    updatedAssignments[index][field] = value;
    setAssignments(updatedAssignments);
  };

  // Add a new row for another assignment
  const handleAddAssignment = () => {
    setAssignments([
      ...assignments,
      { assignmentName: "", dueDate: "", class: "" },
    ]);
  };

  // Save assignments (for example, to a database or console log)
  const handleSave = () => {
    console.log("Saved Assignments:", assignments);
    alert("Assignments saved!");
  };

  // Reset all assignments
  const handleReset = () => {
    setAssignments([{ assignmentName: "", dueDate: "", class: "" }]);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Assignment Management</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Assignment Name</th>
            <th>Due Date</th>
            <th>Class/Group</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((assignment, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={assignment.assignmentName}
                  onChange={(e) =>
                    handleInputChange(index, "assignmentName", e.target.value)
                  }
                  placeholder="Enter assignment name"
                  style={styles.input}
                />
              </td>
              <td>
                <input
                  type="date"
                  value={assignment.dueDate}
                  onChange={(e) =>
                    handleInputChange(index, "dueDate", e.target.value)
                  }
                  style={styles.input}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={assignment.class}
                  onChange={(e) =>
                    handleInputChange(index, "class", e.target.value)
                  }
                  placeholder="Enter class or group"
                  style={styles.input}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddAssignment} style={styles.button}>
        Add Assignment
      </button>
      <button onClick={handleSave} style={styles.button}>
        Save Assignments
      </button>
      <button onClick={handleReset} style={styles.buttonReset}>
        Reset Assignments
      </button>
    </div>
  );
};

// Styling for the assignments page
const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "8px",
    textAlign: "center",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "10px",
  },
  buttonReset: {
    backgroundColor: "#f44336",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Assignments;
