import { motion } from 'framer-motion';
import styles from './TitleArea.module.css';

interface Props {
  primero: string;
  segundo: string;
  secondColor?: string;
}

export const TitleArea = ({ primero, segundo, secondColor = 'var(--accent-color)' }: Props) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={styles.titleContainer}
    >
      <h2 className={styles.title}>
        {primero} <span style={{ color: secondColor }}>{segundo}</span>
      </h2>
    </motion.div>
  );
};
