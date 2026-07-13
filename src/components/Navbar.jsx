import React from 'react';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../assets/data';
import Button from './Button';
import Logo from './Logo';
import { handleSectionNavigation } from '../utils/scrollToSection';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isHomePage = window.location.pathname === '/';
  const sectionId = (link) => link.toLowerCase();
  const sectionHref = (link) => `${isHomePage ? '#' : '/#'}${sectionId(link)}`;
  const contactHref = isHomePage ? '#contact' : '/#contact';

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <Logo href={isHomePage ? '#home' : '/#home'} compact />

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navLinks.map((link) => (
          <a key={link} href={sectionHref(link)} onClick={(event) => handleSectionNavigation(event, sectionId(link))}>
            {link}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <Button href={contactHref} className="nav-cta">
          Book Free Consultation
        </Button>
        <button className="icon-button menu-button" type="button" onClick={() => setIsOpen((value) => !value)} aria-label="Toggle menu">
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`mobile-panel ${isOpen ? 'mobile-panel-open' : ''}`}>
        {navLinks.map((link) => (
          <a key={link} href={sectionHref(link)} onClick={(event) => handleSectionNavigation(event, sectionId(link), () => setIsOpen(false))}>
            {link}
          </a>
        ))}
        {/* <Button href={contactHref} onClick={() => setIsOpen(false)}>
          Get Free Consultation
        </Button> */}
      </div>
    </header>
  );
}

export default Navbar;
