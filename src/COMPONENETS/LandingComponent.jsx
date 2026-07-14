import React from "react";
import { useNavigate } from "react-router-dom";
import FormPage from "../PAGES/FormPage";

function LandingComponent() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-indigo-500 ">
        <div className="wrapper flex justify-between p-3">
          <h1 className="font-bold text-white text-2xl sm:text-[28px]">Users</h1>
          <button className="bg-indigo-800 px-4 shadow-2xs rounded-2xl font-medium text-white hover:cursor-pointer hover:bg-indigo-700" onClick={() => navigate("/form")}>Create User</button>
        </div>
      </div>

      
    </>
  );
}

export default LandingComponent;
