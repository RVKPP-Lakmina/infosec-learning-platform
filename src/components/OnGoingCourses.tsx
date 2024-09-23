import React from "react";

const OnGoingCourses = () => {
  return (
    <section className="bg-[#eafbff] py-10 px-10">
      <h2 className="text-3xl font-semibold text-[#0a0391] mb-6">
        Ongoing Courses
      </h2>
      <div className="grid grid-cols-3 gap-6">
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-xl font-bold text-[#0f4c81]">Course Title 1</h3>
          <p className="text-gray-600 mt-2">Instructor: John Doe</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-xl font-bold text-[#0f4c81]">Course Title 2</h3>
          <p className="text-gray-600 mt-2">Instructor: Jane Smith</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-xl font-bold text-[#0f4c81]">Course Title 3</h3>
          <p className="text-gray-600 mt-2">Instructor: Alice Johnson</p>
        </div>
      </div>
    </section>
  );
};

export default OnGoingCourses;
