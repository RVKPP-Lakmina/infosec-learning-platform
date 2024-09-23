import OptionalRHS from "./OptionalRHS";
import MantaoryLHS from "./MantaoryLHS";
import { CourseDetailsItem } from "../../lib/interfaces";

export function CourseListings({ courses }: { courses: CourseDetailsItem[] }) {
  return (
    <div className="w-full flex flex-4 mt-5 min-h-screen overflow-hidden">
      <div className="flex flex-2">
        <MantaoryLHS mandatoryCourses={courses} />
      </div>
      <div className="flex-1">
        <OptionalRHS optionalItems={courses} />
      </div>
    </div>
  );
}
