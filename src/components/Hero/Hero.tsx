import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Hero.module.css';

export const Hero = () => {
  const { language, t } = useLanguage();
  const [roleIndex, setRoleIndex] = useState(0);

  const heroTrans = t('hero');
  const roles = heroTrans.roles;

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="hero" className={`section ${styles.heroSection}`}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <motion.h3 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.greeting}
          >
            {heroTrans.greeting}
          </motion.h3>
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.name}
          >
            {heroTrans.name}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={styles.roleContainer}
          >
            <span className={styles.greeting}>{heroTrans.rolePrefix}</span>
            <span className={styles.animatedRole} key={`${language}-${roleIndex}`}>
              {roles[roleIndex]}
            </span>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={styles.description}
          >
            {heroTrans.description}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className={styles.socials}
          >
            <a href="https://www.linkedin.com/in/nick-bryan-ledesma-corilloclla-4873761a2/" target="_blank" rel="noreferrer" className={styles.socialIcon}>
              <FaLinkedin />
            </a>
            <a href="https://github.com/kyva1125" target="_blank" rel="noreferrer" className={styles.socialIcon}>
              <FaGithub />
            </a>
            <a href="https://wa.me/+51993475959" target="_blank" rel="noreferrer" className={styles.socialIcon}>
              <FaWhatsapp />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className={styles.contactInfo}
          >
            <p>{heroTrans.cell}: +51 993 475 959</p>
            <p>{heroTrans.email}: kyva1125@hotmail.com</p>
            <p>{heroTrans.location}: {heroTrans.locationValue}</p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className={styles.heroImage}
        >
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className={styles.imageWrapper}
          >
            <img src="/assets/images/nick_without.jpg" alt="Nick Ledesma" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
