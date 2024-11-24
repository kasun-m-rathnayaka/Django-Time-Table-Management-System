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
      <div id="webcrumbs">
        <div className="w-[800px] bg-white rounded-lg shadow-lg p-6">
          {" "}
          <div className="grid grid-cols-7 gap-4">
            <div className="text-center font-title font-semibold p-2 bg-neutral-300 rounded-full">
              Monday
            </div>
            <div className="text-center font-title font-semibold p-2 bg-neutral-300 rounded-full">
              Tuesday
            </div>
            <div className="text-center font-title font-semibold p-2 bg-neutral-300 rounded-full">
              Wednesday
            </div>
            <div className="text-center font-title font-semibold p-2 bg-neutral-300 rounded-full">
              Thursday
            </div>
            <div className="text-center font-title font-semibold p-2 bg-neutral-300 rounded-full">
              Friday
            </div>
            <div className="text-center font-title font-semibold p-2 bg-neutral-300 rounded-full">
              Saturday
            </div>
            <div className="text-center font-title font-semibold p-2 bg-neutral-300 rounded-full">
              Sunday
            </div>

            <div className="text-center p-2 bg-neutral-100 rounded-md">
              9:00 AM - 10:00 AM
            </div>
            <div className="text-center p-2 bg-neutral-100 rounded-md">
              9:00 AM - 10:00 AM
            </div>
            <div className="text-center p-2 bg-neutral-100 rounded-md">
              9:00 AM - 10:00 AM
            </div>
            <div className="text-center p-2 bg-neutral-100 rounded-md">
              9:00 AM - 10:00 AM
            </div>
            <div className="text-center p-2 bg-neutral-100 rounded-md">
              9:00 AM - 10:00 AM
            </div>
            <div className="text-center p-2 bg-neutral-100 rounded-md">
              9:00 AM - 10:00 AM
            </div>
            <div className="text-center p-2 bg-neutral-100 rounded-md">
              9:00 AM - 10:00 AM
            </div>

            <div className="text-center p-2 bg-neutral-100 rounded-md">
              10:00 AM - 11:00 AM
            </div>
            <div className="text-center p-2 bg-neutral-100 rounded-md">
              10:00 AM - 11:00 AM
            </div>
            <div className="text-center p-2 bg-neutral-100 rounded-md">
              10:00 AM - 11:00 AM
            </div>
            <div className="text-center p-2 bg-neutral-100 rounded-md">
              10:00 AM - 11:00 AM
            </div>
            <div className="text-center p-2 bg-neutral-100 rounded-md">
              10:00 AM - 11:00 AM
            </div>
            <div className="text-center p-2 bg-neutral-100 rounded-md">
              10:00 AM - 11:00 AM
            </div>
            <div className="text-center p-2 bg-neutral-100 rounded-md">
              10:00 AM - 11:00 AM
            </div>

            <div className="text-center p-2 bg-neutral-100 rounded-md">
              11:00 AM - 12:00 PM
            </div>
            <div className="text-center p-2 bg-neutral-100 rounded-md">
              11:00 AM - 12:00 PM
            </div>
            <div className="text-center p-2 bg-neutral-100 rounded-md">
              11:00 AM - 12:00 PM
            </div>
            <div className="text-center p-2 bg-neutral-100 rounded-md">
              11:00 AM - 12:00 PM
            </div>
            <div className="text-center p-2 bg-neutral-100 rounded-md">
              11:00 AM - 12:00 PM
            </div>
            <div className="text-center p-2 bg-neutral-100 rounded-md">
              11:00 AM - 12:00 PM
            </div>
            <div className="text-center p-2 bg-neutral-100 rounded-md">
              11:00 AM - 12:00 PM
            </div>

            <div className="text-center p-2 bg-neutral-100 rounded-md">
              12:00 PM - 1:00 PM
            </div>
            <div className="text-center p-2 bg-neutral-100 rounded-md">
              12:00 PM - 1:00 PM
            </div>
            <div className="text-center p-2 bg-neutral-100 rounded-md">
              12:00 PM - 1:00 PM
            </div>
            <div className="text-center p-2 bg-neutral-100 rounded-md">
              12:00 PM - 1:00 PM
            </div>
            <div className="text-center p-2 bg-neutral-100 rounded-md">
              12:00 PM - 1:00 PM
            </div>
            <div className="text-center p-2 bg-neutral-100 rounded-md">
              12:00 PM - 1:00 PM
            </div>
            <div className="text-center p-2 bg-neutral-100 rounded-md">
              12:00 PM - 1:00 PM
            </div>
          </div>
        </div>
      </div>
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
