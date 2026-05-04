import React from "react";
import { CiTimer } from "react-icons/ci";
import { FcIdea } from "react-icons/fc";
import { TbTargetArrow } from "react-icons/tb";
import * as motion from "motion/react-client";

const LearningTips = () => {
  return (
    <div className="container mx-auto px-4 py-10 space-y-5 border-b border-gray-200">
      <h1 className="text-3xl font-bold text-center ">
        Learning Tips for Success
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.03 }}
          className="bg-gray-100 p-6 rounded-2xl flex flex-col items-center gap-4 border-4 border-purple-400"
        >
          <CiTimer className="text-[10rem] border-4 border-purple-400 rounded-full text-purple-400 p-4" />
          <h1 className="flex gap-2 items-center text-2xl font-bold text-purple-600">
            Time Management
          </h1 >
          <p>
            Manage your time wisely by creating a daily study schedule. Use
            techniques like Pomodoro (25 minutes focus + 5 minutes break) to
            stay productive and avoid burnout.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.03 }}
          className="bg-gray-100 p-6 rounded-2xl flex flex-col items-center gap-4 border-4 border-purple-400"
        >
          <FcIdea className="text-[10rem] border-4 border-purple-400 rounded-full text-purple-400 p-4"  />
          <h1 className="flex gap-2 items-center text-2xl font-bold text-purple-600">
            Smart Study Techniques
          </h1>
          <p>
            Break your lessons into small, manageable parts. Focus on
            understanding concepts instead of memorizing. Revise regularly to
            strengthen your knowledge.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.03 }}
          className="bg-gray-100 p-6 rounded-2xl flex flex-col items-center gap-4 border-4 border-purple-400"
        >
          <TbTargetArrow className="text-[10rem] border-4 border-purple-400 rounded-full text-purple-400 p-4" />
          <h1 className="flex gap-2 items-center text-2xl font-bold text-purple-600">
            Set Clear Goals
          </h1>
          <p>
            Set short-term and long-term learning goals. This helps you stay
            motivated and track your progress easil
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LearningTips;
