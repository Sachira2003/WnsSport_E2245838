import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">

                <div className="about-grid">

                    {/* Left Column: Image & Floating Card */}
                    <div className="about-image-column reveal-animate">
                        <div className="image-wrapper">
                            <img
                                src="https://images.unsplash.com/photo-1574629810360-7efbb1925b36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Athletes"
                                className="main-image"
                            />
                            {/* The Gold Offset Border */}
                            <div className="image-border-offset"></div>

                            {/* Floating 'Before' Card */}
                            <div className="floating-card">
                                <div className="floating-icon">
                                    <i className="fa-solid fa-book-open"></i>
                                </div>
                                <div className="floating-text">
                                    <span className="floating-label">Before</span>
                                    <span className="floating-title">Manual Notebooks</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Text & Features */}
                    <div className="about-text-column reveal-animate-delayed">
                        <h2 className="section-subtitle">Our Mission</h2>
                        <h3 className="section-title">Revolutionizing School Sports Administration</h3>
                        <p className="section-description">
                            Historically, schools have struggled with vulnerable paper-based records, lost attendance logs, and unorganized performance tracking. WNS Smart Sports changes the game.
                        </p>

                        <ul className="feature-list">
                            <li>
                                <span className="feature-icon"><i className="fa-solid fa-circle-check"></i></span>
                                <div className="feature-content">
                                    <h4>Centralized Database</h4>
                                    <p>No more lost notebooks. All athlete info in one secure cloud environment.</p>
                                </div>
                            </li>
                            <li>
                                <span className="feature-icon"><i className="fa-solid fa-circle-check"></i></span>
                                <div className="feature-content">
                                    <h4>Instant Analytics</h4>
                                    <p>Visualize progress. Understand your players' statistics dynamically.</p>
                                </div>
                            </li>
                            <li>
                                <span className="feature-icon"><i className="fa-solid fa-circle-check"></i></span>
                                <div className="feature-content">
                                    <h4>Seamless Communication</h4>
                                    <p>Direct messaging and schedules mapped straight to player portals.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default About;