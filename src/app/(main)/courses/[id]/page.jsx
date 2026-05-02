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
  // const session = await auth.api.getSession({
  //   headers: await headers(),
  // });

  // if (!session) {
  //   redirect("/login");
  // }

  const { id } = await params;
  const allCourses = await getCourse();
  const course = allCourses.find((c) => c.id == id);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div>
        <h1>there is course image</h1>
        <span>{course.category}</span>
        {/* <Image src={course.image} width={200} height={200}></Image> */}
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
    </div>
  );
};

export default CourseDetailsPage;
/*
"id": 2,
"title": "UI/UX Design Fundamentals",
"instructor": "Sarah Smith",
"duration": "12 hours",
"rating": 4.7,
"level": "Beginner",
"description": "Master the basics of user interface and user experience design.",
"image": "https://i.postimg.cc/3x3QzSGq/uiux.jpg",
"category": "Design"
*/
