import Course from "@/components/allcoursepage/Course";
import { getCourse } from "@/lib/data";
import React from "react";

const page = async () => {
  const allCourses = await getCourse();
  // console.log(allCourses)

  return (
    <div>
      <h1 className="text-3xl p-4 font-bold text-center">All Courses</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {allCourses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default page;
