import { createBrowserRouter } from "react-router-dom";
import CoursePage from "../pages/CoursePage";
import CoursesPage from "../pages/CoursesPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import MainLayout from "../layouts/MainLayout";

// Create a router instance using createBrowserRouter
export const router = createBrowserRouter([
  {
    path: "/", // Root path
    element: <MainLayout />, // Main layout component
    children: [
      {
        index: true, // Default route for the root path
        element: <HomePage />, // Home page component
      },
      {
        path: "courses", // Path for courses list
        element: <CoursesPage />, // Courses page component
        children: [], // No nested routes for courses list
      },
      {
        path: "courses/:id", // Path for individual course details
        element: <CoursePage />, // Course page component
        children: [], // No nested routes for course details
      },
      {
        path: "*", // Wildcard path for 404 Not Found
        element: <NotFoundPage />, // Not found page component
      },
    ],
  },
]);
