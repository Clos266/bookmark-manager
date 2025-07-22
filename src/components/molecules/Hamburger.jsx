import React, { useState, useEffect } from 'react';
import Button from "../atoms/Button1";
import { images } from "../../assets/images";
import StyledImage from "../atoms/ImagesStyled";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (!isMobile) {
    return null;
  }

  return (
    <div className="hamburger-menu-container">
      <button 
        className={`hamburger-button ${isOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
        aria-label="Menú"
        aria-expanded={isOpen}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>


      <nav className={`menu-content ${isOpen ? 'show' : ''}`}>
        <StyledImage src={images.logo2} alt="logo footer" />
        <ul>
          <li><a href="/" onClick={toggleMenu}>FEATURES</a></li>
          <li><a href="/pricing" onClick={toggleMenu}>PRICING</a></li>
          <li><a href="/contact" onClick={toggleMenu}>CONTACT</a></li>
          <li><a href="/login" onClick={toggleMenu}><Button>LOGIN</Button></a></li>
        </ul>
        {isOpen && (
        <div className="social-icons">
          <div className="social-burger">
          <svg className="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd"/>
          </svg>
          <svg className="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
          </svg>
          </div>
        </div>)}
      </nav>
    </div>
  );
};

export default HamburgerMenu;