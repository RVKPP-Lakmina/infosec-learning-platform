import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { get } from "http";
import { getCompletedCoursList } from "../services/services";
import { CourseDetailsItem } from "../lib/interfaces";
import moment from "moment";

interface Course {
  id: number;
  title: string;
  description: string;
  completionDate: string;
  certificateUrl: string;
}

const CompletedCoursesDashboard: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [completedCourses, setCompletedCourses] = useState<CourseDetailsItem[]>(
    []
  );
  const userId = "test-user-id";

  useEffect(() => {
    getCompletedCourses();
  }, []);

  const getCompletedCourses = async () => {
    try {
      const response: CourseDetailsItem[] = await getCompletedCoursList(userId);
      setCompletedCourses(response);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!completedCourses.length) return <></>;

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
                  {moment(course.userStatus.completionDate).format(
                    "MMM DD, YYYY"
                  )}
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
