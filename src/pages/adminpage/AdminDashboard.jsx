import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const adminUser = localStorage.getItem('theStageAdminUser') || 'admin';

  useEffect(() => {
    const isSessionActive = localStorage.getItem('theStageAdminSession') === 'true';

    if (!isSessionActive) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('theStageAdminSession');
    localStorage.removeItem('theStageAdminUser');
    navigate('/login');
  };

  return (
    <main className="admin-dashboard-page">
      <section className="admin-dashboard-card">
        <p className="admin-dashboard-kicker">The Stage Admin</p>
        <h1>Welcome, {adminUser}</h1>
        <p className="admin-dashboard-copy">
          Use the management area below to update event information shown on the website.
        </p>

        <nav className="admin-dashboard-links" aria-label="Admin navigation links">
          <Link to="/admin/events" className="admin-dashboard-link">
            Manage Events
          </Link>
        </nav>

        <button type="button" className="admin-dashboard-logout" onClick={handleLogout}>
          Logout
        </button>
      </section>
    </main>
  );
};

export default AdminDashboard;
