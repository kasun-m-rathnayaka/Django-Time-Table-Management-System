import React from "react";

// Sample data
const days = [
  "Time",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const timeSlots = [
  "8:00 AM - 10:00 AM",
  "10:00 AM - 12:00 AM",
  "1:00 AM - 2:00 PM",
  "2:00 PM - 5:00 PM",
  "5:00 PM - 8:00 PM",
];

const data = [
  {
    1: {
      1: "MAT101 - Room 101",
      2: "PHY102 - Room 102",
      3: "CHE103 - Room 103",
      4: "ENG104 - Room 104",
      5: "BIO105 - Room 105",
      6: "HIS106 - Room 106",
      7: "GEO107 - Room 107",
    },
    2: {
      1: "MAT101 - Room 101,",
      2: "PHY102 - Room 102",
      3: "CHE103 - Room 103",
      4: "ENG104 - Room 104",
      5: "BIO105 - Room 105",
      6: "HIS106 - Room 106",
      7: "GEO107 - Room 107",
    },
    3: {
      1: "MAT101 - Room 101",
      2: "PHY102 - Room 102",
      3: "CHE103 - Room 103",
      4: "ENG104 - Room 104",
      5: "BIO105 - Room 105",
      6: "HIS106 - Room 106",
      7: "GEO107 - Room 107",
    },
    4: {
      1: "MAT101 - Room 101",
      2: "PHY102 - Room 102",
      3: "CHE103 - Room 103",
      4: "ENG104 - Room 104",
      5: "BIO105 - Room 105",
      6: "HIS106 - Room 106",
      7: "GEO107 - Room 107",
    },
    5: {
      1: "MAT101 - Room 101",
      2: "PHY102 - Room 102",
      3: "CHE103 - Room 103",
      4: "ENG104 - Room 104",
      5: "BIO105 - Room 105",
      6: "HIS106 - Room 106",
      7: "GEO107 - Room 107",
    },
  },
];

const TimeTable = () => {
  return (
    <div style={styles.mainContent}>
      <div className="w-full h-[100vh] bg-white rounded-md shadow-lg p-6">
        <div className="grid grid-cols-8 gap-2">
          {days.map((day, dayIndex) => (
            <div
              key={day}
              className="text-sm text-center font-title font-semibold p-2 bg-neutral-300 rounded-md"
            >
              {day}
            </div>
          ))}
          {timeSlots.map((slot, slotIndex) => (
            <>
              <div
                key={`Time-${slot}`}
                className="text-sm text-center p-2 bg-neutral-100 rounded-md min-h-32"
              >
                {slot}
              </div>
              {days.slice(1).map((day, dayIndex) => (
                <div
                  key={`${day}-${slot}`}
                  className="text-sm text-center p-2 bg-neutral-100 rounded-md"
                >
                  {data[0][slotIndex + 1][dayIndex + 1]}
                </div>
              ))}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  mainContent: {
    flex: 1,
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

export default TimeTable;
