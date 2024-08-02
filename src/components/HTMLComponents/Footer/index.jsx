import "./index.css";
import React from "react";
import Logo from "../../../assets/logo/logo-icon-golden.png";
import Text from "../../../assets/logo/logo-text-golden.png";

const Footer = () => {
    return(
        <footer className="footer">
            <div id="footer_logo">
                <img src={Logo} alt="Logo" className="lac-logo-icon" />
                <img src={Text} alt="Text" className="lac-logo-text" />
            </div>
            <p>Copyright by Lucas Araújo | lucasaraujo.cloud<br /><br />CNPJ: 53.481.899/0001-78</p>
        </footer>
    )
};

export default Footer;