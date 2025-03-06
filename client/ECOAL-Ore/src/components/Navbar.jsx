import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    function isAuthenticated() {
        return document.cookie.includes("access_token")
    }

    return (
        <nav className="navbar">
            

            <div className="navbarLogo"><a href="/" ><img src="/EXP.png" style={{ width: '15%' }} alt="Logo" /></a></div>

            <div className="navbarMenu" onClick={toggleMenu}>
                <div className="hamburgerIcon">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div className={`mobileMenu ${isMenuOpen ? "open" : ""}`}>
                <ul>
                    <li>
                        <Link to="/" onClick={toggleMenu}>Home</Link>
                    </li>
                    <li>
                        <Link to="/articles" onClick={toggleMenu}>Articles</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={toggleMenu}>About</Link>
                    </li>
                    <li>
                        {!isAuthenticated() ? <Link to="/Login" onClick={toggleMenu}>Login</Link> : null}
                    </li>
                    <li>
                        {!isAuthenticated() ? <Link to="/SignUp" onClick={toggleMenu}>Register</Link> : null}
                    </li>
                </ul>
            </div>
        </nav>
);

}
export default Navbar;
