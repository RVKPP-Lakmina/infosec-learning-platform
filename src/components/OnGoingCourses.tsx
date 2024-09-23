import React from "react";

const OnGoingCourses = () => {
  return (
    <section className="bg-[#eafbff] py-12 px-4 sm:px-8 lg:px-16">
      <h2 className="text-4xl font-semibold text-[#0a0391] mb-8 text-center">
        Ongoing Courses
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-2xl font-bold text-[#0f4c81] mb-4">
            Course Title 1
          </h3>
          <p className="text-gray-700">Instructor: John Doe</p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-2xl font-bold text-[#0f4c81] mb-4">
            Course Title 2
          </h3>
          <p className="text-gray-700">Instructor: Jane Smith</p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-2xl font-bold text-[#0f4c81] mb-4">
            Course Title 3
          </h3>
          <p className="text-gray-700">Instructor: Alice Johnson</p>
        </div>
      </div>
    </section>
  );
};

export default OnGoingCourses;
