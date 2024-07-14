import "./index.css";
import React from "react";
import LogoFull from "../LogoFull";
import Navbar from "../Navbar";

const Header = () => {

    return(
        <>
            <div className="header-container">
                <LogoFull className="header-logo-full" />
                <Navbar />
            </div>
        </>
    );
};

export default Header;