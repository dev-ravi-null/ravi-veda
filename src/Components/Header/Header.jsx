import React from 'react';
import { Link } from 'react-router-dom';
import ToggleButton from 'react-toggle-button'
// import assets from '../../assets/assets';
import './Header.css' // Import your CSS file for styling

const Header = () => {
  const borderRadiusStyle = { borderRadius: 2 }


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light custom-header">

        <Link to="/">
          <img src="https://www.viaveda.in/static/logo/logo.png" alt="Logo" />
        </Link>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav custom-nav">
            <Link className="nav-item nav-link  " to="/">Home</Link>
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

        <div className='custom-toggle'>
          <ToggleButton
            value={false}
            thumbStyle={borderRadiusStyle}
            trackStyle={borderRadiusStyle}
            onToggle={(value) => {
              self.setState({
                value: !value,
              })
            }} />
        </div>
        <button className='Login-btn'>Login</button>
      </nav>
    </>

  );
};

export default Header;