// import React, { useEffect, useRef } from 'react';
// import { Chart, registerables } from 'chart.js';
// import './Dashboard.css';

// Chart.register(...registerables);

// // ─── SIDEBAR ───────────────────────────────────────────────
// const navLinks = [
//     { icon: 'fa-chart-pie',      label: 'Dashboard',        active: true  },
//     { icon: 'fa-users-gear',     label: 'Sports & Teams',   active: false },
//     { icon: 'fa-calendar-check', label: 'Event Scheduling', active: false },
//     { icon: 'fa-box-open',       label: 'Inventory',        active: false },
//     { icon: 'fa-chart-line',     label: 'Reports App',      active: false },
//     { icon: 'fa-gear',           label: 'Settings',         active: false },
// ];

// const Sidebar = () => (
//     <aside className="sidebar">
//         <div className="sidebar-top">
//             <div className="sidebar-brand">
//                 <div className="brand-icon">
//                     <i className="fa-solid fa-trophy"></i>
//                 </div>
//                 <span className="brand-name">
//                     WNS <span className="brand-accent">Admin</span>
//                 </span>
//             </div>
//             <nav className="sidebar-nav">
//                 {navLinks.map((link, i) => (
//                     <a key={i} href="#" className={`sidebar-link ${link.active ? 'active' : ''}`}>
//                         <i className={`fa-solid ${link.icon} sidebar-icon`}></i>
//                         {link.label}
//                     </a>
//                 ))}
//             </nav>
//         </div>
//         <div className="sidebar-bottom">
//             <a href="/login" className="sidebar-logout">
//                 <i className="fa-solid fa-right-from-bracket sidebar-icon"></i>
//                 Logout
//             </a>
//         </div>
//     </aside>
// );

// // ─── TOPBAR ────────────────────────────────────────────────
// const Topbar = () => (
//     <header className="topbar">
//         <div className="topbar-left">
//             <button className="topbar-menu-btn">
//                 <i className="fa-solid fa-bars"></i>
//             </button>
//             <div>
//                 <h2 className="topbar-title">Head of Sports Portal</h2>
//                 <p className="topbar-subtitle">Welcome back, Mr. Perera</p>
//             </div>
//         </div>
//         <div className="topbar-right">
//             <button className="topbar-bell">
//                 <i className="fa-solid fa-bell"></i>
//                 <span className="bell-dot"></span>
//             </button>
//             <div className="topbar-profile">
//                 <img
//                     src="https://ui-avatars.com/api/?name=Admin+Perera&background=0f172a&color=fbbf24&rounded=true"
//                     alt="Profile"
//                     className="profile-avatar"
//                 />
//                 <div className="profile-info">
//                     <p className="profile-name">Admin</p>
//                     <p className="profile-role">Global Manager</p>
//                 </div>
//             </div>
//         </div>
//     </header>
// );

// // ─── KPI CARDS ─────────────────────────────────────────────
// const kpiData = [
//     { label: 'Total Athletes',    value: '420', trend: '+12 this term',      trendClass: 'trend-up',   trendIcon: 'fa-arrow-trend-up',      icon: 'fa-users',         iconBg: 'icon-bg-blue'   },
//     { label: 'Active Sports',     value: '14',  trend: '+2 new',             trendClass: 'trend-up',   trendIcon: 'fa-arrow-trend-up',      icon: 'fa-volleyball',    iconBg: 'icon-bg-indigo' },
//     { label: 'Upcoming Events',   value: '8',   trend: 'Next: Friday',       trendClass: 'trend-gold', trendIcon: 'fa-clock',               icon: 'fa-calendar-days', iconBg: 'icon-bg-amber'  },
//     { label: 'Equipment Alerts',  value: '3',   trend: 'Low stock detected', trendClass: 'trend-red',  trendIcon: 'fa-triangle-exclamation',icon: 'fa-box',           iconBg: 'icon-bg-red'    },
// ];

// const KPICards = () => (
//     <div className="kpi-grid">
//         {kpiData.map((card, i) => (
//             <div className="kpi-card" key={i}>
//                 <div className="kpi-info">
//                     <p className="kpi-label">{card.label}</p>
//                     <h3 className="kpi-value">{card.value}</h3>
//                     <p className={`kpi-trend ${card.trendClass}`}>
//                         <i className={`fa-solid ${card.trendIcon}`}></i> {card.trend}
//                     </p>
//                 </div>
//                 <div className={`kpi-icon ${card.iconBg}`}>
//                     <i className={`fa-solid ${card.icon}`}></i>
//                 </div>
//             </div>
//         ))}
//     </div>
// );

// // ─── ATTENDANCE CHART ──────────────────────────────────────
// const AttendanceChart = () => {
//     const canvasRef = useRef(null);
//     const chartRef  = useRef(null);

//     useEffect(() => {
//         const ctx = canvasRef.current.getContext('2d');
//         const gradient = ctx.createLinearGradient(0, 0, 0, 300);
//         gradient.addColorStop(0, 'rgba(30, 58, 138, 0.4)');
//         gradient.addColorStop(1, 'rgba(30, 58, 138, 0.0)');

//         chartRef.current = new Chart(ctx, {
//             type: 'line',
//             data: {
//                 labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//                 datasets: [{
//                     label: 'Average Attendance (%)',
//                     data: [75, 82, 78, 89, 92, 95],
//                     borderColor: '#1e3a8a',
//                     backgroundColor: gradient,
//                     borderWidth: 3,
//                     pointBackgroundColor: '#fbbf24',
//                     pointBorderColor: '#fff',
//                     pointBorderWidth: 2,
//                     pointRadius: 5,
//                     pointHoverRadius: 7,
//                     fill: true,
//                     tension: 0.4,
//                 }]
//             },
//             options: {
//                 responsive: true,
//                 maintainAspectRatio: false,
//                 plugins: { legend: { display: false } },
//                 scales: {
//                     y: {
//                         beginAtZero: true, max: 100,
//                         grid: { color: '#f1f5f9', drawBorder: false },
//                         ticks: { color: '#94a3b8', font: { family: 'Inter', size: 12 }, callback: v => v + '%' }
//                     },
//                     x: {
//                         grid: { display: false, drawBorder: false },
//                         ticks: { color: '#94a3b8', font: { family: 'Inter', size: 12 } }
//                     }
//                 },
//                 interaction: { intersect: false, mode: 'index' },
//             }
//         });

//         return () => { if (chartRef.current) chartRef.current.destroy(); };
//     }, []);

//     return (
//         <div className="chart-card">
//             <div className="chart-header">
//                 <h3 className="chart-title">Overall Attendance Trend</h3>
//                 <select className="chart-select">
//                     <option>Last 6 Months</option>
//                     <option>This Year</option>
//                 </select>
//             </div>
//             <div className="chart-canvas-wrapper">
//                 <canvas ref={canvasRef}></canvas>
//             </div>
//         </div>
//     );
// };

// // ─── QUICK ACTIONS ─────────────────────────────────────────
// const quickActions = [
//     { icon: 'fa-plus',          label: 'Add Team'   },
//     { icon: 'fa-user-plus',     label: 'Add Player' },
//     { icon: 'fa-calendar-plus', label: 'New Match'  },
//     { icon: 'fa-bullhorn',      label: 'Announce'   },
// ];

// const QuickActions = () => (
//     <div className="quick-actions-card">
//         <div className="qa-glow"></div>
//         <h3 className="qa-title">
//             <i className="fa-solid fa-bolt"></i> Quick Actions
//         </h3>
//         <div className="qa-grid">
//             {quickActions.map((a, i) => (
//                 <button key={i} className="qa-btn">
//                     <i className={`fa-solid ${a.icon}`}></i>
//                     {a.label}
//                 </button>
//             ))}
//         </div>
//     </div>
// );

// // ─── RECENT ACTIVITIES ─────────────────────────────────────
// const activities = [
//     { icon: 'fa-user-check', iconClass: 'act-icon-blue', title: 'Coach Saman marked attendance', subtitle: 'Under-19 Cricket · 10 mins ago'       },
//     { icon: 'fa-trophy',     iconClass: 'act-icon-gold', title: 'Basketball Team Won',            subtitle: 'vs. Regional School · 2 hours ago'    },
//     { icon: 'fa-box',        iconClass: 'act-icon-red',  title: '10 Footballs issued',            subtitle: 'To Under-15 squad · 4 hours ago'      },
// ];

// const RecentActivities = () => (
//     <div className="activities-card">
//         <h3 className="activities-title">Recent Activities</h3>
//         <div className="activities-list">
//             {activities.map((act, i) => (
//                 <div key={i} className="activity-item">
//                     <div className={`act-icon ${act.iconClass}`}>
//                         <i className={`fa-solid ${act.icon}`}></i>
//                     </div>
//                     <div>
//                         <p className="act-title">{act.title}</p>
//                         <p className="act-subtitle">{act.subtitle}</p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//         <button className="activities-view-btn">View All</button>
//     </div>
// );

// // ─── TEAMS TABLE ───────────────────────────────────────────
// const teams = [
//     { sport: 'Cricket',    icon: 'fa-baseball-bat-ball', iconClass: 'team-icon-blue',   category: 'Under 19', coach: 'Mr. J. Kumara', strength: '22/22 Full',    progress: 100, progressClass: 'progress-green', statusLabel: 'Active Season',  statusClass: 'status-green' },
//     { sport: 'Basketball', icon: 'fa-basketball',        iconClass: 'team-icon-orange', category: 'Under 17', coach: 'Mr. S. Silva',  strength: '12/15 Rec.',   progress: 80,  progressClass: 'progress-gold',  statusLabel: 'Training Phase', statusClass: 'status-amber' },
//     { sport: 'Football',   icon: 'fa-futbol',            iconClass: 'team-icon-green',  category: 'Under 15', coach: 'Mr. R. Nuwan',  strength: '10/22 Hiring', progress: 45,  progressClass: 'progress-red',   statusLabel: 'Off-season',     statusClass: 'status-gray'  },
// ];

// const TeamsTable = () => (
//     <div className="teams-card">
//         <div className="teams-header">
//             <h3 className="teams-title">Manage Teams</h3>
//             <button className="teams-view-all">
//                 View All Teams <i className="fa-solid fa-arrow-right"></i>
//             </button>
//         </div>
//         <div className="teams-table-wrapper">
//             <table className="teams-table">
//                 <thead>
//                     <tr>
//                         <th>Sport</th>
//                         <th>Category</th>
//                         <th>Head Coach</th>
//                         <th>Target Strength</th>
//                         <th>Status</th>
//                         <th className="text-right">Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {teams.map((team, i) => (
//                         <tr key={i}>
//                             <td>
//                                 <div className="team-sport-cell">
//                                     <div className={`team-icon ${team.iconClass}`}>
//                                         <i className={`fa-solid ${team.icon}`}></i>
//                                     </div>
//                                     {team.sport}
//                                 </div>
//                             </td>
//                             <td>{team.category}</td>
//                             <td>{team.coach}</td>
//                             <td>
//                                 <div className="progress-bar-bg">
//                                     <div className={`progress-bar-fill ${team.progressClass}`} style={{ width: `${team.progress}%` }}></div>
//                                 </div>
//                                 <span className="progress-label">{team.strength}</span>
//                             </td>
//                             <td>
//                                 <span className={`status-badge ${team.statusClass}`}>{team.statusLabel}</span>
//                             </td>
//                             <td className="action-cell">
//                                 <button className="action-btn edit-btn"><i className="fa-solid fa-pen-to-square"></i></button>
//                                 <button className="action-btn delete-btn"><i className="fa-solid fa-trash"></i></button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     </div>
// );

// // ─── MAIN DASHBOARD ────────────────────────────────────────
// const Dashboard = () => (
//     <div className="dashboard-wrapper">
//         <Sidebar />
//         <main className="dashboard-main">
//             <Topbar />
//             <div className="dashboard-content">
//                 <KPICards />
//                 <div className="dashboard-mid-grid">
//                     <AttendanceChart />
//                     <div className="dashboard-side-widgets">
//                         <QuickActions />
//                         <RecentActivities />
//                     </div>
//                 </div>
//                 <TeamsTable />
//             </div>
//         </main>
//     </div>
// );

import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="admin-layout">
      {/* --- SIDEBAR --- */}
      <aside className="admin-sidebar">
        <div className="sidebar-brand">
          <div className="brand-icon">
            <i className="fa-solid fa-trophy"></i>
          </div>
          <span className="brand-text">WNS <strong>Admin</strong></span>
        </div>

        <nav className="sidebar-menu">
          <a href="#dashboard" className="menu-item active">
            <i className="fa-solid fa-chart-pie"></i>
            <span>Dashboard</span>
          </a>
          <a href="#sports" className="menu-item">
            <i className="fa-solid fa-users"></i>
            <span>Sports & Teams</span>
          </a>
          <a href="#schedule" className="menu-item">
            <i className="fa-regular fa-calendar-check"></i>
            <span>Event Scheduling</span>
          </a>
          <a href="#inventory" className="menu-item">
            <i className="fa-solid fa-box"></i>
            <span>Inventory</span>
          </a>
          <a href="#reports" className="menu-item">
            <i className="fa-solid fa-chart-line"></i>
            <span>Reports App</span>
          </a>
          <a href="#settings" className="menu-item">
            <i className="fa-solid fa-gear"></i>
            <span>Settings</span>
          </a>
        </nav>

        <div className="sidebar-bottom">
          <button className="logout-btn">
            <i className="fa-brands fa-steam"></i> {/* Using as placeholder for your custom logo */}
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="admin-main">
        {/* TOP HEADER */}
        <header className="admin-header">
          <div className="header-titles">
            <h1>Head of Sports Portal</h1>
            <p>Welcome back, Mr. Perera</p>
          </div>
          <div className="header-profile">
            <div className="notification-bell">
              <i className="fa-solid fa-bell"></i>
              <span className="dot"></span>
            </div>
            <div className="profile-badge">
              <div className="avatar">AP</div>
              <div className="profile-info">
                <span className="profile-name">Admin</span>
                <span className="profile-role">Global Manager</span>
              </div>
            </div>
          </div>
        </header>

        {/* STATS CARDS */}
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-data">
              <p className="stat-label">Total Athletes</p>
              <h2 className="stat-value">420</h2>
              <p className="stat-trend trend-up"><i className="fa-solid fa-arrow-trend-up"></i> +12 this term</p>
            </div>
            <div className="stat-icon bg-blue">
              <i className="fa-solid fa-user-group"></i>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-data">
              <p className="stat-label">Active Sports</p>
              <h2 className="stat-value">14</h2>
              <p className="stat-trend trend-up"><i className="fa-solid fa-arrow-trend-up"></i> +2 new</p>
            </div>
            <div className="stat-icon bg-purple">
              <i className="fa-solid fa-volleyball"></i>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-data">
              <p className="stat-label">Upcoming Events</p>
              <h2 className="stat-value">8</h2>
              <p className="stat-trend trend-neutral"><i className="fa-solid fa-clock"></i> Next: Friday</p>
            </div>
            <div className="stat-icon bg-yellow">
              <i className="fa-regular fa-calendar"></i>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-data">
              <p className="stat-label">Equipment Alerts</p>
              <h2 className="stat-value">3</h2>
              <p className="stat-trend trend-down"><i className="fa-solid fa-triangle-exclamation"></i> Low stock detected</p>
            </div>
            <div className="stat-icon bg-red">
              <i className="fa-solid fa-box-archive"></i>
            </div>
          </div>
        </div>

        {/* MAIN DASHBOARD GRID */}
        <div className="dashboard-grid">
          
          {/* Left Column: Chart */}
          <div className="chart-section">
            <div className="section-header">
              <h3>Overall Attendance Trend</h3>
              <select className="dropdown">
                <option>Last 6 Months</option>
                <option>This Year</option>
              </select>
            </div>
            <div className="chart-placeholder">
              {/* Custom SVG to replicate the smooth area chart */}
              <svg viewBox="0 0 800 300" className="area-chart" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(30, 58, 138, 0.2)" />
                    <stop offset="100%" stopColor="rgba(30, 58, 138, 0)" />
                  </linearGradient>
                </defs>
                {/* Grid Lines */}
                <g className="grid-lines">
                  <line x1="40" y1="20" x2="800" y2="20" />
                  <line x1="40" y1="70" x2="800" y2="70" />
                  <line x1="40" y1="120" x2="800" y2="120" />
                  <line x1="40" y1="170" x2="800" y2="170" />
                  <line x1="40" y1="220" x2="800" y2="220" />
                  <line x1="40" y1="270" x2="800" y2="270" />
                </g>
                {/* Y-Axis Labels */}
                <g className="y-axis">
                  <text x="30" y="25">100%</text>
                  <text x="30" y="75">80%</text>
                  <text x="30" y="125">60%</text>
                  <text x="30" y="175">40%</text>
                  <text x="30" y="225">20%</text>
                  <text x="30" y="275">0%</text>
                </g>
                {/* X-Axis Labels */}
                <g className="x-axis">
                  <text x="80" y="295">Jan</text>
                  <text x="220" y="295">Feb</text>
                  <text x="360" y="295">Mar</text>
                  <text x="500" y="295">Apr</text>
                  <text x="640" y="295">May</text>
                  <text x="760" y="295">Jun</text>
                </g>
                {/* Area Fill */}
                <path d="M 80 120 C 150 110, 180 90, 220 100 C 290 120, 320 130, 360 125 C 430 115, 470 75, 500 70 C 570 60, 600 55, 640 50 C 700 45, 730 40, 760 40 L 760 270 L 80 270 Z" fill="url(#chartGradient)" />
                {/* Line Path */}
                <path d="M 80 120 C 150 110, 180 90, 220 100 C 290 120, 320 130, 360 125 C 430 115, 470 75, 500 70 C 570 60, 600 55, 640 50 C 700 45, 730 40, 760 40" fill="none" stroke="#1e3a8a" strokeWidth="3" />
                {/* Data Points */}
                <circle cx="80" cy="120" r="5" fill="#fbbf24" stroke="#fff" strokeWidth="2" />
                <circle cx="220" cy="100" r="5" fill="#fbbf24" stroke="#fff" strokeWidth="2" />
                <circle cx="360" cy="125" r="5" fill="#fbbf24" stroke="#fff" strokeWidth="2" />
                <circle cx="500" cy="70" r="5" fill="#fbbf24" stroke="#fff" strokeWidth="2" />
                <circle cx="640" cy="50" r="5" fill="#fbbf24" stroke="#fff" strokeWidth="2" />
                <circle cx="760" cy="40" r="5" fill="#fbbf24" stroke="#fff" strokeWidth="2" />
              </svg>
            </div>
          </div>

          {/* Right Column */}
          <div className="side-column">
            
            {/* Quick Actions */}
            <div className="quick-actions">
              <h3 className="actions-title"><i className="fa-solid fa-bolt text-gold"></i> Quick Actions</h3>
              <div className="actions-grid">
                <button className="action-btn">
                  <i className="fa-solid fa-plus"></i> Add Team
                </button>
                <button className="action-btn">
                  <i className="fa-solid fa-user-plus"></i> Add Player
                </button>
                <button className="action-btn">
                  <i className="fa-regular fa-calendar-plus"></i> New Match
                </button>
                <button className="action-btn">
                  <i className="fa-solid fa-bullhorn"></i> Announce
                </button>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="recent-activities">
              <h3>Recent Activities</h3>
              <div className="activity-list">
                <div className="activity-item">
                  <div className="activity-icon icon-blue"><i className="fa-solid fa-user-check"></i></div>
                  <div className="activity-details">
                    <h4>Coach Saman marked attendance</h4>
                    <p>Under-19 Cricket • 10 mins ago</p>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon icon-gold"><i className="fa-solid fa-trophy"></i></div>
                  <div className="activity-details">
                    <h4>Basketball Team Won</h4>
                    <p>vs. Regional School • 2 hours ago</p>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon icon-red"><i className="fa-solid fa-box"></i></div>
                  <div className="activity-details">
                    <h4>10 Footballs issued</h4>
                    <p>To Under-15 squad • 4 hours ago</p>
                  </div>
                </div>
              </div>
              <button className="view-all-btn">View All</button>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;