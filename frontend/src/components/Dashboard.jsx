import React from "react";

const Dashboard = () => {
  return (
    <div id="webcrumbs">
      <div className="flex h-[100vh]">
        <div className="bg-white w-[250px] rounded-lg shadow-lg sticky top-0 flex flex-col transition-all duration-300">
          <div className="flex items-center justify-between p-4 border-b">
            <img
              src="https://tools-api.webcrumbs.org/image-placeholder/40/40/avatar/1"
              alt="Avatar"
              className="w-[40px] h-[40px] rounded-full object-cover"
            />
            <button className="rounded-full bg-primary text-white w-[30px] h-[30px] flex items-center justify-center">
              <span className="material-symbols-outlined">logout</span>
            </button>
          </div>
          <nav className="flex flex-col">
            <a
              href="#"
              className="flex items-center p-3 rounded-md hover:bg-gray-200 transition"
            >
              <span className="material-symbols-outlined">home</span>
              <span className="ml-2">Home</span>
            </a>
            <a
              href="#"
              className="flex items-center p-3 rounded-md hover:bg-gray-200 transition"
            >
              <span className="material-symbols-outlined">settings</span>
              <span className="ml-2">Settings</span>
            </a>
            <a
              href="#"
              className="flex items-center p-3 rounded-md hover:bg-gray-200 transition"
            >
              <span className="material-symbols-outlined">notifications</span>
              <span className="ml-2">Notifications</span>
            </a>
            <a
              href="#"
              className="flex items-center p-3 rounded-md hover:bg-gray-200 transition"
            >
              <span className="material-symbols-outlined">help</span>
              <span className="ml-2">Help</span>
            </a>
          </nav>
        </div>

        <div className="flex-grow p-6">
          <h1 className="text-4xl font-title font-semibold mb-4">Dashboard</h1>
          <p className="mb-6">
            Welcome to your dashboard. Here you can manage your projects and
            view notifications.
          </p>
          {/* Other dashboard content */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
