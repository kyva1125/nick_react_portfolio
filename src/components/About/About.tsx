import { motion } from 'framer-motion';
import { TitleArea } from '../TitleArea/TitleArea';
import { FaGraduationCap, FaLanguage, FaAward } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import styles from './About.module.css';

export const About = () => {
  const { t } = useLanguage();
  
  const aboutTrans = t('about');
  const softSkills = aboutTrans.softSkillsList;

  return (
    <section id="about" className={`section ${styles.aboutSection}`}>
      <div className="container">
        <TitleArea primero={aboutTrans.titleStart} segundo={aboutTrans.titleEnd} secondColor="var(--accent-color)" />
        
        <div className={styles.gridContainer}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={styles.bioContainer}
          >
            <h4 className={styles.subtitle}>{aboutTrans.subtitle}</h4>
            <p className={styles.description}>
              {aboutTrans.bioParagraph1}
            </p>
            <p className={styles.description}>
              {aboutTrans.bioParagraph2}
            </p>
          </motion.div>

          <div className={styles.infoCardsGrid}>
            {/* Educación */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`glass-panel ${styles.infoCard}`}
            >
              <div className={styles.cardHeader}>
                <FaGraduationCap className={styles.cardIcon} />
                <h3>{aboutTrans.educationTitle}</h3>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.educationItem}>
                  <span className={styles.year}>2022 | Ayacucho - Perú</span>
                  <h4>{aboutTrans.educationDegree1}</h4>
                  <p className={styles.institution}>Universidad Nacional de San Cristóbal de Huamanga</p>
                </div>
                <div className={styles.educationItem}>
                  <span className={styles.year}>2019 | Ayacucho - Perú</span>
                  <h4>{aboutTrans.educationDegree2}</h4>
                  <p className={styles.institution}>Instituto Peruano Alemán</p>
                </div>
              </div>
            </motion.div>

            {/* Idiomas */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`glass-panel ${styles.infoCard}`}
            >
              <div className={styles.cardHeader}>
                <FaLanguage className={styles.cardIcon} />
                <h3>{aboutTrans.languagesTitle}</h3>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.languageItem}>
                  <span>{aboutTrans.languagesNative}</span>
                </div>
                <div className={styles.languageItem}>
                  <strong>{aboutTrans.languagesEnglish}</strong>
                  <p style={{ marginTop: '0.2rem', fontSize: '0.85rem' }}>{aboutTrans.languagesEnglishDetails}</p>
                </div>
              </div>
            </motion.div>

            {/* Habilidades Blandas */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className={`glass-panel ${styles.infoCard}`}
            >
              <div className={styles.cardHeader}>
                <FaAward className={styles.cardIcon} />
                <h3>{aboutTrans.softSkillsTitle}</h3>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.tagsContainer}>
                  {softSkills.map((skill, i) => (
                    <span key={i} className={styles.tag}>{skill}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
