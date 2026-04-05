import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const [activeRole, setActiveRole] = useState('');

    const simulateLogin = (targetUrl, role) => {
        setActiveRole(role);
        setIsAuthenticating(true);

        // Save role to localStorage to mock auth state (just like your HTML script)
        localStorage.setItem('wns_active_role', role);

        // Simulate network delay before redirect
        setTimeout(() => {
            // In a real React app, you'd use react-router-dom's useNavigate here
            // For now, we will simulate the redirect:
            window.location.href = targetUrl;
        }, 1800);
    };

    return (
        <div className="login-wrapper" id="login">
            {/* Dark overlay */}
            <div className="login-overlay"></div>

            {/* Login Container / Glass Panel */}
            <div className="glass-panel">

                <div className="login-header">
                    <a href="/" className="login-logo-link">
                        <div className="login-logo-icon">
                            <i className="fa-solid fa-trophy"></i>
                        </div>
                    </a>
                    <h1 className="login-title">Access Portal</h1>
                    <p className="login-subtitle">Select your authorized role to enter the secure dashboard.</p>
                </div>

                {/* Role Selectors OR Loading State */}
                {!isAuthenticating ? (
                    <div className="role-container animate-fade-in">

                        {/* Admin Card */}
                        <button
                            onClick={() => simulateLogin('/admin-dashboard', 'Administrator')}
                            className="role-card group"
                        >
                            <div className="role-icon-wrapper theme-admin">
                                <i className="fa-solid fa-user-shield"></i>
                            </div>
                            <h3 className="role-title">Administrator</h3>
                            <p className="role-desc">Head of Sports, System Config, Overarching Management.</p>
                        </button>

                        {/* Coach Card */}
                        <button
                            onClick={() => simulateLogin('/coach-dashboard', 'Team Coach')}
                            className="role-card group"
                        >
                            <div className="role-icon-wrapper theme-coach">
                                <i className="fa-solid fa-whistle"></i>
                            </div>
                            <h3 className="role-title">Team Coach</h3>
                            <p className="role-desc">Manage squads, monitor attendance, record match stats.</p>
                        </button>

                        {/* Player Card */}
                        <button
                            onClick={() => simulateLogin('/player-dashboard', 'Student Athlete')}
                            className="role-card group"
                        >
                            <div className="role-icon-wrapper theme-player">
                                <i className="fa-solid fa-person-running"></i>
                            </div>
                            <h3 className="role-title">Student Athlete</h3>
                            <p className="role-desc">View schedules, check performance, interact with team.</p>
                        </button>

                    </div>
                ) : (
                    /* Simulated Loading State */
                    <div className="loading-state animate-fade-in">
                        <span className="loader"></span>
                        <h3 className="loading-title">Authenticating {activeRole}...</h3>
                        <p className="loading-subtitle">Connecting to Walasmulla Main System securely</p>
                    </div>
                )}

                {/* Footer Link */}
                <div className="login-footer">
                    <a href="/" className="return-link">
                        <i className="fa-solid fa-arrow-left"></i> Return to Homepage
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Login;