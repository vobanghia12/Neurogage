import React from "react";

function Navbar() {
    return(
        <nav className="nav">
            <a href="#" className="brand">Temp Name</a>
            <ul className="nav__menu">
                <li className="nav__item"><a href="#" className="nav__link">Home</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Admin</a></li>
                <li className="nav__item"><a href="#" className="nav__link">User</a></li>

            </ul>
            <div className="nav__toggler">
                <div className="Admin"></div>
                <div className="Admin"></div>
                <div className="Admin"></div>
            </div>
        </nav>
    );
}
export default Navbar;