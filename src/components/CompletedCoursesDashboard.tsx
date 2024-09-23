import React from "react";

interface Course {
  id: number;
  title: string;
  description: string;
  completionDate: string;
  certificateUrl: string;
}

const completedCourses: Course[] = [
  {
    id: 1,
    title: "Advanced React",
    description:
      "Dive deep into React.js and learn advanced patterns and techniques.",
    completionDate: "2024-09-01",
    certificateUrl: "https://www.example.com/certificate/1",
  },
  {
    id: 2,
    title: "JavaScript ES6+",
    description: "Master the latest features of JavaScript ES6 and beyond.",
    completionDate: "2024-08-15",
    certificateUrl: "https://www.example.com/certificate/2",
  },
  {
    id: 3,
    title: "Tailwind CSS",
    description: "Build beautiful, responsive UIs using Tailwind CSS.",
    completionDate: "2024-07-30",
    certificateUrl: "https://www.example.com/certificate/3",
  },
  {
    id: 4,
    title: "Tailwind CSS",
    description: "Build beautiful, responsive UIs using Tailwind CSS.",
    completionDate: "2024-07-30",
    certificateUrl: "https://www.example.com/certificate/3",
  },
];

const CompletedCoursesDashboard: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#eafbff] to-[#f0f4f8] p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[#0a0391] text-center mb-10">
          Completed Courses
        </h1>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {completedCourses.map((course) => (
            <div
              key={course.id}
              className="relative bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
                <p className="text-sm mb-4">{course.description}</p>
                <div className="text-sm">
                  <span className="font-semibold">Completed on:</span>{" "}
                  {course.completionDate}
                </div>
                <a
                  href={course.certificateUrl}
                  className="absolute bottom-4 right-4 bg-white text-indigo-600 py-1 px-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompletedCoursesDashboard;
