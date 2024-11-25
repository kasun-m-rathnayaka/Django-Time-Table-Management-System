import React, { useState } from "react";
import SideBar from "../components/SideBar";

const LectureLeave = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    description: "",
    duration: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
  };

  return (
    <SideBar title={"Lecture Leave"}>
      <div id="webcrumbs" className="w-full">
        <div className="p-10 bg-white">
          <h1 className="font-title text-2xl mb-2">
            Lecture Leave Allocation Form
          </h1>
          <p className="mb-6 text-sm">
            Fill out the form below to request leave and allocate alternate
            arrangements for your lectures.
          </p>
          <form className="space-y-6">
            <div className="sm:flex sm:space-x-4">
              <div className="sm:w-1/2">
                <label htmlFor="name" className="block mb-2">
                  Lecture Name
                </label>
                <select
                  id="lecture"
                  name="lecture"
                  className="w-full px-4 h-[44px] border rounded-md text-black"
                  defaultValue=""
                  required
                  handleChange={(e) => setFormData({ ...formData, name: e.target.value })}
                >
                  <option value="" disabled>
                    Select your lecture
                  </option>
                  <option value="Argentina">Mahesh Frenando</option>
                </select>
              </div>
              <div className="sm:w-1/2">
                <label htmlFor="date" className="block mb-2">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="w-full px-4 h-[44px] border rounded-md text-black"
                  placeholder="john.doe@example.com"
                  handleChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                />
              </div>
            </div>
            <div className="sm:flex sm:space-x-4">
              <div className="sm:w-1/2">
                <label htmlFor="phone" className="block mb-2">
                  Description
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  className="w-full px-4 h-[44px] border rounded-md text-black"
                  placeholder="Enter a brief description"
                  pattern="d*"
                  required
                />
              </div>
              <div className="sm:w-1/2">
                <label htmlFor="country" className="block mb-2">
                  Allocated Lecture Name
                </label>
                <select
                  id="lecture"
                  name="lecture"
                  className="w-full px-4 h-[44px] border rounded-md text-black"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select your lecture
                  </option>
                  <option value="Argentina">Mahesh Frenando</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between">
              <button
                type="reset"
                className="w-1/2 px-4 h-[44px] mr-2 bg-neutral-50 border border-neutral-400 rounded-md shadow-xs transition-transform duration-100 ease-in-out hover:translate-y-0.4"
              >
                Reset
              </button>
              <button
                type="submit"
                className="w-1/2 px-4 h-[44px] ml-2 bg-primary-black text-primary-white rounded-md shadow-xs transition-transform duration-100 ease-in-out hover:translate-y-0.4"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </SideBar>
  );
};
export default LectureLeave;
