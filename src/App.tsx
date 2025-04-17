import React from "react";

import { Route, Routes } from "react-router-dom";

// import RegisterPage from "./features/auth/pages/RegisterPage";
import Processor from "./features/auth/components/Processor";
// import LandingPage from './components/LandingPage'

import RegisterPage from "./features/auth/pages/RegisterPage";
import LoginPage from "./features/auth/pages/LoginPage";
import LandingPage from "./components/LandingPage";


const App: React.FC = () => {
  return (
    

      <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/auth/callback" element={<Processor />} />
      </Routes>

    
    
    
  );
};

export default App;
