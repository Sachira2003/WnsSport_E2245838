import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <div className="footer-container">
                <div className="footer-top">

                    {/* Brand Info */}
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <i className="fa-solid fa-trophy text-gold"></i> WNS Sports
                        </div>
                        <p className="footer-desc">
                            The official sports management ecosystem for Walasmulla National School. Forging champions through organized excellence.
                        </p>
                        <div className="footer-socials">
                            <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links">
                        <h4 className="footer-heading">QUICK LINKS</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About System</a></li>
                            <li><a href="#features">System Modules</a></li>
                            <li><a href="/login">System Login</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-contact">
                        <h4 className="footer-heading">CONTACT</h4>
                        <ul>
                            <li>
                                <i className="fa-solid fa-location-dot"></i>
                                <span>Walasmulla National School,<br />Walasmulla, Sri Lanka</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-envelope"></i>
                                <span>admin@wnssports.lk</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-phone"></i>
                                <span>+94 47 224 5...</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 Walasmulla National School Sports Dept. All rights reserved. Built with excellence.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;