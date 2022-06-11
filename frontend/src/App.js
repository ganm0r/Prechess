import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainContainer } from "./components/MainContainer";
import { Navbar } from "./components/Navbar";
import { Landing } from "./pages/Landing";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <MainContainer>
          <Navbar />
          <Routes>
            <Route path="/" element={ <Landing /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/register" element={ <Register /> } />
          </Routes>
        </MainContainer>
      </Router>
    </React.Fragment>
  );
}

export default App;