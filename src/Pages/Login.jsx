import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, LogIn, ArrowLeft } from 'lucide-react';
import './Login.css';

const Login = () => {
  const [role, setRole] = useState('admin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login redirecting to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-box glass-panel animate-fade-in">
        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Sign in to your account</p>
        </div>

        <div className="role-selector">
          <button 
            className={`role-btn ${role === 'admin' ? 'active' : ''}`}
            onClick={() => setRole('admin')}
            type="button"
          >
            Admin
          </button>
          <button 
            className={`role-btn ${role === 'coach' ? 'active' : ''}`}
            onClick={() => setRole('coach')}
            type="button"
          >
            Coach
          </button>
          <button 
            className={`role-btn ${role === 'player' ? 'active' : ''}`}
            onClick={() => setRole('player')}
            type="button"
          >
            Student
          </button>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <label>Email Address</label>
            <div className="input-wrapper">
              <Mail className="input-icon" size={20} />
              <input 
                type="email" 
                placeholder={`Enter your ${role} email`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div className="input-group">
            <label>Password</label>
            <div className="input-wrapper">
              <Lock className="input-icon" size={20} />
              <input 
                type="password" 
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="forgot-password">
              <a href="#reset">Forgot Password?</a>
            </div>
          </div>

          <button type="submit" className="btn btn-primary login-submit">
            <LogIn size={20} /> Login as {role.charAt(0).toUpperCase() + role.slice(1)}
          </button>
        </form>

        <div className="login-footer">
          <button className="back-link" onClick={() => navigate('/')}>
            <ArrowLeft size={16} /> Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
