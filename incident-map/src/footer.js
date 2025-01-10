import React, { useEffect, useRef } from "react";
import "./App.css"; // Create and style animations here

const Footer = () => {
  const footerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          footerRef.current.classList.add("visible");
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the footer is visible
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer ref={footerRef} className="footer hidden">
      <div className="footer-container">
        <div className="footer-section contact-us">
          <h3>Contact Us</h3>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button class="button" type="submit">
  <span class="text">Send</span>
  <span class="icon"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" data-icon="paper-plane" width="20px" aria-hidden="true"><path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z" fill="currentColor"></path></svg></span>
</button>
          </form>
        </div>
        
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Halifax Incident Tracker. All rights reserved.</p>
        <nav className="footer-nav">
            <a href="/terms">Terms of Service</a>
            <a href="/contact">Contact Us</a>
            <a href="/privacy">Privacy Policy</a>
          </nav>
      </div>
    </footer>
  );
};

export default Footer;
