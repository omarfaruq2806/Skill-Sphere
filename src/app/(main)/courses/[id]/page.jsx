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
      <div className="max-w-4xl mx-auto p-6  space-y-6">
        <h1 className="text-3xl font-bold text-center">
          🌐 Web Development Course Curriculum
        </h1>
        <div>
          <h2 className="text-xl font-semibold">
            🟢 Module 1: Web Fundamentals
          </h2>
          <ul className="list-disc ml-6">
            <li>How the web works (client, server, browser)</li>
            <li>HTTP, HTTPS, DNS basics</li>
            <li>Frontend vs Backend</li>
            <li>Web architecture overview</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">🟡 Module 2: HTML</h2>
          <ul className="list-disc ml-6">
            <li>HTML structure & tags</li>
            <li>Forms and inputs</li>
            <li>Semantic HTML</li>
            <li>Accessibility basics</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">🟠 Module 3: CSS</h2>
          <ul className="list-disc ml-6">
            <li>Box model & selectors</li>
            <li>Flexbox & Grid</li>
            <li>Responsive design</li>
            <li>Tailwind CSS basics</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">🔵 Module 4: JavaScript</h2>
          <ul className="list-disc ml-6">
            <li>Variables, functions, arrays, objects</li>
            <li>DOM manipulation</li>
            <li>Events handling</li>
            <li>Async JS (Promises, async/await)</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">⚛️ Module 5: React.js</h2>
          <ul className="list-disc ml-6">
            <li>Components, props, state</li>
            <li>Hooks (useState, useEffect)</li>
            <li>Routing</li>
            <li>API integration</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">🚀 Module 6: Next.js</h2>
          <ul className="list-disc ml-6">
            <li>File-based routing</li>
            <li>Server vs Client components</li>
            <li>API routes</li>
            <li>Authentication basics</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">🧠 Module 7: Backend</h2>
          <ul className="list-disc ml-6">
            <li>Node.js & Express.js</li>
            <li>REST API design</li>
            <li>JWT authentication</li>
            <li>Middleware</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">🗄 Module 8: Database</h2>
          <ul className="list-disc ml-6">
            <li>MongoDB basics</li>
            <li>Mongoose schema</li>
            <li>CRUD operations</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">🌍 Module 9: Deployment</h2>
          <ul className="list-disc ml-6">
            <li>Deploy frontend (Vercel)</li>
            <li>Deploy backend (Render/Railway)</li>
            <li>Environment variables</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">💼 Final Projects</h2>
          <ul className="list-disc ml-6">
            <li>E-commerce website</li>
            <li>Blog platform</li>
            <li>SaaS dashboard</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
