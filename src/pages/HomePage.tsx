import CompletedCoursesDashboard from "../components/CompletedCoursesDashboard";
import Hero from "../components/Hero";
import LatestNewsComponent from "../components/LatestNewsComponent";

const HomePage = () => {
  return (
    <>
      <Hero />
      <LatestNewsComponent />
      <CompletedCoursesDashboard />
    </>
  );
};

export default HomePage;
