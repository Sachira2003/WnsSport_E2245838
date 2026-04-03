//import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">

                {/*logo section*/}
                <div className="navbar-logo">
                    <div className="logo-icon">
                        {/* Trophy Icon SVG */}
                        <svg viewBox="0 0 24 24" fill="currentColor" width="30" height="30">
                            <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0011 15.9V19H7v2h10v-2h-4v-3.1a5.01 5.01 0 003.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM7 10.82C5.84 10.4 5 9.3 5 8V7h2v3.82zM19 8c0 1.3-.84 2.4-2 2.82V7h2v1z" />
                        </svg>
                    </div>
                    <span className="logo-text-white">Wns</span>
                    <span className="logo-text-gold">Sports</span>
                </div>

                {/*Navbar links*/}
                <ul className="navbar-links">
                    <li><a href="#homeID">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                {/*Login button*/}
                <div className="login-action">
                    <button className="login-btn">

                        Portal Login
                    </button>
                </div>


            </div>
        </nav>
    )
}
export default Navbar;