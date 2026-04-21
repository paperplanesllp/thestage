import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLock, FiUser } from 'react-icons/fi';
import './AdminLogin.css';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    const normalizedUsername = username.trim().toLowerCase();

    if (!normalizedUsername || !password) {
      setError('Username and password are required.');
      return;
    }

    try {
      setIsLoading(true);

      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: normalizedUsername,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Invalid admin credentials.');
        return;
      }

      localStorage.setItem('theStageAdminSession', 'true');
      localStorage.setItem('theStageAdminUser', data.admin?.username || normalizedUsername);
      navigate('/admin/dashboard');
    } catch {
      setError('Unable to connect to admin server. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="admin-login-page">
      <div className="admin-login-glow admin-login-glow-left" aria-hidden="true" />
      <div className="admin-login-glow admin-login-glow-right" aria-hidden="true" />

      <section className="admin-login-card" aria-label="Admin login panel">
        <div className="admin-login-topbar">
          <p className="admin-login-brand">The Stage</p>
          <button
            type="button"
            className="admin-login-home-button"
            onClick={() => navigate('/')}
          >
            Home
          </button>
        </div>
        <h1 className="admin-login-title">Admin Login</h1>
        <p className="admin-login-subtitle">Private access for authorized administrators.</p>

        <form onSubmit={handleSubmit} className="admin-login-form">
          <div className="admin-login-field">
            <label htmlFor="admin-username">Username</label>
            <div className="admin-input-wrap">
              <FiUser aria-hidden="true" />
              <input
                id="admin-username"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                autoComplete="username"
                placeholder="Enter admin username"
              />
            </div>
          </div>

          <div className="admin-login-field">
            <label htmlFor="admin-password">Password</label>
            <div className="admin-input-wrap">
              <FiLock aria-hidden="true" />
              <input
                id="admin-password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="current-password"
                placeholder="Enter password"
              />
            </div>
          </div>

          {error && <p className="admin-login-error">{error}</p>}

          <button type="submit" className="admin-login-button" disabled={isLoading}>
            {isLoading ? 'Signing In...' : 'Enter Admin Portal'}
          </button>
        </form>
      </section>
    </main>
  );
};

export default AdminLogin;