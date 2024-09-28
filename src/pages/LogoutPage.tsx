import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center bg-cover items-center h-screen gap-3">
        <img src="src/assets/logout-page.jpg" />
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-2xl w-1/6 text-white font-semibold py-2 px-4 rounded-3xl shadow hover:bg-blue-700 transition duration-200"
        >
          Back To the Home
        </button>
      </div>
    </div>
  );
};

export default LogoutPage;
