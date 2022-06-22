import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainContainer } from "./components/MainContainer";
import { Navbar } from "./components/Navbar";
import { Landing } from "./pages/Landing";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { ToastContainer } from "react-toastify";
import { Masthead } from "./components/Masthead";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <MainContainer>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </MainContainer>
        <Masthead />
      </Router>
      <ToastContainer />
    </React.Fragment>
  );
};

export default App;
