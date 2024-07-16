import "./index.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoFull from "../LogoFull";

const Navbar = () => {
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

            <ul className="navbar_menu">
                <li className="navbar_item"><Link to="/" className="navbar_link">Home</Link></li>
                <li className="navbar_item"><Link to="/lucas-araujo" className="navbar_link">Lucas Araújo</Link></li>
                <li className="navbar_item"><Link to="/cursos-e-treinamentos" className="navbar_link">Cursos e Treinamentos</Link></li>
            </ul>

            <div id="navbar_schedule_btn_container">
                <button class="navbar_schedule_btn" role="button">AGENDE UM HORÁRIO</button>
            </div>

            {/* <a href="https://app-la-cloud-prod-brso-01.azurewebsites.net" className="navbar_brand">LA Cloud</a>
            <ul className={isNavbarActive}>
                <li className="navbar_item"><a href="https://app-la-cloud-prod-brso-01.azurewebsites.net" className="navbar_link">Home</a></li>
                <li className="navbar_item"><a href="https://app-la-cloud-prod-brso-01.azurewebsites.net" className="navbar_link">Lucas Araújo</a></li>
                <li className="navbar_item"><a href="https://app-la-cloud-prod-brso-01.azurewebsites.net" className="navbar_link">Cursos e Treinamentos</a></li>
                <li className="navbar_item"><a href="https://app-la-cloud-prod-brso-01.azurewebsites.net" className="navbar_link">Agende um horário comigo</a></li>
            </ul>
            <div onClick={navbarToggle} className={navbarToggleIcon}>
                <div id="line_01"></div>
                <div id="line_02"></div>
                <div id="line_03"></div>
            </div> */}
        </nav>
    );
};

export default Navbar;