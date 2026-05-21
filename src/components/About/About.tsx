import { motion } from 'framer-motion';
import { TitleArea } from '../TitleArea/TitleArea';
import styles from './About.module.css';

export const About = () => {
  return (
    <section id="about" className={`section ${styles.aboutSection}`}>
      <div className="container">
        <TitleArea primero="Acerca de" segundo="Mi!" secondColor="var(--accent-color)" />
        <div className={styles.content}>
          <motion.h4 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={styles.subtitle}
          >
            Flutter, React, Node Developer
          </motion.h4>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.description}
          >
            Hola! Soy Nick Ledesma, desarrollador nacido en Ayacucho, Perú (1996). Mi trayectoria comenzó con Python en la universidad, seguido por Java donde descubrí mi pasión por el desarrollo móvil. Tras explorar Kotlin y Flutter, me decanté por este último por su dinamismo y eficiencia. Disfruto creando soluciones tecnológicas innovadoras que combinen funcionalidad y diseño atractivo. Mi experiencia abarca desde aplicaciones móviles hasta desarrollo web con React y Node.js. Estoy listo para transformar tus ideas en realidad digital. ¿Qué proyecto tienes en mente?
          </motion.p>
        </div>
      </div>
    </section>
  );
};
