import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import Menu from '../Menus/Menu';
import HamburgerMenu from '../Menus/HamburgerMenu';
import { HiChevronRight } from 'react-icons/hi';


function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className='menu'>
      <div className={`line-1 ${isMobile ? 'mobile-layout' : 'desktop-layout'}`}>
        <button className="header-button button button-1">
          <HiChevronRight className="button-icon" />
          <span className="button-text">Taille du texte TTTT</span>
        </button>
        {isMobile ? (
          <div className='log-menu'>
            <div className="logo">
              <a href='/' className='logo-link'>RenaClic</a>
              <button className={`toggle ${isMenuOpen ? 'button-close' : 'button-open'}`} onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>

          </div>
        ) : (
          <div className="button-container">
            <button  className=" header-button button">
              <HiChevronRight className="button-icon" />
              <a href='/login' className="button-text">Vous êtes un patient ?</a>
            </button>
            <button className="header-button button">
              <HiChevronRight className="button-icon" />
              <span className="button-text">Vous êtes un professionnel ?</span>
            </button>
          </div>
        )}
      </div>
      <div className={`line-2 ${isMobile ? 'mobile-layout' : 'desktop-layout'}`}>
        {isMobile ? (
          <>
            <div className="button-container">
              <button href='/login' className="header-button button">
                <HiChevronRight className="button-icon" />
                <span className="button-text">Vous êtes un patient ?</span>
              </button>
              <button className="header-button button">
                <HiChevronRight className="button-icon" />
                <span className="button-text">Vous êtes un professionnel ?</span>
              </button>
            </div>
            <Menu className='classique-menu' />
            <HamburgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} className='hamburger-menu' />
            <input type="text" className="search-bar" placeholder="Recherche" />
          </>
        ) : (
          <>
            <div className='log-menu'>
              <div className="logo">
              <a href='/' className='logo-link'>RenaClic</a>
                <button className={`toggle ${isMenuOpen ? 'button-close' : 'button-open'}`} onClick={toggleMenu}>
                  {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
              </div>
            </div>
            <Menu className='classique-menu' />
            <HamburgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} className='hamburger-menu' />
            <input type="text" className="search-bar" placeholder="Recherche" />
          </>
        )}
      </div>
    </header>
  );
}

export default Header;




