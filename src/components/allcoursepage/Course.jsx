import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import { TbSchool } from "react-icons/tb";

const Course = ({ course }) => {
  return (
    <div className="border border-gray-100 p-4 rounded-2xl space-y-1 shadow-md ">
      <div>
        {/* <Image src={course.image} width={200} height={200}></Image> */}
        <span className="bg-purple-400 text-white text-xs px-2 py-1 rounded-2xl">
          {course.category}
        </span>
      </div>
      <span
        className={`px-2 py-1 text-sm text-white rounded-full ${course.level === "Beginner" ? "bg-green-500" : course.level === "Intermediate" ? "bg-yellow-500" : "bg-red-500"}`}
      >
        {course.level}
      </span>
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
    </div>
  );
};

export default Course;


