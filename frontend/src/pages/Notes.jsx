import React, { useState } from "react";
import axios from "axios";
import AllNotes from "../components/AllNotes";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
const Notes = () => {
  const token = useSelector((state) => state.user.token);
  const [data, setData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_URL}/api/v1/notes`,
        data,
        { headers: { authorization: token } }
      );
      console.log(response.data);
      setData({
        title: "",
        description: "",
      });
      toast.success("Notes Created");
    } catch (error) {
      toast.error("Error In Notes creation");
      console.log(error);
    }
  };

  return (
    <div className="bg-[#021526] w-full min-h-screen text-white">
      <div className=" px-10 pt-4">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-4">
              <div>
                <input
                  placeholder="Enter Title"
                  type="text"
                  name="title"
                  value={data.title}
                  onChange={handleChange}
                  className="text-black py-1 rounded-full outline-none px-3 w-[80vw]"
                />
              </div>
              <div>
                <input
                  placeholder="Enter Description"
                  type="text"
                  name="description"
                  value={data.description}
                  onChange={handleChange}
                  className="text-black py-1 rounded-full outline-none px-3 w-[80vw] "
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="px-6 py-2 bg-black text-white rounded-full shadow-white shadow-sm hover:shadow-none"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <AllNotes />
      </div>
    </div>
  );
};

export default Notes;
