import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";
import { toast } from "react-toastify";
const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function HandleChange(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }

  async function HandleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_URL}/api/v1/signin`,
        data
      );
      console.log(response);
      if (response.status === 200) {
        const user = response.data.result.username;
        const token = response.data.token;
        dispatch(setUser({ user, token }));
        localStorage.setItem("access_token", token);
        toast.success("Login Successfully");
        navigate("/notes");
      }
    } catch (error) {
      toast.error("Error In Login");
      console.error("Error signing in:", error);
      if (error.response) {
        console.error("Server responded with status:", error.response.status);
        console.error("Response data:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error in setting up the request:", error.message);
      }
    }
  }

  return (
    <div className="bg-[#021526] w-full h-[92vh] text-white">
      <div className="px-12 h-full">
        <div className="w-full h-full flex items-center justify-center">
          <form onSubmit={HandleSubmit} className="flex flex-col gap-5">
            <div className="flex items-start justify-center gap-3 flex-col">
              <label htmlFor="email" className="text-xl font-medium">
                Enter Your Email:
              </label>
              <input
                onChange={HandleChange}
                type="email"
                name="email"
                id="email"
                className="bg-[#03346E] py-2 border-none outline-none rounded-full shadow-[#6EACDA] shadow-lg text-[#FFDB00] px-5 w-[40vw]"
              />
            </div>
            <div className="flex items-start flex-col justify-center gap-3">
              <label htmlFor="password" className="text-xl font-medium">
                Enter Your Password
              </label>
              <input
                onChange={HandleChange}
                type="password"
                name="password"
                id="password"
                className="bg-[#03346E] py-2 border-none outline-none rounded-full shadow-[#6EACDA] shadow-lg text-[#FFDB00] px-5 w-[40vw]"
              />
            </div>
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="px-7 py-2 bg-[#FFDB00] hover:bg-[#d7bc25] text-[#021526] font-medium text-lg rounded-full"
              >
                Submit
              </button>
              <p>
                New User{" "}
                <Link
                  to="/signup"
                  className="text-blue-400 font-medium text-lg"
                >
                  SignUp
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
