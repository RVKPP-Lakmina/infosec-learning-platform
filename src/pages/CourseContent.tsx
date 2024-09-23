import React, { useState, useEffect } from 'react';

interface CourseContent {
  title: string;
  description: string;
  duration: number; // in seconds
  videoUrl: string;
  imageUrl: string;
}

const CoursePage: React.FC = () => {
  const [courseContent, setCourseContent] = useState<CourseContent>({
    title: "Understanding Server-Side Rendering (SSR)",
    description: "In this course, we will dive deep into the concept of Server-Side Rendering (SSR) and how it works in modern web applications.",
    duration: 300, // 5 minutes video
    videoUrl: "https://www.example.com/video.mp4",
    imageUrl: "https://via.placeholder.com/800x400.png?text=Course+Image",
  });

  const [timeWatched, setTimeWatched] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (timeWatched >= courseContent.duration) {
      setIsCompleted(true);
    }
  }, [timeWatched, courseContent.duration]);

  const handleTimeUpdate = (event: React.SyntheticEvent<HTMLVideoElement>) => {
    const videoElement = event.currentTarget;
    setTimeWatched(videoElement.currentTime);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Course Title and Description */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#0a0391] mb-4">{courseContent.title}</h1>
        <p className="text-lg text-gray-700">{courseContent.description}</p>
      </div>

      {/* Course Image */}
      <div className="mb-8">
        {/* <img
          src={courseContent.imageUrl}
          alt="Course related"
          className="rounded-lg shadow-lg w-full h-auto"
        /> */}
      </div>

      {/* Video Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Course Video</h2>
        <video
          className="w-40 rounded-lg shadow-lg"
          controls
          onTimeUpdate={handleTimeUpdate}
        >
          <source src={courseContent.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="mt-4 text-gray-600">
          Time Watched: {Math.floor(timeWatched)} seconds / {courseContent.duration} seconds
        </div>
      </div>

      {/* Completion Status */}
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
    </div>
  );
};

export default CoursePage;
