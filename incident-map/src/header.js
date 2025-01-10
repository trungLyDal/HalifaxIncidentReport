import './App.css';
import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

    // Lock scroll when menu is open
    if (!menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <div className="header-home">
      <h1>HIT</h1>
      <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        ☰
      </button>

      {/* Sidebar Menu */}
      <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Resources</li>
        </ul>
      </div>

      {/* Overlay */}
      <div className={`sidebar-overlay ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}></div>
    </div>
  );
};

export default Header;
