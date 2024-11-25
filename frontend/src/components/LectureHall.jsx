import React from 'react'
import LectureHall from '../pages/LectureHall';

// Sample lecture hall data
const lectureHalls = [
  { name: 'Lecture Hall 1', capacity: 100, location: 'Building A' },
  { name: 'Lecture Hall 2', capacity: 150, location: 'Building B' },
  { name: 'Lecture Hall 3', capacity: 200, location: 'Building C' },
];

const LectureHallTable = () => {
  return (
    <div style={styles.mainContent}>
      <div className="w-full h-[100vh] bg-white rounded-md p-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center font-title font-semibold p-2 bg-neutral-300 rounded-md">
            Name
          </div>
          <div className="text-center font-title font-semibold p-2 bg-neutral-300 rounded-md">
            Capacity
          </div>
          <div className="text-center font-title font-semibold p-2 bg-neutral-300 rounded-md">
            Location
          </div>
          {lectureHalls.map((hall, index) => (
            <React.Fragment key={index}>
              <div className="text-center p-2 bg-neutral-100 rounded-md">
                {hall.name}
              </div>
              <div className="text-center p-2 bg-neutral-100 rounded-md">
                {hall.capacity}
              </div>
              <div className="text-center p-2 bg-neutral-100 rounded-md">
                {hall.location}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

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

export default LectureHallTable