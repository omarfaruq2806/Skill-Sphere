import { getInstructor } from "@/lib/data";
import Image from "next/image";

const Instructor = async () => {
  const instructors = await getInstructor();
  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold text-center">Our Top Instructor</h1>
      <div className=" flex gap-6 flex-col items-center p-4">
        {instructors.map((instructor) => (
          <div
            key={instructor.id}
            className="border grid grid-cols-3 p-4 gap-4 rounded-2xl shadow-md "
          >
            <div className="col-span-1 ">
              <Image src={instructor.image} alt={instructor.name} width={300} height={300} className="rounded-2xl"></Image>
            </div>
            <div className="col-span-2 flex flex-col gap-2">
              <h1 className="text-2xl md:text-3xl font-semibold ">{instructor.name}</h1>
              <p className="md:text-lg">{instructor.title}</p>
              <p>{instructor.experience}</p>
              <p>{instructor.students}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructor;
