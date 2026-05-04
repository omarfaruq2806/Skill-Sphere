import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { FaStar } from "react-icons/fa";
import { TbSchool } from "react-icons/tb";
import * as motion from "motion/react-client";

const Course = ({ course }) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="border border-gray-100 p-4 rounded-2xl space-y-1 shadow-md "
      >
        <div className="relative w-full h-[220px] rounded-xl  shadow">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-contain rounded-2xl"
          />
          <span className="absolute top-2 left-2 bg-purple-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
            {course.category}
          </span>
        </div>
        <div className="mt-2">
          <span
            className={`px-2 py-1 text-sm text-white rounded-full ${course.level === "Beginner" ? "bg-green-500" : course.level === "Intermediate" ? "bg-yellow-500" : "bg-red-500"}`}
          >
            {course.level}
          </span>
        </div>
        <h1 className="text-2xl font-bold">{course.title}</h1>
        <p>{course.description}</p>
        <p className="flex items-center gap-2 text-lg font-semibold">
          <TbSchool />
          {course.instructor}
        </p>
        <div className="flex items-center text-yellow-500 gap-2 ">
          <FaStar />
          <p>{course.rating} </p>
        </div>

        <div className="">
          <Link href={`/courses/${course.id}`}>
            <button className="btn btn-outline border-purple-400 w-full block text-purple-500">
              Details
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Course;
