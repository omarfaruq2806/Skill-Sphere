import { getCourse } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import { TbSchool } from "react-icons/tb";
import * as motion from "motion/react-client"



const PopularCourse = async () => {
  const allCourses = await getCourse();
  const topCourse = allCourses.sort((a, b) => b.rating - a.rating).slice(0, 3);
  
  return (
    <div className="container mx-auto py-10 border-b border-gray-200">
      <h1 className="text-3xl font-bold text-center p-4">Our Popular Course</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {topCourse.map((course) => {
          return (
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.03 }}
            key={course.id}>
              <div className="border border-gray-100 p-4 rounded-2xl space-y-1 shadow-md ">
                <div className="relative w-full h-[220px] rounded-xl  shadow">
                  
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-contain rounded-2xl"
                  />
                  <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded-full shadow flex items-center gap-1 text-yellow-500 text-sm">
                    <FaStar /> {course.rating}
                  </div>
                  <span className="absolute top-2 left-2 bg-purple-500 text-white text-xs px-3 py-1 rounded-full shadow">
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

                <div className="">
                  <Link href={`/courses/${course.id}`}>
                    <button className="btn btn-outline border-purple-400 w-full block text-purple-500">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularCourse;
