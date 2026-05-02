import React from "react";
import Navlink from "../homepage/Navlink";
import User from "../homepage/User";

const Navbar = () => {
  return (
    <div className="shadow">
      <div className="container mx-auto flex justify-between items-center p-4 ">
      <div>
        <h1 className="text-3xl font-bold text-purple-600">Skill Sphere</h1>
      </div>
      <div className="flex gap-4 items-center font-medium">
        <Navlink href="/">Home</Navlink>
        <Navlink href="/courses">Courses</Navlink>
        <Navlink href="/profile">Profile</Navlink>
      </div>
      <User></User>
    </div>
    </div>
  );
};

export default Navbar;

