import React from 'react';
import { Link } from 'react-router-dom';
import ToggleButton from 'react-toggle-button';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const borderRadiusStyle = { borderRadius: 2 };

  const user = useSelector((state) => state.user.user); // Get user from Redux store

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light custom-header">
        <Link to="/">
          <img src="https://www.viaveda.in/static/logo/logo.png" alt="Logo" />
        </Link>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav custom-nav">
            <Link className="nav-item nav-link" to="/">Home</Link>
            <Link className="nav-item nav-link" to="/features">About Us</Link>
            <Link className="nav-item nav-link" to="/pricing">Puja</Link>
            <Link className="nav-item nav-link" to="/pricing">Triveni Jal</Link>
            <Link className="nav-item nav-link" to="/pricing">Astrologers</Link>
            <Link className="nav-item nav-link" to="/pricing">Live</Link>
            <Link className="nav-item nav-link" to="/pricing">Panchang</Link>
            <Link className="nav-item nav-link" to="/pricing">Horoscope</Link>
            <Link className="nav-item nav-link" to="/pricing">Kundli</Link>
            <Link className="nav-item nav-link" to="/pricing">Kundli Matching</Link>
            <Link className="nav-item nav-link" to="/pricing">Blog</Link>
          </div>
        </div>

        <div className='d-flex align-items-center'>
          <div className='custom-toggle me-3'>
            <ToggleButton
              value={false}
              thumbStyle={borderRadiusStyle}
              trackStyle={borderRadiusStyle}
              onToggle={(value) => {
                self.setState({
                  value: !value,
                });
              }}
            />
          </div>

          {/* Show Login or User Profile */}
          {user?.isLoggedIn ? (
            <div
              className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center"
              style={{ width: 40, height: 40, fontWeight: 'bold' }}
              title={user.name}
            >
              {user.name.charAt(0).toUpperCase()}
            </div>
          ) : (
            <Link to="/login">
              <button className='Login-btn'>Login</button>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
