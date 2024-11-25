import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center flex-col">
        <h1 className="text-5xl font-title font-bold py-5 text-primary-black">404: Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>
    </>
  );
};

export default NotFound;
