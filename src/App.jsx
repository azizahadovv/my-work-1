import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from './Pages/Home';


export default function App() {


  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
 
      </Routes>
    </>
  );
}
