import Link from "next/link";
import React from "react";
import { MdOutlineRocketLaunch } from "react-icons/md";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600">
      <div className="container mx-auto h-screen  flex flex-col items-center justify-center ">
        <div className="flex flex-col gap-3 items-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold   ">
            Upgrade Your Skills Today with
          </h1>
          <h1 className="text-4xl font-bold md:text-5xl flex gap-3">
            Skill Sphere <MdOutlineRocketLaunch className="text-6xl" />
          </h1>
        </div>

        <p className="mt-4  text-gray-100 text-3xl">
          Learn from Industry Experts
        </p>

        <div className="mt-6">
          <Link
            href={"/courses"}
            className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
          >
            Explore Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
