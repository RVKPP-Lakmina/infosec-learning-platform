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
  const { courseDetailsItem } = useModal();

  return (
    <ModalContent>
      <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
        {courseDetailsItem?.title}
      </h4>
      <div className="flex justify-center items-center">
        {/* <motion.div
      key={"images"}
      style={{
        rotate: Math.random() * 20 - 10,
      }}
      whileHover={{
        scale: 1.1,
        rotate: 0,
        zIndex: 100,
      }}
      whileTap={{
        scale: 1.1,
        rotate: 0,
        zIndex: 100,
      }}
      className="rounded-xl -mr-4 mt-4 p-1 bg-white flex-shrink-0 overflow-hidden"
    >

    </motion.div> */}

        <div className="flex relative flex-1 w-96 h-80 min-h-[6rem] rounded-xl bg-[url('src/assets/images/cyber-security.jpg')]">
          <div className="bg-gray-100 absolute top-72 right-0 w-16 h-5 flex items-center justify-center rounded-s-md">
            <p className="text-xs">{courseDetailsItem?.time}</p>
          </div>
        </div>
      </div>

      <div className="text-[#eafbff] mt-4 gap-5">
        <div className="flex">
          <div className="flex flex-1">DURATION: 2 HOURSE AND 15 MINITUES</div>
          <div className="flex flex-1">CONDUCTED: Jhone Alfred Dore</div>
        </div>
        <div>
          DESCRIPTION: Explore the birth of groundbreaking ideas and inventions.
        </div>
        <div>
          MODULE TO BE COVERD:{" "}
          <span>
            <ul>
              <li>Test 1</li>
              <li>Test 2</li>
              <li>Test 3</li>
            </ul>
          </span>
        </div>
      </div>
    </ModalContent>
  );
};

const CourseItemDescriptionFooter = () => {
  const { setOpen, courseDetailsItem } = useModal();
  const navigate = useNavigate();

  const handleStartLearning = () => {
    navigate(`/courses/${courseDetailsItem?.id}`);
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
