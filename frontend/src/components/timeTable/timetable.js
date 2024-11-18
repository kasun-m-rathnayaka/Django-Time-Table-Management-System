import React, { useState } from "react";

const Timetable = () => {
  const [timetable, setTimetable] = useState([
    { day: "Monday", slots: ["", "", "", "", ""] },
    { day: "Tuesday", slots: ["", "", "", "", ""] },
    { day: "Wednesday", slots: ["", "", "", "", ""] },
    { day: "Thursday", slots: ["", "", "", "", ""] },
    { day: "Friday", slots: ["", "", "", "", ""] },
  ]);

  // Handle input change
  const handleInputChange = (dayIndex, slotIndex, value) => {
    const updatedTimetable = [...timetable];
    updatedTimetable[dayIndex].slots[slotIndex] = value;
    setTimetable(updatedTimetable);
  };

  // Handle form submission
  const handleSave = () => {
    console.log("Saved Timetable:", timetable);
    // Implement save logic here, like sending data to an API
    alert("Timetable saved!");
  };

  // Reset timetable
  const handleReset = () => {
    setTimetable([
      { day: "Monday", slots: ["", "", "", "", ""] },
      { day: "Tuesday", slots: ["", "", "", "", ""] },
      { day: "Wednesday", slots: ["", "", "", "", ""] },
      { day: "Thursday", slots: ["", "", "", "", ""] },
      { day: "Friday", slots: ["", "", "", "", ""] },
    ]);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Timetable Management</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Day</th>
            <th>9:00 - 10:00</th>
            <th>10:00 - 11:00</th>
            <th>11:00 - 12:00</th>
            <th>1:00 - 2:00</th>
            <th>2:00 - 3:00</th>
          </tr>
        </thead>
        <tbody>
          {timetable.map((day, dayIndex) => (
            <tr key={day.day}>
              <td style={styles.dayColumn}>{day.day}</td>
              {day.slots.map((slot, slotIndex) => (
                <td key={slotIndex}>
                  <input
                    type="text"
                    value={slot}
                    onChange={(e) =>
                      handleInputChange(dayIndex, slotIndex, e.target.value)
                    }
                    placeholder="Subject"
                    style={styles.input}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSave} style={styles.button}>
        Save Timetable
      </button>
      <button onClick={handleReset} style={styles.buttonReset}>
        Reset Timetable
      </button>
    </div>
  );
};

// Styling for the timetable
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
  },
  dayColumn: {
    fontWeight: "bold",
    padding: "10px",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "5px",
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
    marginTop: "20px",
  },
  buttonReset: {
    backgroundColor: "#f44336",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginLeft: "10px",
    marginTop: "20px",
  },
};

export default Timetable;
