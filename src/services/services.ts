import courses from "../Courses.json";
import axios from "axios";

const API_URL = import.meta.env.VITE_BASE_URL;

const enpoints = {
  getCourseList: `${API_URL}/courses`,
  getCompletedCoursList: `${API_URL}/completed-courses`,
  downloadNewsArticle: `${API_URL}/download-news-article`,
  startNewCourse: `${API_URL}/start-new-course`,
  getCourseById: `${API_URL}/get-course-by-id`,
  updateCourseDetails: `${API_URL}/update-course-status`,
};

// Function to fetch the list of courses for a given user
export const getCourseList = async (userId: string) => {
  let response = courses || []; // Initialize response with a default value
  try {
    // Make an HTTP GET request to fetch the course list for the given userId
    const { data } = await axios.get(enpoints.getCourseList, {
      params: { userId },
    });
    // Parse the response data
    response = JSON.parse(data.data);
  } catch (error) {
    // Log any errors that occur during the request
    console.error("Error fetching course list:", error);
  } finally {
    // Return the response, whether the request was successful or not
    return response;
  }
};

// Function to fetch the list of completed courses for a given user
export const getCompletedCoursList = async (userId: string) => {
  let response = courses || []; // Initialize response with a default value
  try {
    // Make an HTTP GET request to fetch the completed course list for the given userId
    const { data } = await axios.get(enpoints.getCompletedCoursList, {
      params: { userId },
    });
    // Parse the response data
    response = JSON.parse(data.data);
  } catch (error) {
    // Log any errors that occur during the request
    console.error("Error fetching completed course list:", error);
  } finally {
    // Return the response, whether the request was successful or not
    return response;
  }
};

// Function to fetch details of a specific course by its ID
export const getCourseById = async (courseId: string) => {
  let response = courses || []; // Initialize response with a default value
  try {
    // Make an HTTP GET request to fetch the course details for the given courseId
    const { data } = await axios.get(enpoints.getCourseById, {
      params: { courseId },
    });
    // Directly assign the response data
    response = data.data;
  } catch (error) {
    // Log any errors that occur during the request
    console.error("Error fetching course details:", error);
  } finally {
    // Return the response, whether the request was successful or not
    return response;
  }
};

// Function to download a news article as a PDF file
export const downloadNewsArticles = async (fileName: number | string) => {
  try {
    // Make an HTTP GET request to download the news article
    const response = await axios.get(enpoints.downloadNewsArticle, {
      responseType: "blob", // Expect a binary response
      params: { name: fileName },
    });
    // Create a URL for the downloaded file
    const url = window.URL.createObjectURL(
      new Blob([response.data], { type: "application/pdf" })
    );
    // Create a link element to trigger the download
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${fileName}.pdf`);
    document.body.appendChild(link);
    link.click(); // Trigger the download
    link.remove(); // Clean up the link element
  } catch (error) {
    // Log any errors that occur during the request
    console.error("Error downloading news article:", error);
  }
};

// --------------------------- POST REQUESTS -------------------------------------------------------

// Function to start a new course by sending a POST request
export const startNewCourse = async (courseId: string | number) => {
  try {
    // Make an HTTP POST request to start a new course
    await axios.post(enpoints.startNewCourse, { courseId });
  } catch (error) {
    // Log any errors that occur during the request
    console.error("Error starting new course:", error);
  }
};

// --------------------------- PUT REQUESTS -------------------------------------------------------

// Function to update course data by sending a PUT request
export const updateCourseData = async (
  courseId: string | number,
  data: any
) => {
  try {
    // Make an HTTP POST request to update course details
    await axios.post(enpoints.updateCourseDetails, { courseId, data });
  } catch (error) {
    // Log any errors that occur during the request
    console.error("Error updating course:", error);
  }
};
