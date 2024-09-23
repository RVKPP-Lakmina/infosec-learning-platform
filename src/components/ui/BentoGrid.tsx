import { ForwardArrowIcon } from "../../assets/svg-icons";
import { cn } from "../../lib/utils";
import { Button } from "./Button";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-[#eafbff]  border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {/* {icon} */}
        <h1 className="font-sans font-bold text-[#0a0391] mb-2 mt-2">
          {title}
        </h1>
        <div className="font-sans font-normal text-[#0a0391]">
          {description}
        </div>
        <div className="flex justify-end items-center mt-1">
          <Button
            lable={" Show Description"}
            iconBtn={true}
            icon={<ForwardArrowIcon />}
          />
        </div>
      </div>
    </div>
  );
};
