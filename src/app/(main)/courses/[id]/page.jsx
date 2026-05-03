// 'use client';
import { auth } from "@/lib/auth";
import { useSession } from "@/lib/auth-client";
import { getCourse } from "@/lib/data";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { TbSchool } from "react-icons/tb";

const CourseDetailsPage = async ({ params }) => {
  const { id } = await params;
  const allCourses = await getCourse();
  const course = allCourses.find((c) => c.id == id);

  return (
    <div className="max-w-4xl mx-auto m-5 p-4 border border-gray-100 rounded-2xl shadow">
      <div className="relative w-full h-[400px] mb-4 rounded-2xl overflow-hidden shadow-lg">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-contain"
        />

        {/* 🏷 Category badge */}
        <span className="absolute top-3 left-3 bg-purple-600 text-white text-xs md:text-sm px-4 py-1 rounded-full shadow">
          {course.category}
        </span>
      </div>
      <span
        className={`px-2 py-1 text-sm text-white rounded-full ${course.level === "Beginner" ? "bg-green-500" : course.level === "Intermediate" ? "bg-yellow-500" : "bg-red-500"}`}
      >
        {course.level}
      </span>
      <h1 className="text-3xl font-bold">{course.title}</h1>
      <p className="text-2xl font-semibold flex items-center gap-2">
        <TbSchool />
        {course.instructor}
      </p>
      <p className="text-lg">{course.description}</p>

      <div className="flex items-center text-yellow-500 gap-2 ">
        <FaStar />
        <p>{course.rating} </p>
      </div>
      <p className="text-lg font-semibold">{course.duration} of lessons</p>
      {/* curriculum */}
      <div>

      </div>
    </div>
  );
};

export default CourseDetailsPage;
