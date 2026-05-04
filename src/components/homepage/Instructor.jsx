import { getInstructor } from "@/lib/data";
import Image from "next/image";
import * as motion from "motion/react-client";

const Instructor = async () => {
  const instructors = await getInstructor();
  return (
    <div className="container mx-auto py-10  space-y-5 border-b border-gray-200">
      <h1 className="text-3xl font-bold text-center">
        Meet Our Top Instructor
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 ">
        {instructors.map((instructor) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.03 }}
            key={instructor.id}
            className=" bg-white border border-purple-100 shadow-md grid gap-5 p-5 rounded-2xl "
          >
            <div className=" flex items-center justify-center">
              <div className="relative">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  width={200}
                  height={200}
                  className="rounded-2xl object-cover border-4 border-purple-200 group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-3 py-1 rounded-full shadow">
                  Expert
                </span>
              </div>
            </div>
            <div className=" flex flex-col justify-center items-center gap-6">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 group-hover:text-purple-600 transition">
                {instructor.name}
              </h1>

              <p className="text-purple-500 font-semibold text-sm md:text-base">
                {instructor.title}
              </p>

              <div className="text-gray-600 text-sm space-y-1">
                <p>🎓 {instructor.experience}</p>
                <p>👨‍🎓 {instructor.students}</p>
              </div>
              <button className="mt-3 w-fit px-4 py-2 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 transition">
                View Profile
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Instructor;
