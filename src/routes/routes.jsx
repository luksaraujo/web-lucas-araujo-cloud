import React from "react";
import HomePage from "../pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Routering = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routering;