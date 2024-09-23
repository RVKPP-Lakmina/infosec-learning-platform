import { createBrowserRouter } from "react-router-dom";
import CoursePage from "../pages/CoursePage";
import CoursesPage from "../pages/CoursesPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import MainLayout from "../layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "courses",
        element: <CoursesPage />,
        children: [],
      },
      {
        path: "courses/:id",
        element: <CoursePage />,
        children: [],
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
