import react from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    
    return (
        <header className="navbar">
            <div className="navbar-container">

                {/* Logo Section */}
                <Link to='/home' className="navbar-logo">
                    <div className="logo-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="30" height="30">
                            <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0011 15.9V19H7v2h10v-2h-4v-3.1a5.01 5.01 0 003.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM7 10.82C5.84 10.4 5 9.3 5 8V7h2v3.82zM19 8c0 1.3-.84 2.4-2 2.82V7h2v1z" />
                        </svg>
                    </div>

                    <span className="logo-text-white">
                        WNS <span className="logo-text-accent">Sports</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="navbar-desktop-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#features">Features</a>
                    <a href="#contact">Contact</a>
                    <Link to="/login" className="login-btn">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg> Portal Login
                    </Link>
                </nav>
                
            </div>
        </header>
    );
};

export default Navbar;