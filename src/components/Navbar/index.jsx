import "./index.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoFull from "../LogoFull";
import { FaBars, FaX } from "react-icons/fa6";

const Navbar = () => {
    const [isMobileNavbarActive, setIsMobileNavbarActive] = useState(false);

    const handleMobileNavbar = () => {
        isMobileNavbarActive === true ? setIsMobileNavbarActive(false) : setIsMobileNavbarActive(true);
    }

    // const [isNavbarActive, setIsNavbarActive] = useState("navbar_menu");
    // const [navbarToggleIcon, setNavbarToggleIcon] = useState("navbar_toggler");
    // const navbarToggle = () => {
    //     isNavbarActive === 'navbar_menu' ? setIsNavbarActive('navbar_menu navbar_active') : setIsNavbarActive('navbar_menu');
    //     navbarToggleIcon === 'navbar_toggler' ? setNavbarToggleIcon('navbar_toggler toggle_navbar') : setNavbarToggleIcon('navbar_toggler')
    // }
    return(
        <nav className="navbar_container">
            <div id="navbar_logo">
                <Link to="/" className="navbar_link"><LogoFull /></Link>
            </div>

            <ul className="navbar_menu" id="navbar_menu_desktop">
                <li className="navbar_item"><Link to="/" className="navbar_link">Home</Link></li>
                <li className="navbar_item"><Link to="/lucas-araujo" className="navbar_link">Lucas Araújo</Link></li>
                <li className="navbar_item"><Link to="/cursos-e-treinamentos" className="navbar_link">Cursos e Treinamentos</Link></li>
            </ul>

            <div id="navbar_schedule_btn_container">
                <button class="navbar_schedule_btn">AGENDE UM HORÁRIO</button>
            </div>

            <div id="navbar_mobile_menu" onClick={handleMobileNavbar}>
                {isMobileNavbarActive ? <FaX class="navbar_mobile_menu_icon" /> : <FaBars class="navbar_mobile_menu_icon" />}
            </div>

            {/* <a href="https://app-la-cloud-prod-brso-01.azurewebsites.net" className="navbar_brand">LA Cloud</a>
            <ul className={isNavbarActive}></ul>
            <div onClick={navbarToggle} className={navbarToggleIcon}></div> */}
        </nav>
    );
};

export default Navbar;