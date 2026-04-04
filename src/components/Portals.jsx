import React from 'react';
import './Portals.css';

const Portals = () => {
    const roles = [
        {
            id: 1,
            title: "Admin View",
            description: "Total system override. View macroscopic analytics, manage coaching personnel, and oversee whole-school inventories.",
            icon: "fa-solid fa-crown"
        },
        {
            id: 2,
            title: "Coach View",
            description: "Tactical operations. Mark attendance grids, organize media files, and update player bios instantly.",
            icon: "fa-solid fa-whistle"
        },
        {
            id: 3,
            title: "Player View",
            description: "Personal roadmap. Observe personal progress bars, receive coach advisories, and track practice dates.",
            icon: "fa-solid fa-person-running"
        }
    ];

    return (
        <section className="portals-section">
            {/* Background Image Overlay */}
            <div className="portals-bg-overlay"></div>

            <div className="portals-container">
                <div className="portals-grid">

                    {/* Left Column: Dashboard Graphic */}
                    <div className="portals-graphic-col reveal-animate">
                        <div className="dashboard-mockup">
                            {/* Mac OS Window Header */}
                            <div className="mac-header">
                                <div className="mac-dot dot-red"></div>
                                <div className="mac-dot dot-yellow"></div>
                                <div className="mac-dot dot-green"></div>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Dashboard Chart"
                                className="dashboard-image"
                            />
                        </div>
                    </div>

                    {/* Right Column: Text & Roles */}
                    <div className="portals-text-col reveal-animate-delayed">
                        <h2 className="portals-subtitle">Role-Based Access</h2>
                        <h3 className="portals-title">Designed Specifically For Every User</h3>
                        <p className="portals-description">
                            Security and efficiency built-in. Users are directed to specialized interfaces depending on their role within the Walasmulla sports hierarchy.
                        </p>

                        <div className="roles-list">
                            {roles.map((role) => (
                                <div key={role.id} className="role-item">
                                    <div className="role-icon">
                                        <i className={role.icon}></i>
                                    </div>
                                    <div className="role-content">
                                        <h4>{role.title}</h4>
                                        <p>{role.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <section className="cta-section">
                {/* Decorative Glow */}
                <div className="cta-glow-left"></div>
                <div className="cta-glow-right"></div>

                <div className="cta-container reveal-animate">
                    <h2 className="cta-title">Ready to Transform Your School's Athletic Program?</h2>
                    <p className="cta-description">
                        Join the administrators, coaches, and athletes already using the WNS Smart Sports platform to elevate their game. Secure, fast, and built for excellence.
                    </p>

                    <div className="cta-actions">
                        <a href="/login" className="btn-cta-primary">
                            Access System <i className="fa-solid fa-arrow-right icon-slide"></i>
                        </a>
                        <a href="#contact" className="btn-cta-secondary">
                            Contact IT Support
                        </a>
                    </div>
                </div>
            </section>
        </section>


    );
};

export default Portals;