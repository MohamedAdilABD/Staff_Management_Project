import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./Dashboard";
import Employeelist from "./Employeelist";
import Recruitment from "./Recruitment";
import Leaverequest from "./Leaverequest";

export default function App()
{
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/employee" element={<Employeelist />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="leave" element={<Leaverequest />} />
      </Routes>
    </BrowserRouter>

    </>
  )
}