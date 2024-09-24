import OptionalRHS from "./OptionalRHS";
import MantaoryLHS from "./MantaoryLHS";
import { CourseDetailsItem } from "../../lib/interfaces";
import IncompleteCoursesDashboard from "../IncompleteCoursesDashboard";
import "../../index.css";

export function CourseListings({ courses }: { courses: CourseDetailsItem[] }) {
  return (
    <div>
      <IncompleteCoursesDashboard
        courses={courses.filter(
          (course) =>
            !course.userStatus.completed && course.userStatus.startDate
        )}
      />

      <div className="flex flex-col md:flex-row w-full mt-5 min-h-fit overflow-hidden">
        <div className="flex-1 p-4">
          <MantaoryLHS
            mandatoryCourses={courses.filter(
              (course) => course.mandatory && !course.userStatus.startDate
            )}
          />{" "}
        </div>
        <div className="flex-1 p-4">
          <OptionalRHS
            optionalItems={courses.filter(
              (course) => !course.mandatory && !course.userStatus.startDate
            )}
          />{" "}
        </div>
      </div>
    </div>
  );
}
