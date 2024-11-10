import React from "react";

const Signin = () => {
  return (
    <div id="webcrumbs">
      <div className="w-[400px] min-h-[600px] bg-white shadow-lg rounded-lg flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-title text-neutral-950 mb-6">Sign In</h1>

        <form className="w-full flex flex-col gap-6">
          <div className="flex flex-col">
            <label className="text-neutral-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-neutral-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Enter your password"
            />
          </div>

          <button className="bg-primary-500 text-white rounded-md py-2 mt-4 hover:bg-primary-600">
            Sign In
          </button>
        </form>

        <a href="#" className="text-primary-500 text-sm mt-4">
          Forgot password?
        </a>

        <div className="mt-4">
          <p className="text-neutral-700">
            Don't have an account?
            <a href="#" className="text-primary-500 ml-1">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
