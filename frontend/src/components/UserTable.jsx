import React from 'react'

const UserTable = () => {
  return (
    <div style={styles.mainContent}>
      <div className="w-full h-[100vh] bg-white rounded-md shadow-lg p-6">
        {" "}
        <div className="grid grid-cols-7 gap-4">
          <div className="text-center font-title font-semibold p-2 bg-neutral-300 rounded-md">
            Monday
          </div>
          <div className="text-center font-title font-semibold p-2 bg-neutral-300 rounded-md">
            Tuesday
          </div>
          <div className="text-center font-title font-semibold p-2 bg-neutral-300 rounded-md">
            Wednesday
          </div>
          <div className="text-center font-title font-semibold p-2 bg-neutral-300 rounded-md">
            Thursday
          </div>
          <div className="text-center font-title font-semibold p-2 bg-neutral-300 rounded-md">
            Friday
          </div>
          <div className="text-center font-title font-semibold p-2 bg-neutral-300 rounded-md">
            Saturday
          </div>
          <div className="text-center font-title font-semibold p-2 bg-neutral-300 rounded-md">
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

export default UserTable