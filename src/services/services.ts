import courses from "../Courses.json";

// --------------------------- GET REQUETS -------------------------------------------------------

export const getCourseList = async (userId: string) => {
  const response = courses || [];
  
  try {
  } catch (error) {
  } finally {
    return response;
  }
};

// --------------------------- POST REQUETS -------------------------------------------------------
