import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navTranslations = t('navbar');

  const MENU_ITEMS = [
    { id: 'hero', label: navTranslations.hero },
    { id: 'about', label: navTranslations.about },
    { id: 'skills', label: navTranslations.skills },
    { id: 'experience', label: navTranslations.experience },
    { id: 'portfolio', label: navTranslations.portfolio },
  ];

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
        
        <div className={styles.navActions}>
          {/* Surprise sliding glass language toggle */}
          <div className={styles.langSelector}>
            {['es', 'en'].map((lang) => (
              <button
                key={lang}
                className={`${styles.langBtn} ${language === lang ? styles.activeLang : ''}`}
                onClick={() => setLanguage(lang as 'es' | 'en')}
              >
                {language === lang && (
                  <motion.div
                    layoutId="activeLangIndicator"
                    className={styles.activeIndicator}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={styles.langText}>{lang.toUpperCase()}</span>
              </button>
            ))}
          </div>

          <div className={styles.menuIcon} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
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
