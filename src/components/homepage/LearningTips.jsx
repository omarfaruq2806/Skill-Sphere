import React from "react";
import { CiTimer } from "react-icons/ci";
import { FcIdea } from "react-icons/fc";
import { TbTargetArrow } from "react-icons/tb";
import * as motion from "motion/react-client";

const LearningTips = () => {
  return (
    <div className="container mx-auto px-4 py-10 space-y-5">
      <h1 className="text-3xl font-bold text-center">
        Learning Tips for Success
      </h1>
      <motion.div
        initial={{ opacity: 0, x: 70 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.03 }}
        className="bg-gray-100 p-6 rounded-2xl"
      >
        <h1 className="flex gap-2 items-center text-2xl font-bold">
          <CiTimer className="text-3xl " />
          Time Management
        </h1>
        <p>
          Manage your time wisely by creating a daily study schedule. Use
          techniques like Pomodoro (25 minutes focus + 5 minutes break) to stay
          productive and avoid burnout.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 70 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.03 }}
        className="bg-gray-100 p-6 rounded-2xl"
      >
        <h1 className="flex gap-2 items-center text-2xl font-bold">
          <FcIdea className="text-3xl " />
          Smart Study Techniques
        </h1>
        <p>
          Break your lessons into small, manageable parts. Focus on
          understanding concepts instead of memorizing. Revise regularly to
          strengthen your knowledge.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 70 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.03 }}
        className="bg-gray-100 p-6 rounded-2xl"
      >
        <h1 className="flex gap-2 items-center text-2xl font-bold">
          <TbTargetArrow className="text-3xl " />
          Set Clear Goals
        </h1>
        <p>
          Set short-term and long-term learning goals. This helps you stay
          motivated and track your progress easil
        </p>
      </motion.div>
    </div>
  );
};

export default LearningTips;

// Time Management

// Manage your time wisely by creating a daily study schedule.
// Use techniques like Pomodoro (25 minutes focus + 5 minutes break) to stay productive and avoid burnout.
