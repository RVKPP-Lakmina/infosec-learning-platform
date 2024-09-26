import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { CourseDetailsItem } from "../lib/interfaces";
import { useNavigate } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);

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

/**
 * IncompleteCoursesDashboard component displays a list of ongoing courses.
 * 
 * @param {Object} props - The component props.
 * @param {CourseDetailsItem[]} props.courses - An array of course details to be displayed.
 * 
 * @returns {JSX.Element} A JSX element representing the dashboard of incomplete courses.
 * 
 * This component renders a grid of course cards, each showing the course title, description,
 * and a progress doughnut chart. If there are no courses, it returns an empty fragment.
 * 
 * Each course card includes a "Continue Course" button that navigates to the course's detail page.
 * The progress doughnut chart is generated using the `generateChartData` function and displays
 * the percentage of course completion.
 * 
 * The component uses Tailwind CSS for styling and includes hover and transition effects for
 * better user experience.
 */
const IncompleteCoursesDashboard = ({
  courses,
}: {
  courses: CourseDetailsItem[];
}) => {
  const navigate = useNavigate();

  if (!courses.length) {
    return <></>;
  }
  
  return (
    <div className="bg-gradient-to-r from-[#eafbff] to-[#f0f4f8] p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[#0a0391] text-center mb-10">
          Ongoing Courses
        </h1>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
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
                      data={generateChartData(
                        course.userStatus.prcentageCompleted
                      )}
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
                      {course.userStatus.prcentageCompleted}%
                    </div>
                  </div>
                </div>
              </div>
              <div
                onClick={() => {
                  navigate(`/courses/${course.id}`);
                }}
                className="absolute bottom-4 right-4 bg-white text-teal-600 py-1 px-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
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
