import { useNavigate } from "react-router-dom";

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
      <section className="bg-[#f0f4f8] text-center py-16 px-4 sm:px-8 lg:px-16">
        <h1 className="text-5xl font-bold text-[#0a0391] leading-tight mb-4">
          {title}
        </h1>
        <p className="text-xl text-gray-800 mt-4 mb-6">{subtitle}</p>
        <button
          onClick={handleNavigate}
          className="mt-8 px-8 py-3 bg-[#ff6f61] text-white font-semibold rounded-lg shadow-md hover:bg-[#ffcccb] hover:text-[#0a0391] transition-all duration-300 ease-in-out"
        >
          Get Started
        </button>
      </section>
    </>
  );
};

export default Hero;
