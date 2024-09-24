import { CourseDetailsItem } from "../../lib/interfaces";
import { startNewCourse } from "../../services/services";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  useModal,
} from "../ui/AnimatedModal";
import { useNavigate } from "react-router-dom";

export function CourseItemDescriptionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Modal>
      {children}
      <ModalBody>
        <CourseItemDescriptionContent />
        <ModalFooter className="gap-4">
          <CourseItemDescriptionFooter />
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
}

const CourseItemDescriptionContent = () => {
  const {
    courseDetailsItem,
  }: { courseDetailsItem: CourseDetailsItem | undefined } = useModal();

  if (!courseDetailsItem) {
    return <></>;
  }

  return (
    <ModalContent>
      <h4 className="text-lg md:text-2xl text-[#0a0391] font-bold text-center mb-8">
        {courseDetailsItem?.title}
      </h4>
      <div className="flex justify-center items-center">
        <div
          className="flex relative bg-cover flex-1 w-96 h-80 min-h-[6rem] rounded-xl"
          style={{ backgroundImage: `url(${courseDetailsItem.imageUrl})` }}
        >
          <div className="bg-gray-100 absolute top-72 right-0 w-16 h-5 flex items-center justify-center rounded-s-md">
            <p className="text-xs">{courseDetailsItem?.time}</p>
          </div>
        </div>
      </div>

      <div className="text-[#0a0391] mt-5 gap-10 text-lg">
        <div className="flex">
          <div className="flex flex-1">DURATION: {courseDetailsItem?.time}</div>
          <div className="flex flex-1">
            CONDUCTED: {courseDetailsItem.company.name}
          </div>
        </div>
        <div className="mt-5 text-lg">
          CONTACT INFO: {courseDetailsItem.company.contactPhone} /{" "}
          {courseDetailsItem.company.contactEmail}
        </div>
        <div className="mt-5 text-lg">
          {courseDetailsItem.company.description}
        </div>
      </div>
    </ModalContent>
  );
};

const CourseItemDescriptionFooter = () => {
  const { setOpen, courseDetailsItem } = useModal();
  const navigate = useNavigate();

  const handleStartLearning = async () => {
    
    if (courseDetailsItem?.id) {
      await startNewCourse(courseDetailsItem?.id);
      navigate(`/courses/${courseDetailsItem?.id}`);
    }
    setOpen(false);
  };

  return (
    <div className="flex gap-5">
      <button
        onClick={() => setOpen(false)}
        className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28"
      >
        Back
      </button>
      <button
        onClick={handleStartLearning}
        className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28"
      >
        Start Learning
      </button>
    </div>
  );
};
