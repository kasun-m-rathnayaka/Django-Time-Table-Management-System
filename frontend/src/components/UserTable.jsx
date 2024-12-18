import React from 'react'

// Sample user data
const users = [
  { name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { name: 'Sam Johnson', email: 'sam@example.com', role: 'User' },
];

const UserTable = () => {
  return (
    <div style={styles.mainContent}>
      <div className="w-full h-[100vh] bg-white rounded-md p-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center font-title font-semibold p-2 bg-neutral-300 rounded-md">
            Name
          </div>
          <div className="text-center font-title font-semibold p-2 bg-neutral-300 rounded-md">
            Email
          </div>
          <div className="text-center font-title font-semibold p-2 bg-neutral-300 rounded-md">
            Role
          </div>
          {users.map((user, index) => (
            <React.Fragment key={index}>
              <div className="text-center p-2 bg-neutral-100 rounded-md">
                {user.name}
              </div>
              <div className="text-center p-2 bg-neutral-100 rounded-md">
                {user.email}
              </div>
              <div className="text-center p-2 bg-neutral-100 rounded-md">
                {user.role}
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

export default UserTable