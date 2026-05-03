import React from "react";
import Navlink from "../homepage/Navlink";
import User from "../homepage/User";

const Navbar = () => {
  return (
    <div className="px-2 md:px-10 shadow">
      <div className=" navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <div
              tabIndex="-1"
              className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-80  gap-2 p-4 shadow flex flex-col items-center font-medium"
            >
              <Navlink href="/">Home</Navlink>
              <Navlink href="/courses">Courses</Navlink>
              <Navlink href="/profile">Profile</Navlink>
              <User></User>
            </div>
          </div>
          <h1 className="text-lg md:text-3xl font-bold text-purple-600 ">SkillSphere</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="flex flex-col md:flex-row gap-4 items-center font-medium">
            <Navlink href="/">Home</Navlink>
            <Navlink href="/courses">Courses</Navlink>
            <Navlink href="/profile">Profile</Navlink>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <User></User>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
