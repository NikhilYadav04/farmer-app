import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Uploader from "./components/Uploader.jsx";
import Register from "./components/Register.jsx";
import Signin from "./components/SignIn.jsx";
import Home from "./components/Home.jsx";
import AboutUs from "./components/AboutUs.jsx";
import FAQs from "./components/FAQs.jsx";
import ChatApp from "./components/ChatApp.jsx";
import History from "./components/History.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/upload" element={<Uploader />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/FAQ" element={<FAQs />} />
        <Route path="/chatbot" element={<ChatApp />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
};

export default App;