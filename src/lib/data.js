export const getCourse = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  return data;
};

export const getInstructor = async () => {
  const res = await fetch("http://localhost:3000/instructor.json");
  const data = await res.json();
  return data;
}

