import { motion } from 'framer-motion';
import { TitleArea } from '../TitleArea/TitleArea';
import styles from './Experience.module.css';

const EXPERIENCES = [
  {
    period: 'Junio 2024 - Enero 2026',
    company: 'ANDES EXPRESS',
    role: 'Analista Flutter Developer',
    description: 'Desarrollo y reingeniería del aplicativo Andytrack para recojo y reparto de productos'
  },
  {
    period: 'Octubre 2023 - Junio 2024',
    company: 'XTend SAC',
    role: 'Semi Sr. Flutter Developer',
    description: 'Encargado de desarrollar aplicativo para la gestión de citas para la empresa COMSATEL. Desarrollador semi senior con la capacidad de análisis de requisitos. Modificador de funcionalidades del aplicativo ENOTRIA de recojo de paquetes.'
  },
  {
    period: 'Octubre 2022 – Octubre 2023',
    company: 'PECANO SOFTWARE SAC',
    role: 'Desarrollador Flutter Developer',
    description: 'Encargado de desarrollar aplicativos para comercios que administran los grifos. Migración a web con Flutter para el aplicativo comercio. Desarrollo de POS de Tankea.'
  },
  {
    period: 'Marzo 2022 – Septiembre 2022',
    company: 'FREELANCER',
    role: 'Desarrollador de apps móvil y web – Seguridad Ciudadana',
    description: 'Diseño de todo el aplicativo utilizando Figma. Desarrollo del aplicativo Seguridad Ciudadana. Rastreo de ciudadanos a través del mapa utilizando GPS.'
  },
  {
    period: 'Marzo 2022 – Agosto 2022',
    company: 'FREELANCER',
    role: 'Desarrollador de app desktop - Gestión de botellas de O2',
    description: 'Control de almacén para el inventario de botellas de O2, Co2, etc. Reporte a través de PDF.'
  },
  {
    period: 'Enero 2021 – Octubre 2021',
    company: 'FREELANCER',
    role: 'Desarrollador de aplicaciones móviles - Delivery',
    description: 'Creación de Comercios y sucursales, para un seguimiento de los pedidos.'
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <TitleArea primero="Mi" segundo="Experiencia" />
        <div className={styles.timeline}>
          {EXPERIENCES.map((exp, index) => (
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
