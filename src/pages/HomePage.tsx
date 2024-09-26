import CompletedCoursesDashboard from "../components/CompletedCoursesDashboard";
import Hero from "../components/Hero";
import LatestNewsComponent from "../components/LatestNewsComponent";

const HomePage = () => {
  return (
    <>
      {/* Hero section */}
      <Hero />
      
      {/* Latest news section */}
      <LatestNewsComponent />
      
      {/* Completed courses dashboard */}
      <CompletedCoursesDashboard />
    </>
  );
};

export default HomePage;
