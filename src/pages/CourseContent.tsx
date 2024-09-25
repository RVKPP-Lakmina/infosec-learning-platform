import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCourseById, updateCourseData } from "../services/services";
import Loader from "../components/Loader";
import moment from "moment";

const CoursePage: React.FC = () => {
  const [userCourse, setUserCourse] = useState<any>(undefined);
  const { id }: any = useParams();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCourse();
  }, []);

  const getCourse = async () => {
    try {
      const response: any = await getCourseById(id);
      setUserCourse(response);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!userCourse) {
    return <></>;
  }

  return <CourseContentChild userCourse={userCourse} />;
};
export default CoursePage;

const CourseContentChild = ({ userCourse }: any) => {
  const [timeWatched, setTimeWatched] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const totalDuration = userCourse.courseDetails.duration;
  const progressPercentage = (timeWatched / totalDuration) * 100;
  const apiDuration = [10, 25, 50, 75];
  const { id }: any = useParams();

  const handleEvents = async () => {
    let data = undefined;

    if (apiDuration.includes(progressPercentage)) {
      data = {
        prcentageCompleted: progressPercentage,
      };
      alert("You have completed " + progressPercentage + "% of the course");
    }

    if (progressPercentage === 100) {
      data = {
        prcentageCompleted: progressPercentage,
        completionDate: moment(),
        completed: true,
      };
    }

    if (data) {
      await updateCourseData(id, data);
    }
  };

  useEffect(() => {
    handleEvents();
  }, [progressPercentage]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeWatched((prevTime) => {
        const newTime = prevTime + 1;
        if (newTime >= totalDuration) {
          setIsCompleted(true);
          clearInterval(intervalId);
          return totalDuration;
        }
        return newTime;
      });
    }, 100);
    return () => clearInterval(intervalId);
  }, [totalDuration]);

  return (
    <div className="container mx-auto p-6">
      <div className="flex">
        <div className="w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Course Video</h2>
          <div className="aspect-video rounded-lg shadow-lg">
            <iframe
              id="youtube-player"
              className="w-full h-full"
              src={userCourse.courseContent.videoUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-blue-600 h-4 rounded-full"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="text-gray-600 mt-2">
              {Math.floor(progressPercentage)}% Completed
            </div>
          </div>
        </div>

        <div className="w-1/2 mt-8 pl-6">
          <h1 className="text-4xl font-bold text-[#0a0391] mb-4">
            {userCourse.courseDetails.title}
          </h1>
          <p className="text-lg text-gray-700">
            {userCourse.courseContent.description}
          </p>
        </div>
      </div>

      <div className="mt-8">
        {isCompleted ? (
          <div className="bg-green-100 text-green-800 p-4 rounded-lg">
            🎉 Congratulations! You have successfully completed the course.
          </div>
        ) : (
          <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg">
            ⏳ Keep going! Complete the video to finish the course.
          </div>
        )}
      </div>

      <div className="mt-6">
        <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow hover:bg-blue-700 transition duration-200">
          Take the quiz
        </button>
      </div>
    </div>
  );
};
