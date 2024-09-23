import OptionalRHS from "./OptionalRHS";
import MantaoryLHS from "./MantaoryLHS";
import { CourseDetailsItem } from "../../lib/interfaces";

export function CourseListings({ courses }: { courses: CourseDetailsItem[] }) {
  return (
    <div className="w-full flex mt-5 min-h-screen overflow-hidden">
      <MantaoryLHS mandatoryCourses={courses} />
      <OptionalRHS optionalItems={courses} />
    </div>
  );
}
