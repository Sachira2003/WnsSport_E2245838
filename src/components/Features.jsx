import React from 'react';
import './Features.css';

const Features = () => {
    const featureData = [
        {
            id: 1,
            title: "Team Management",
            description: "Admins and Head Coaches can easily create squads, assign players, and organize sports disciplines flawlessly.",
            icon: "fa-solid fa-users",
            theme: "theme-blue",
            delay: ""
        },
        {
            id: 2,
            title: "Event Scheduling",
            description: "Maintain a unified calendar for matches, practices, and tournaments. Automated reminders sent to the roster.",
            icon: "fa-regular fa-calendar-check",
            theme: "theme-green",
            delay: "delay-100"
        },
        {
            id: 3,
            title: "Smart Attendance",
            description: "Quickly mark player presence with a digital register. Export attendance reports with a single click.",
            icon: "fa-solid fa-clipboard-user",
            theme: "theme-gold",
            delay: "delay-200"
        },
        {
            id: 4,
            title: "Analytics & Performance",
            description: "Record fitness metrics, game statistics, and physiological progress via interactive dashboards and graphs.",
            icon: "fa-solid fa-chart-line",
            theme: "theme-purple",
            delay: ""
        },
        {
            id: 5,
            title: "Inventory Tracking",
            description: "Meticulously catalog bats, balls, jerseys, and field equipment. Track issuance and monitor losses easily.",
            icon: "fa-solid fa-dumbbell",
            theme: "theme-red",
            delay: "delay-100"
        },
        {
            id: 6,
            title: "Internal Comm Net",
            description: "Seamless built-in messaging. Coaches dispatch priority notices instantly to parent or student dashboards.",
            icon: "fa-solid fa-comments",
            theme: "theme-teal",
            delay: "delay-200"
        }
    ];

    return (
        <section className="features-section" id="features">
            <div className="features-container">

                {/* Section Header */}
                <div className="features-header reveal-animate">
                    <h2 className="features-subtitle">System Capabilities</h2>
                    <h3 className="features-title">Everything You Need to Manage Winning Teams</h3>
                </div>

                {/* Features Grid */}
                <div className="features-grid">
                    {featureData.map((feature) => (
                        <div
                            key={feature.id}
                            className={`feature-card reveal-animate ${feature.delay} ${feature.theme}`}
                        >
                            <div className="feature-icon-wrapper">
                                <i className={feature.icon}></i>
                            </div>
                            <h4 className="feature-card-title">{feature.title}</h4>
                            <p className="feature-card-description">{feature.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Features;