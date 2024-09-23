import { useEffect, useState } from "react";
import { CourseListings } from "../components/course-listings/CourseListings";
import { getCourseList } from "../services/services";
import { CourseDetailsItem } from "../lib/interfaces";
import Loader from "../components/Loader";

const CoursesPage = () => {
  const userId = "test-user-id";
  const [userAssigendCourses, setUserAssigendCourses] = useState<
    CourseDetailsItem[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getListOfCourses();
  }, []);

  const getListOfCourses = async () => {
    try {
      const response: CourseDetailsItem[] = await getCourseList(userId);
      setUserAssigendCourses(response);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section>
      <CourseListings courses={userAssigendCourses} />
    </section>
  );
};

export default CoursesPage;
