export const getCourse = async () => {
  const res = await fetch("https://skill-sphere-beige.vercel.app/data.json" , {cache : "no-store"});
  const data = await res.json();
  return data;
};

export const getInstructor = async () => {
  const res = await fetch("https://skill-sphere-beige.vercel.app/instructor.json" , {cache : "no-store"});
  const data = await res.json();
  return data;
}

