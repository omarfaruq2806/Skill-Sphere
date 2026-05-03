export const getCourse = async () => {
  const res = await fetch("http://localhost:3000/data.json" , {cache : "no-store"});
  const data = await res.json();
  return data;
};

export const getInstructor = async () => {
  const res = await fetch("http://localhost:3000/instructor.json" , {cache : "no-store"});
  const data = await res.json();
  return data;
}

