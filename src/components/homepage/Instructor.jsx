import { getInstructor } from "@/lib/data";
import Image from "next/image";

const Instructor = async () => {
  const instructors = await getInstructor();
  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold text-center">Meet Our Top Instructor</h1>
      <div className=" flex gap-6 flex-col items-center p-4 ">
        {instructors.map((instructor) => (
          <div
            key={instructor.id}
            className=" bg-white border border-purple-100 shadow-md    grid grid-cols-3 gap-5 p-5 rounded-2xl "
          >
            <div className="col-span-1 flex items-center justify-center">
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
            <div className="col-span-2 flex flex-col justify-center gap-2">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructor;
