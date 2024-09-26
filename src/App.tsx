import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import React from "react";

// Define the main App component
const App = () => {
  return (
    // StrictMode is a tool for highlighting potential problems in an application
    <React.StrictMode>
      {/* RouterProvider is used to provide the router object to the application */}
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

// Export the App component as the default export
export default App;