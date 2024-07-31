import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const SignUp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    username: "",
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
        `${import.meta.env.VITE_APP_URL}/api/v1/signup`,
        data
      );
      console.log(response.data);

      setData({
        email: "",
        password: "",
        username: "",
      });
      toast.success("SignUp SuccessFully");
      navigate("/signin");
    } catch (error) {
      toast.error("Error In signup");
      console.error("Error signing up:", error);
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
    <>
      <div className="bg-[#021526] w-full h-[92vh] text-white">
        <div className="px-12 h-full">
          <div className="w-full h-full flex items-center justify-center">
            <form
              action=""
              className="flex flex-col gap-5"
              onSubmit={HandleSubmit}
            >
              <div className="flex items-start justify-center gap-3 flex-col">
                <label htmlFor="username" className="text-xl font-medium">
                  Enter Your Name:
                </label>
                <input
                  onChange={HandleChange}
                  type="text"
                  name="username"
                  id="username"
                  value={data.username} // Bind the input value to the state
                  className="bg-[#03346E] py-2 border-none outline-none rounded-full shadow-[#6EACDA] shadow-lg text-[#FFDB00] px-5 w-[40vw]"
                />
              </div>
              <div className="flex items-start justify-center gap-3 flex-col">
                <label htmlFor="email" className="text-xl font-medium">
                  Enter Your Email:
                </label>
                <input
                  onChange={HandleChange}
                  type="email"
                  name="email"
                  id="email"
                  value={data.email} // Bind the input value to the state
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
                  value={data.password} // Bind the input value to the state
                  className="bg-[#03346E] py-2 border-none outline-none rounded-full shadow-[#6EACDA] shadow-lg text-[#FFDB00] px-5 w-[40vw]"
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#FFDB00] hover:bg-[#d7bc25] text-[#021526] font-medium text-lg rounded-full"
                >
                  Submit
                </button>
                <p>
                  Existing User?{" "}
                  <Link
                    to="/signin"
                    className="text-blue-400 font-medium text-lg"
                  >
                    SignIn
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
