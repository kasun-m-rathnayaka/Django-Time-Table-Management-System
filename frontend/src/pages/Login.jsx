import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async() => {
    try {
      setLoading(true);
      const res = await api.post("/api/token/", { username, password });
      localStorage.setItem(ACCESS_TOKEN, res.data.access);
      localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
      navigate("/");
    } catch (error) {
      console.log(error)
      toast.error("Invalid credentials");
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="w-[1440px] h-[100vh] bg-white text-primary-50 flex justify-center items-center">
        <div className="w-[400px] h-auto bg-[#f7eded] rounded-lg p-6 flex flex-col justify-start">
          {/* Title Section */}
          <h1 className="font-title text-2xl mb-2">Login</h1>
          <p className="text-sm mb-4">Welcome back!</p>

          {/* Form Section */}
          <div className="w-full space-y-3.5">
            {" "}
            {/* Adjusted margin here */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm pb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="p-2 bg-white text-primary-50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-900"
                placeholder="Enter your email"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-sm pb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="p-2 text-primary-50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-900"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* Forgot Password Link */}
            <div className="text-right mt-0.5">
              <a href="#" className="text-xs text-primary-300 hover:underline">
                Forgot password?
              </a>
            </div>
            {/* Login Button */}
            <button
              className="w-full mt-4 p-2 rounded-md text-center text-primary-50 bg-[#333] text-white"
              onClick={handleLogin}
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </div>

          {/* Separator */}
          <div className="flex items-center mt-4">
            <div className="flex-grow h-px bg-white opacity-50"></div>
            <span className="px-2 text-sm text-primary-50">OR</span>
            <div className="flex-grow h-px bg-white opacity-50"></div>
          </div>

          {/* Google & Github Buttons */}
          <div className="mt-4 flex justify-between gap-3">
            <button className="w-1/2 bg-white text-black py-2 rounded-md flex justify-center items-center gap-2">
              <i className="fa-brands fa-google"></i>
              Google
            </button>
            <button className="w-1/2 bg-[#333] text-white py-2 rounded-md flex justify-center items-center gap-2">
              <i className="fa-brands fa-github"></i>
              GitHub
            </button>
          </div>

          {/* Don't have an account */}
          <div className="mt-4 text-center">
            <p className="text-xs text-primary-50">
              Don't have an account?{" "}
              <a href="#" className="text-primary-300 hover:underline">
                Signup
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
