import "./index.css";
import React from "react";

const OrangeButton = ({ text, onClick }) => {
    return(
        <button id="custom_orange_button" onClick={onClick}>
            {text}
        </button>
    )
};

export default OrangeButton;