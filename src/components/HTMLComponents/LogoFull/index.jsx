import "./index.css";
import React from "react";
import Logo from "../../../assets/logo/logo-icon-golden.png";
import Text from "../../../assets/logo/logo-text-golden.png";

const LogoFull = () => {
    return(
        <>
            <div className="lac-logo-container">
                <img src={Logo} alt="Logo" className="lac-logo-icon" />
                <img src={Text} alt="Text" className="lac-logo-text" />
            </div>
        </>
    );
};

export default LogoFull;