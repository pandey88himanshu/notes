import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const ViewNotes = () => {
  const navigate = useNavigate();
  // const token = localStorage.getItem("access_token");
  const token = useSelector((state) => state.user.token);
  const location = useLocation();
  const [data, setData] = useState(null);

  const [update, setUpdate] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdate({
      ...update,
      [name]: value,
    });
  };

  async function HandleUpdate() {
    const id = location.state;
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_APP_URL}/api/v1/notes/${id}`,
        update,
        { headers: { authorization: token } }
      );
      console.log(response);
      setData(response.data);
      navigate("/notes");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const id = location.state;
    async function handleView(noteId) {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_URL}/api/v1/notes/${noteId}`,
          { headers: { authorization: token } }
        );
        console.log(response);
        setData(response.data);
        setUpdate({
          title: response.data.title,
          description: response.data.description,
        });
      } catch (error) {
        console.log(error);
      }
    }
    if (id) {
      handleView(id);
    }
  }, [location.state, token]);

  return (
    <div className="bg-[#021526] w-full min-h-screen text-white px-10">
      {data ? (
        <div className="flex gap-3">
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={update.title}
            className="text-black"
          />
          <input
            type="text"
            name="description"
            onChange={handleChange}
            value={update.description}
            className="text-black"
          />

          <div>
            <button onClick={HandleUpdate}>Update</button>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ViewNotes;
