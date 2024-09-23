import { CourseDetailsItem, CourseDetailsItems } from "../../lib/interfaces";
import { BentoGrid } from "../ui/BentoGrid";
import CourseListItem from "./CourseListItem";

const MantaoryLHS: React.FC<CourseDetailsItems> = ({
  mandatoryCourses,
}: {
  mandatoryCourses: CourseDetailsItem[];
}) => {
  return (
    <div className=" px-5 gap-3 h-screen overflow-auto sm:px-4 md:px-8 lg:px-16 xl:px-24 py-8">
      <div className="sticky top-0 bg-white gap-4 divide-y divide-dashed">
        <h1 className="font-semibold text-[#0a0391]">MANDATORY COURSES</h1>
        <div className="">SEARCH</div>
      </div>
      <div className="">
        <BentoGrid className="mx-auto mt-5 flex flex-col">
          {mandatoryCourses.map((item: CourseDetailsItem, i) => (
            <CourseListItem
              key={item?.id || i}
              title={item.title}
              description={item.description}
              // className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              courseDetailsItem={item}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
};

export default MantaoryLHS;
