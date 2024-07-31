import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import OnBoardingPage from "./pages/OnBoardingPage";
import Notes from "./pages/Notes";
import ViewNotes from "./pages/ViewNotes";
import NavBar from "./components/NavBar";
const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<OnBoardingPage />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/viewnotes" element={<ViewNotes />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default App;
