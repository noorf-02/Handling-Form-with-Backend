import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import FormPage from "../PAGES/FormPage";
import axios from "axios";

function LandingComponent() {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  async function fetchUsers() {
    const resData = await axios.get("http://localhost:5000/getUsers");
    setUser(resData.data);
    console.log(resData.data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  async function removeUser(id) {
    try {
      const res = await axios.delete(`http://localhost:5000/getUser/${id}`);
      const removedUser = user.filter((myUser) => myUser._id !== id);
      setUser(removedUser);
    } catch (err) {
      console.log("Delete Failed", err);
    }
  }

  return (
    <>
      <div className="bg-indigo-500 ">
        <div className="wrapper flex justify-between p-3">
          <h1 className="font-bold text-white text-2xl sm:text-[28px]">
            Users
          </h1>
          <button
            className="bg-indigo-800 px-4 shadow-2xs rounded-2xl font-medium text-white hover:cursor-pointer hover:bg-indigo-700"
            onClick={() => navigate("/form")}
          >
            Create User
          </button>
        </div>
      </div>

      <div className="wrapper">
        <div className="card-container flex flex-wrap justify-baseline gap-8 mt-10">
          {user.map((myUser) => {
            console.log(myUser);
            return (
              <div key={myUser._id} className="card border-1 border-gray-100 p-4 rounded-2xl shadow-2xl w-[310px]">
                <p className="flex gap-2 overflow-auto ">
                  <span className="font-medium">First Name:</span>{" "}
                  <span>{myUser.firstName}</span>
                </p>
                <p className="flex gap-2 overflow-auto ">
                  <span className="font-medium">Last Name:</span>{" "}
                  <span>{myUser.lastName}</span>
                </p>
                <p className="flex gap-2 overflow-auto ">
                  <span className="font-medium">Email:</span>{" "}
                  <span>{myUser.username}</span>
                </p>
                <p className="flex gap-2 overflow-auto ">
                  <span className="font-medium">Password:</span>{" "}
                  <span>{myUser.password}</span>
                </p>
                <div className="btns flex justify-between mt-3">
                  <button className="bg-indigo-500 text-white font-medium px-3 py-1 rounded-[16px] cursor-pointer">
                    Update
                  </button>
                  <button
                    className="bg-red-700 text-white font-medium px-3 py-1 rounded-[16px] cursor-pointer"
                    onClick={() => removeUser(myUser._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default LandingComponent;
