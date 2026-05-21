import { motion } from 'framer-motion';
import { TitleArea } from '../TitleArea/TitleArea';
import { FaMobileAlt, FaLaptopCode, FaServer } from 'react-icons/fa';
import styles from './Services.module.css';

const SERVICES = [
  {
    title: 'Desarrollo Móvil',
    content: 'Creación de aplicaciones nativas y multiplataforma con Flutter y React Native, de alto rendimiento y excelente UX/UI.',
    icon: FaMobileAlt
  },
  {
    title: 'Desarrollo Web',
    content: 'Interfaces web dinámicas y modernas utilizando React, optimizadas para SEO y velocidad.',
    icon: FaLaptopCode
  },
  {
    title: 'Backend Node.js',
    content: 'APIs RESTful seguras y escalables con Node.js y Express, con integración de bases de datos PostgreSQL.',
    icon: FaServer
  }
];

export const Services = () => {
  return (
    <section id="services" className={`section ${styles.servicesSection}`}>
      <div className="container">
        <TitleArea primero="Mis" segundo="Servicios" />
        <div className={styles.grid}>
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`glass-panel ${styles.card}`}
              whileHover={{ y: -15, scale: 1.02 }}
            >
              <div className={styles.iconWrapper}>
                <service.icon className={styles.icon} />
              </div>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.content}>{service.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
