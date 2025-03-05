import React, { useState } from 'react'
import '../css/navbar.css'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className="navbar">
            <div className="navbarLogo">Logo</div>

            <div className="navbarSearch">
                <input type="text" placeholder="Search..." />
            </div>

            <div className="navbarMenu" onClick={toggleMenu}>
                <div className="hamburgerIcon">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div className={`mobileMenu ${isMenuOpen ? "open" : ""}`}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Articles</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
