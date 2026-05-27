import { motion } from 'framer-motion';
import { TitleArea } from '../TitleArea/TitleArea';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Experience.module.css';

export const Experience = () => {
  const { t } = useLanguage();
  
  const expTrans = t('experience');
  const experiences = expTrans.list;

  return (
    <section id="experience" className="section">
      <div className="container">
        <TitleArea primero={expTrans.titleStart} segundo={expTrans.titleEnd} />
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
            >
              <div className={`glass-panel ${styles.content}`}>
                <h4 className={styles.period}>{exp.period}</h4>
                <h3 className={styles.company}>{exp.company}</h3>
                <h5 className={styles.role}>{exp.role}</h5>
                <p className={styles.description}>{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
