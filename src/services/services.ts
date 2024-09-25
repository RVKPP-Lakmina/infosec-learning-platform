import courses from "../Courses.json";
import axios from "axios";

const API_URL = import.meta.env.VITE_BASE_URL;

const enpoints = {
  getCourseList: `${API_URL}/courses`,
  getCompletedCoursList: `${API_URL}/completed-courses`,
  downloadNewsArticle: `${API_URL}/download-news-article`,
  startNewCourse: `${API_URL}/start-new-course`,
  getCourseById: `${API_URL}/get-course-by-id`,
};

// --------------------------- GET REQUETS -------------------------------------------------------

export const getCourseList = async (userId: string) => {
  let response = courses || [];
  try {
    const { data } = await axios.get(enpoints.getCourseList, {
      params: { userId },
    });
    response = JSON.parse(data.data);
  } catch (error) {
    console.error("Error fetching course list:", error);
  } finally {
    return response;
  }
};

export const getCompletedCoursList = async (userId: string) => {
  let response = courses || [];
  try {
    const { data } = await axios.get(enpoints.getCompletedCoursList, {
      params: { userId },
    });
    response = JSON.parse(data.data);
  } catch (error) {
    console.error("Error fetching course list:", error);
  } finally {
    return response;
  }
};

export const getCourseById = async (courseId: string) => {
  let response = courses || [];
  try {
    const { data } = await axios.get(enpoints.getCourseById, {
      params: { courseId },
    });
    response = JSON.parse(data.data);
  } catch (error) {
    console.error("Error fetching course list:", error);
  } finally {
    return response;
  }
};

export const downloadNewsArticles = async (fileName: number | string) => {
  try {
    const response = await axios.get(enpoints.downloadNewsArticle, {
      responseType: "blob",
      params: { name: fileName },
    });
    const url = window.URL.createObjectURL(
      new Blob([response.data], { type: "application/pdf" })
    );
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${fileName}.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (error) {
    console.error("Error downloading news article:", error);
  }
};

// --------------------------- POST REQUETS -------------------------------------------------------

export const startNewCourse = async (courseId: string | number) => {
  try {
    await axios.post(enpoints.startNewCourse, { courseId });
  } catch (error) {
    console.error("Error starting new course:", error);
  }
};

// --------------------------- PUT REQUETS -------------------------------------------------------

export const updateCourseData = async (courseId: string | number, data: any) => {
  try {
    await axios.put(enpoints.getCourseById, { courseId, data });
  } catch (error) {
    console.error("Error updating course:", error);
  }
};
