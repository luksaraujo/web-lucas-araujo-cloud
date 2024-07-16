import React from "react";
import HomePage from "../pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";

const Routering = () => {
    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="*" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routering;