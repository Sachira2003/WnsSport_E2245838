import {Link} from 'react-router-dom';
import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            {/* Background Blobs */}
            <div className="hero-blob blob-top-left"></div>
            <div className="hero-blob blob-bottom-right"></div>

            <div className="hero-container">

                {/* Main Content */}
                <div className="hero-content reveal-animate">
                    <span className="hero-badge">
                        <svg viewBox="0 0 24 19" fill="currentColor" width="15" height="15">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg> Walasmulla National School
                    </span>

                    <h1 className="hero-title">
                        Smart Sports <br />
                        <span className="text-gradient">Management System</span>
                    </h1>

                    <p className="hero-description">
                        Digitalizing school athletics. Manage teams, track attendance, monitor player performance, and schedule tournaments from one centralized, intelligent platform.
                    </p>
        
                    <div className="hero-actions">
                        <Link to="/login" className="btn-primary">
                            Enter Portal 
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </Link>
                        <a href="#features" className="btn-secondary">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                                <path d="M8 5v14l11-7z" />
                            </svg> Explore Features
                        </a>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="hero-stats reveal-animate-delayed">
                    <div className="stat-item">
                        <h3 className="stat-number">15+</h3>
                        <p className="stat-label">Sports Managed</p>
                    </div>
                    <div className="stat-item">
                        <h3 className="stat-number">100%</h3>
                        <p className="stat-label">Digital Tracking</p>
                    </div>
                    <div className="stat-item">
                        <h3 className="stat-number text-accent">24/7</h3>
                        <p className="stat-label">System Access</p>
                    </div>
                    <div className="stat-item">
                        <h3 className="stat-number">3</h3>
                        <p className="stat-label">Dedicated Portals</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;