import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      const fetchUser = async () => {
        try {
          if (token) {
            const response = await axios.get(
              `${import.meta.env.VITE_APP_URL}/api/v1/user`,
              { headers: { authorization: token } }
            );
          } else {
            navigate("/");
          }
          const user = response.data.result.username;
          dispatch(setUser({ user, token }));
        } catch (error) {
          console.error("Failed to fetch user info:", error);
        }
      };

      fetchUser();
    }
  }, [dispatch, token]);

  const handleLogout = () => {
    dispatch(clearUser());
    localStorage.removeItem("access_token");
    navigate("/");
  };

  return (
    <div>
      <div>{token ? `Logged in as ${user}` : "Not logged in"}</div>
      <div>
        <button onClick={handleLogout}>LogOut</button>
      </div>
    </div>
  );
};

export default NavBar;
