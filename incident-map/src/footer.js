import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p>&copy; {currentYear} Halifax Incident Tracker. All rights reserved.</p>
        <nav style={navStyle}>
          <a href="/privacy" style={linkStyle}>Privacy Policy</a>
          <a href="/terms" style={linkStyle}>Terms of Service</a>
          <a href="/contact" style={linkStyle}>Contact Us</a>
        </nav>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: "#222",
  color: "#fff",
  padding: "1rem 0",
  textAlign: "center",
};

const containerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 1rem",
};

const navStyle = {
  marginTop: "0.5rem",
};

const linkStyle = {
  color: "#00bcd4",
  textDecoration: "none",
  margin: "0 0.5rem",
};

export default Footer;
