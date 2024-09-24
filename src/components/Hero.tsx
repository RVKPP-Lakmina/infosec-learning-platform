import { useNavigate } from "react-router-dom";
import { BackgroundLines } from "./ui/BackgroundLines";

const Hero = ({
  title = "Welcome to your Learning",
  subtitle = "Explore. Learn. Grow",
}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/courses");
  };

  return (
    <>
      <BackgroundLines className="bg-[#f0f4f8] text-center p-12 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-[#0a0391]">{title}</h1>
        <p className="text-lg text-gray-700 mt-4">{subtitle}</p>
        <button
          onClick={handleNavigate}
          className="mt-6 px-6 py-2 bg-[#ff6f61] text-white rounded-lg shadow-md hover:bg-[#fbc7c6] z-10"
        >
          Get Started
        </button>
      </BackgroundLines>
    </>
  );
};

export default Hero;
