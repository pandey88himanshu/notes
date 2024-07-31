import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AllNotes = () => {
  // const token = localStorage.getItem("access_token");
  const token = useSelector((state) => state.user.token);

  const navigate = useNavigate();
  async function handleClick(id) {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_APP_URL}/api/v1/notes/${id}`,
        { headers: { authorization: token } }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_URL}/api/v1/notes`,
          { headers: { authorization: token } }
        );
        // console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchNotes();
  }, [token, data]);

  return (
    <div>
      <div className="px-10">
        <div className="flex gap-5 flex-wrap">
          {data.map((item, index) => (
            <div
              key={index}
              className="min-w-1/5 border-white border-2 px-4 mt-4 flex flex-col gap-4 py-2"
            >
              <div
                onClick={() => {
                  navigate("/viewnotes", { state: item._id });
                }}
              >
                <div className="font-bold text-2xl">{item.title}</div>
                <div className="font-medium text-lg max-w-4/5">
                  {item.description}
                </div>
              </div>
              <div>
                <button
                  className="bg-red-600 text-white px-5 py-1 rounded-full"
                  onClick={() => {
                    handleClick(item._id);
                  }}
                >
                  delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllNotes;
