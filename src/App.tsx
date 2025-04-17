import React from 'react'
// import PDFGenerator from './components/PDFGenerator'
// import LoginPage from './features/auth/components/LoginPage'
// import Register from './features/auth/components/Register'
import LandingPage from './components/LandingPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './features/auth/components/Register';
import LoginPage from './features/auth/components/LoginPage';


const App : React.FC = () => {
  return (
    // <PDFGenerator/>
    // <LoginPage/>
    // <Register/>
    // <LandingPage/>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/book" element={<BookAppointment />} /> */}
      </Routes>
    </Router>
  );
}

export default App