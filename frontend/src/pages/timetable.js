import React from "react";

const Timetable = () => {
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
};

export default Timetable;
