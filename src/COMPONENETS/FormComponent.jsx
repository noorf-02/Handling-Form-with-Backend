import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormComponent() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });
  const [userArray, setArray] = useState([]);

  function setInputs(e) {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
    console.log({ ...user, [name]: value });
  }

  function submitForm(e) {
    e.preventDefault();

    if (!user.firstName || !user.lastName || !user.username || !user.password) {
      alert("Please fill all fields");
    } else {
      const userObject = { ...user };
      console.log([...userArray, userObject]);
      setArray([...userArray, userObject]);

      setUser({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
      });
    }
  }

  return (
    <>
      <div className="bg-indigo-500 ">
        <div className="wrapper flex justify-between p-3">
          <h1 className="font-bold text-white text-2xl sm:text-[28px]">
            Register
          </h1>
          <button
            className="bg-indigo-800 px-4 shadow-2xs rounded-2xl font-medium text-white hover:cursor-pointer hover:bg-indigo-700"
            onClick={() => navigate("/")}
          >
            Users
          </button>
        </div>
      </div>

      <div className="wrapper flex justify-center ">
        <form className="form  flex flex-col my-8 gap-5" onSubmit={submitForm}>
          <div className="flex flex-col gap-2">
            <label className="text-[20px] font-medium" htmlFor="firstName">
              Enter First Name
            </label>
            <input
              className="w-[330px] border-1 py-1 px-4 rounded-2xl border-gray-300 focus:outline-none  "
              type="text"
              id="firstName"
              name="firstName"
              value={user.firstName}
              onChange={setInputs}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[20px] font-medium" htmlFor="lastName">
              Enter Last Name
            </label>
            <input
              className="w-[330px] border-1 py-1 px-4 rounded-2xl border-gray-300 focus:outline-none  "
              type="text"
              id="lastName"
              name="lastName"
              value={user.lastName}
              onChange={setInputs}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[20px] font-medium" htmlFor="username">
              Enter Email
            </label>
            <input
              className="w-[330px] border-1 py-1 px-4 rounded-2xl border-gray-300 focus:outline-none  "
              type="email"
              id="username"
              name="username"
              value={user.username}
              onChange={setInputs}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[20px] font-medium" htmlFor="password">
              Enter Password
            </label>
            <input
              className="w-[330px] border-1 py-1 px-4 rounded-2xl border-gray-300 focus:outline-none  "
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={setInputs}
            />
          </div>
          <button
            type="submit"
            className="w-fit bg-indigo-500 text-white py-2 px-3 font-medium rounded-2xl"
          >
            Submit User
          </button>
        </form>
      </div>


      <div>
        {
          userArray.map((myuser)=>{
            console.log(myuser)
            return(
              <div>
                <h1>
                  {myuser.firstName}
                </h1>
              </div>
            )
          })
        }
      </div>
    </>
  );
}

export default FormComponent;
