import { motion } from 'framer-motion';
import { TitleArea } from '../TitleArea/TitleArea';
import styles from './Experience.module.css';

const EXPERIENCES = [
  {
    period: 'Julio 2024 - Enero 2026',
    company: 'ANDES EXPRESS S.A.C',
    role: 'Desarrollador y mantenedor de Andytrack (Flutter)',
    description: 'Encargado del desarrollo, funcionamiento y mantenimiento de la aplicación central Andytrack. Implementación de mejoras continuas en rendimiento, estabilidad y experiencia de usuario. Desarrollo de soluciones para la gestión logística utilizada por más de 500 couriers a nivel nacional.'
  },
  {
    period: 'Junio 2025 - Diciembre 2025',
    company: 'DEVIDA',
    role: 'Desarrollador React',
    description: 'Participación en el desarrollo y mantenimiento de soluciones tecnológicas orientadas a optimizar procesos de gestión. Implementación de mejoras funcionales en aplicaciones web con React, Node.js y SQL Server, siguiendo buenas prácticas de arquitectura.'
  },
  {
    period: 'Octubre 2023 - Junio 2024',
    company: 'XTend SAC',
    role: 'Jefe de Proyecto - App Flutter / COMSATEL',
    description: 'Responsable del desarrollo y mantenimiento de una aplicación de gestión de citas para instalación, mantenimiento y retiro de dispositivos de rastreo. Coordinación de requerimientos y optimización técnica de campo.'
  },
  {
    period: 'Octubre 2022 - Octubre 2023',
    company: 'PECANO SOFTWARE SAC',
    role: 'Desarrollador de aplicaciones Flutter',
    description: 'Encargado de desarrollar el aplicativo STARTUP para comercios que premian a usuarios por recargar gasolina acumulando puntos. Creación de la versión web de comercio en Flutter y desarrollo del POS de Tankea.'
  },
  {
    period: 'Marzo 2022 - Septiembre 2022',
    company: 'FREELANCER',
    role: 'Desarrollador Móvil y Web - Seguridad Ciudadana',
    description: 'Diseño en Figma y desarrollo/mantenimiento del aplicativo móvil y web para Seguridad Ciudadana. Implementación de rastreo en tiempo real a través de mapas y GPS para alertar de delincuencia.'
  },
  {
    period: 'Marzo 2022 - Agosto 2022',
    company: 'FREELANCER',
    role: 'Desarrollador de App Desktop - Gestión de O2',
    description: 'Diseño en Figma y desarrollo del aplicativo de escritorio para control de almacén e inventario de botellas de O2, Co2, etc. Generación de reportes de inventarios en formato PDF.'
  },
  {
    period: 'Enero 2021 - Octubre 2021',
    company: 'FREELANCER',
    role: 'Desarrollador Móvil - Delivery de Comida',
    description: 'Desarrollo de aplicativo STARTUP diseñado en AdobeXD. Creación de franquicias dentro del app para comercios y sucursales con seguimiento de pedidos de entrega.'
  },
  {
    period: 'Febrero 2020 - Noviembre 2020',
    company: 'FREELANCER',
    role: 'Desarrollador Móvil - Búsqueda de Enfermeras',
    description: 'Desarrollo de aplicativo con seguimiento de GPS para búsqueda de enfermeras para atender pacientes a domicilio durante la pandemia.'
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
