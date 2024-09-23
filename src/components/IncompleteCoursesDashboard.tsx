import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Course {
  id: number;
  title: string;
  description: string;
  completionPercentage: number;
}

const incompleteCourses: Course[] = [
  {
    id: 1,
    title: "React for Beginners",
    description:
      "Learn the basics of React, including components, state, and props.",
    completionPercentage: 50,
  },
  {
    id: 2,
    title: "Node.js Fundamentals",
    description: "Introduction to server-side development using Node.js.",
    completionPercentage: 70,
  },
  {
    id: 3,
    title: "Advanced TypeScript",
    description:
      "Deep dive into TypeScript for type-safe JavaScript development.",
    completionPercentage: 30,
  },
];

const generateChartData = (
  completionPercentage: number
): ChartData<"doughnut"> => {
  return {
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        label: "Completion Percentage",
        data: [completionPercentage, 100 - completionPercentage],
        backgroundColor: ["#4CAF50", "#FF7043"],
        hoverOffset: 4,
      },
    ],
  };
};

const IncompleteCoursesDashboard: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#eafbff] to-[#f0f4f8] p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[#0a0391] text-center mb-10">
          Incomplete Courses
        </h1>

        {/* Grid for Incomplete Courses */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {incompleteCourses.map((course) => (
            <div
              key={course.id}
              className="relative bg-gradient-to-r from-cyan-500 to-teal-400 text-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
                <p className="text-sm mb-4">{course.description}</p>
                <div className="mb-4">
                  <h3 className="text-sm font-semibold">Progress</h3>
                  <div className="relative w-32 h-32 mx-auto">
                    <Doughnut
                      data={generateChartData(course.completionPercentage)}
                      options={{
                        cutout: "70%",
                        plugins: {
                          legend: {
                            display: false,
                          },
                        },
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
                      {course.completionPercentage}%
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 bg-white text-teal-600 py-1 px-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Continue Course
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IncompleteCoursesDashboard;
