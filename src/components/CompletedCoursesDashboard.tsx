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

/**
 * `CompletedCoursesDashboard` is a React functional component that displays a list of completed courses for a user.
 * 
 * The component uses the `useEffect` hook to fetch the list of completed courses when the component is first mounted.
 * 
 * @component
 * @example
 * return (
 *   <CompletedCoursesDashboard />
 * )
 * 
 * @remarks
 * The `useEffect` hook in this component is used to perform a side effect, specifically fetching data from an API.
 * It runs only once after the initial render, as indicated by the empty dependency array `[]`.
 * This ensures that the `getCompletedCourses` function is called only once to fetch the data when the component mounts.
 * 
 * The `getCompletedCourses` function is an asynchronous function that fetches the list of completed courses for a user.
 * It updates the state with the fetched data and handles loading state.
 * 
 * The component conditionally renders a loader while the data is being fetched and displays the list of completed courses once the data is available.
 */
const CompletedCoursesDashboard: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [completedCourses, setCompletedCourses] = useState<CourseDetailsItem[]>(
    []
  );
  const userId = "test-user-id";

  useEffect(() => {
    getCompletedCourses();
  }, []);

  /**
   * Fetches the list of completed courses for the current user.
   * 
   * This function makes an asynchronous call to retrieve the completed courses
   * for the user identified by `userId`. Upon successful retrieval, it updates
   * the state with the list of completed courses. If an error occurs during the
   * fetch operation, it is caught and handled silently. Regardless of success
   * or failure, the loading state is set to false once the operation is complete.
   * 
   * @async
   * @function getCompletedCourses
   * @returns {Promise<void>} A promise that resolves when the operation is complete.
   */
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
