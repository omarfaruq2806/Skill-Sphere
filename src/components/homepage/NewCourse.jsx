import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { TbClockHour4 } from "react-icons/tb";
import * as motion from "motion/react-client";

const NewCourse = () => {
  return (
    <>
    <h1 className="text-3xl font-bold text-center pt-4">New Release Course</h1>
    <div className="container mx-auto  py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white border border-purple-200 rounded-2xl shadow  shadow-purple-200  overflow-hidden  gap-4 p-4"
      >
        <div className="relative w-full h-60">
          <Image
            src="/fullstack.png"
            alt="course"
            fill
            className="object-cover rounded-2xl"
          />
          <span className="absolute top-3 left-3 bg-purple-500 text-white text-xs px-3 py-1 rounded-full shadow">
            New Release
          </span>
        </div>
        <div className="p-5 space-y-3">
          <h2 className="text-xl font-bold text-gray-800">
            Complete Web Development
          </h2>

          <p className="text-gray-600 text-sm">
            Learn modern web development from basics to advanced level with real
            projects.
          </p>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-500" />
              <span>4.8</span>
            </div>

            <div className="flex items-center gap-1">
              <TbClockHour4 />
              <span>12h 30m</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-lg font-bold text-purple-600">$49</span>

            <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition">
              View Course
            </button>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white border border-purple-200 rounded-2xl shadow-md overflow-hidden p-4"
      >
        <div className="relative w-full h-60">
          <Image
            src="/frontend.jpg"
            alt="frontend course"
            fill
            className="object-cover rounded-2xl"
          />
          <span className="absolute top-3 left-3 bg-purple-500 text-white text-xs px-3 py-1 rounded-full">
            New Release
          </span>
        </div>

        <div className="p-5 space-y-3">
          <h2 className="text-xl font-bold">Frontend Mastery</h2>

          <p className="text-gray-600 text-sm">
            Master HTML, CSS, Tailwind & React with real projects.
          </p>

          <div className="flex justify-between text-sm text-gray-500">
            <span>⭐ 4.7</span>
            <span>10h 20m</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-purple-600 font-bold">$39</span>
            <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">
              View Course
            </button>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="bg-white border border-purple-200 rounded-2xl shadow-md overflow-hidden p-4"
      >
        <div className="relative w-full h-60">
          <Image
            src="/backend.png"
            alt="backend course"
            fill
            className="object-cover rounded-2xl"
          />
          <span className="absolute top-3 left-3 bg-purple-500 text-white text-xs px-3 py-1 rounded-full">
            New Release
          </span>
        </div>

        <div className="p-5 space-y-3">
          <h2 className="text-xl font-bold">Backend Development</h2>

          <p className="text-gray-600 text-sm">
            Learn Node.js, Express & Database with real API projects.
          </p>

          <div className="flex justify-between text-sm text-gray-500">
            <span>⭐ 4.9</span>
            <span>14h 10m</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-purple-600 font-bold">$59</span>
            <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">
              View Course
            </button>
          </div>
        </div>
      </motion.div>
    </div>
    </>
  );
};

export default NewCourse;
