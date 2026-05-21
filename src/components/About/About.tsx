import { motion } from 'framer-motion';
import { TitleArea } from '../TitleArea/TitleArea';
import { FaGraduationCap, FaLanguage, FaAward } from 'react-icons/fa';
import styles from './About.module.css';

const SOFT_SKILLS = [
  'Trabajo en equipo',
  'Autogestión',
  'Comunicación efectiva',
  'Resolución de problemas',
  'Adaptabilidad',
  'Responsabilidad',
  'Aprendizaje continuo'
];

export const About = () => {
  return (
    <section id="about" className={`section ${styles.aboutSection}`}>
      <div className="container">
        <TitleArea primero="Acerca de" segundo="Mi!" secondColor="var(--accent-color)" />
        
        <div className={styles.gridContainer}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={styles.bioContainer}
          >
            <h4 className={styles.subtitle}>Nick Bryan Ledesma Corilloclla</h4>
            <p className={styles.description}>
              Desarrollador de aplicaciones móviles, web y desktop con experiencia en el desarrollo de soluciones tecnológicas escalables y enfocadas en el usuario. Especializado en <strong>Flutter</strong>, con sólidos conocimientos en arquitectura de software, integración con servicios BaaS/SaaS, diseño UI/UX y gestión de bases de datos relacionales y NoSQL.
            </p>
            <p className={styles.description}>
              Me caracterizo por ser una persona proactiva, autodidacta, responsable y orientada a resultados, con capacidad para adaptarme rápidamente a nuevos retos tecnológicos y trabajar eficientemente en equipo. Además, cuento con conocimientos en tecnologías web modernas como <strong>React</strong> y <strong>Node.js</strong>, ampliando mi perfil hacia el desarrollo full stack.
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
                <h3>Educación</h3>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.educationItem}>
                  <span className={styles.year}>2022 | Ayacucho - Perú</span>
                  <h4>Ingeniería de Sistemas</h4>
                  <p className={styles.institution}>Universidad Nacional de San Cristóbal de Huamanga</p>
                </div>
                <div className={styles.educationItem}>
                  <span className={styles.year}>2019 | Ayacucho - Perú</span>
                  <h4>Técnico en Hardware Informático</h4>
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
                <h3>Idiomas</h3>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.languageItem}>
                  <strong>Español:</strong> <span>Nativo</span>
                </div>
                <div className={styles.languageItem}>
                  <strong>Inglés:</strong>
                  <ul>
                    <li>Lectura y escritura: Intermedio</li>
                    <li>Hablado: Básico</li>
                  </ul>
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
                <h3>Habilidades Blandas</h3>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.tagsContainer}>
                  {SOFT_SKILLS.map((skill, i) => (
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
