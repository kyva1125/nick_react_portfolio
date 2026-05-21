import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css';

const MENU_ITEMS = [
  { id: 'hero', label: 'Inicio' },
  { id: 'about', label: 'Sobre mi' },
  { id: 'skills', label: 'Mis habilidades' },
  { id: 'experience', label: 'Mi experiencia' },
  { id: 'portfolio', label: 'Portafolio' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link to="hero" smooth={true} duration={500} className={styles.logo}>
          NICK LEDESMA
        </Link>
        
        <div className={styles.menuIcon} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
          {MENU_ITEMS.map((item) => (
            <li key={item.id} className={styles.navItem}>
              <Link 
                to={item.id} 
                smooth={true} 
                duration={500}
                spy={true}
                offset={-80}
                activeClass={styles.activeLink}
                className={styles.navLinks}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
