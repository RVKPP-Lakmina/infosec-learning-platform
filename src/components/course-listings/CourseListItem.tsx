import { ForwardArrowIcon } from "../../assets/svg-icons";
import { Button } from "../ui/Button";
import { cn } from "../../lib/utils";
import { CourseItemDescriptionWrapper } from "../modal-component/Modal";
import { useModal } from "../ui/AnimatedModal";
import { CourseDetailsItem } from "../../lib/interfaces";

const CourseListItem = ({
  className,
  title,
  description,
  onClick,
  courseDetailsItem,
}: {
  className?: string;
  title?: string;
  description?: string;
  onClick?: () => void;
  courseDetailsItem: CourseDetailsItem;
}) => {
  const Skeleton = () => (
    <div className="flex relative flex-1 w-full h-full min-h-[6rem] rounded-xl bg-[url('src/assets/images/cyber-security.jpg')]">
      <div className="bg-gray-100 absolute top-0 right-0 w-16 h-5 flex items-center justify-center rounded-s-md">
        <p className="text-xs">{courseDetailsItem.time}</p>
      </div>
    </div>
  );

  const slicedDescription = description?.substring(0, 70) + "...";

  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-[#eafbff]  border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <Skeleton />
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <h1 className="font-sans font-bold text-[#0a0391] mb-2 mt-2">
          {title}
        </h1>
        <div className="font-sans font-normal text-[#0a0391]">
          {slicedDescription}
        </div>
      </div>

      <div className="flex justify-end items-center">
        <CourseItemDescriptionWrapper>
          <ShowDescriptionBtn courseDetailsItem={courseDetailsItem} />
        </CourseItemDescriptionWrapper>
      </div>
    </div>
  );
};

export default CourseListItem;

const ShowDescriptionBtn = ({
  courseDetailsItem,
}: {
  courseDetailsItem: CourseDetailsItem;
}) => {
  const { setOpen, setCourseDetailsItem } = useModal();

  const hanldeOnClick = () => {
    setCourseDetailsItem(courseDetailsItem);
    setOpen(true);
  };

  return (
    <Button
      lable={"Show Description"}
      iconBtn={true}
      icon={<ForwardArrowIcon />}
      onClick={hanldeOnClick}
    />
  );
};
