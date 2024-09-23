import OptionalRHS from "./OptionalRHS";
import MantaoryLHS from "./MantaoryLHS";
import { CourseDetailsItem } from "../../lib/interfaces";
import "../../index.css";

export function CourseListings({ courses }: { courses: CourseDetailsItem[] }) {
  return (
    <div className="flex flex-col md:flex-row w-full mt-5 min-h-screen overflow-hidden">
      <div className="flex-1 p-4">
        <MantaoryLHS mandatoryCourses={courses} />
      </div>
      <div className="flex-1 p-4">
        <OptionalRHS optionalItems={courses} />
      </div>
    </div>
  );
}
