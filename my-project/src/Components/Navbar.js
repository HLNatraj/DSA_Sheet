import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <nav className="navbar">
            <div className="navbar-item" onClick={() => navigate('/dashboard')}>
                Dashboard
            </div>

            <div className="navbar-center">
                <div className="navbar-item" onClick={() => navigate('/topic')}>
                    Topics
                </div>
                <div className="navbar-item" onClick={() => navigate('/progress')}>
                    Progress
                </div>
            </div>

            <div className="navbar-right">
                <div className="navbar-item logout" onClick={handleLogout}>
                    Logout
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
