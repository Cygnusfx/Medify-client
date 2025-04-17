import React from "react";

import { Route, Routes } from "react-router-dom";
import LoginPage from "./features/auth/pages/LoginPage";
// import RegisterPage from "./features/auth/pages/RegisterPage";
import Processor from "./features/auth/components/Processor";
import LandingPage from './components/LandingPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './features/auth/components/Register';
import LoginPage from './features/auth/components/LoginPage';


const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={// <RegisterPage />} />
      <Route path="/auth/callback" element={<Processor />} />
    </Routes>
    // <LandingPage/>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/book" element={<BookAppointment />} /> */}
      </Routes>
    </Router>
  );;
};

export default App;
