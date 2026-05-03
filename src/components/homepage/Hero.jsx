import Link from "next/link";
import React from "react";
import { MdOutlineRocketLaunch } from "react-icons/md";
import * as motion from "motion/react-client";

const Hero = () => {
  return (
    <div className="bg-[url('/top.jpg')] bg-cover bg-center " >
      <div className="container mx-auto h-screen  flex flex-col items-center justify-center ">
        <div className="flex flex-col gap-3 items-center text-white ">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl p-4 md:text-4xl font-bold   text-center"
          >
            Upgrade Your Skills Today with
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold md:text-5xl flex gap-3"
          >
            Skill Sphere{" "}
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <MdOutlineRocketLaunch className="text-4xl md:text-6xl" />
            </motion.span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-4 text-lg  text-gray-100 md:text-3xl"
        >
          Learn from Industry Experts
        </motion.p>

        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-6"
        >
          <Link
            href={"/courses"}
            className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
          >
            Explore Courses
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
