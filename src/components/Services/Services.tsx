import { motion } from 'framer-motion';
import { TitleArea } from '../TitleArea/TitleArea';
import { FaMobileAlt, FaLaptopCode, FaServer } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Services.module.css';

export const Services = () => {
  const { t } = useLanguage();
  const servicesTrans = t('services');
  
  const icons = [FaMobileAlt, FaLaptopCode, FaServer];
  const services = servicesTrans.list.map((service, index) => ({
    ...service,
    icon: icons[index] || FaLaptopCode
  }));

  return (
    <section id="services" className={`section ${styles.servicesSection}`}>
      <div className="container">
        <TitleArea primero={servicesTrans.titleStart} segundo={servicesTrans.titleEnd} />
        <div className={styles.grid}>
          {services.map((service, index) => (
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
