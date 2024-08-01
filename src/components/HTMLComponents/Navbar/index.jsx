import "./index.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoFull from "../LogoFull";
import { FaBars, FaX } from "react-icons/fa6";

const Navbar = () => {
    const [isMobileNavbarActive, setIsMobileNavbarActive] = useState(false);
    const [isMobileNavbarHidden, setIsMobileNavbarHidden] = useState("mobile_navbar_container mobile_navbar_container_hidden");

    const handleMobileNavbar = () => {
        isMobileNavbarActive === true ? setIsMobileNavbarActive(false) : setIsMobileNavbarActive(true);
        isMobileNavbarHidden === "mobile_navbar_container mobile_navbar_container_hidden" ? setIsMobileNavbarHidden("mobile_navbar_container mobile_navbar_container_active") : setIsMobileNavbarHidden("mobile_navbar_container mobile_navbar_container_hidden");
    }

    return(
        <nav className="navbar_container">
            <div id="desktop_navbar_container">
                <div id="navbar_logo">
                    <Link to="/" className="navbar_link"><LogoFull /></Link>
                </div>

                <ul className="navbar_menu" id="navbar_menu_desktop">
                    <li className="navbar_item"><Link to="/" className="navbar_link">Home</Link></li>
                    <li className="navbar_item"><a href="#lucas_araujo" className="navbar_link">Lucas Araújo</a></li>
                    <li className="navbar_item"><Link to="/cursos-e-treinamentos" className="navbar_link">Mentorias e Treinamentos</Link></li>
                </ul>

                <div id="navbar_schedule_btn_container">
                    <button class="navbar_schedule_btn">AGENDE UM HORÁRIO</button>
                </div>

                <div id="navbar_mobile_menu" onClick={handleMobileNavbar}>
                    {isMobileNavbarActive ? <FaX class="navbar_mobile_menu_icon" /> : <FaBars class="navbar_mobile_menu_icon" />}
                </div>
            </div>

            <div class={isMobileNavbarHidden}>
                <ul id="navbar_menu_mobile">
                    <li><Link to="/" className="navbar_link" onClick={handleMobileNavbar}>Home</Link></li>
                    <li className="navbar_item"><a href="#lucas_araujo" className="navbar_link">Lucas Araújo</a></li>
                    <li><Link to="/cursos-e-treinamentos" className="navbar_link" onClick={handleMobileNavbar}>Mentorias e Treinamentos</Link></li>
                    <li><Link to="/schedule" className="navbar_link" onClick={handleMobileNavbar}>Agende um Horário</Link></li>
                </ul>
                
            </div>
        </nav>
    );
};

export default Navbar;