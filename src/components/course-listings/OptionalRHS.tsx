import { BentoGrid } from "../ui/BentoGrid";
import { CourseDetailsItem } from "../../lib/interfaces";
import CourseListItem from "./CourseListItem";

const OptionalRHS = ({
  optionalItems,
}: {
  optionalItems: CourseDetailsItem[];
}) => {
  return (
    <div>
      <div className="sticky py-2 flex flex-col justify-center items-center top-0  bg-white gap-4 divide-y divide-dashed">
        <h1 className="text-2xl font-semibold text-[#0a0391]">
          OPTIONAL COURSES
        </h1>
      </div>
      <div className=" px-5 gap-3 h-full overflow-auto sm:px-4 md:px-8 lg:px-16 xl:px-24 py-8">
        <div className="">
          <BentoGrid className="mx-auto mt-5">
            {optionalItems.map((item, i) => (
              <CourseListItem
                key={item?.id || i}
                title={item.title}
                description={item.description}
                className={i === 2 || i === 4 ? "md:col-span-2" : ""}
                courseDetailsItem={item}
              />
            ))}
          </BentoGrid>
        </div>
      </div>
    </div>
  );
};

export default OptionalRHS;
