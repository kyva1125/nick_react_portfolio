import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJava, FaApple, FaAndroid, FaFigma, FaGitAlt } from 'react-icons/fa';
import { SiFlutter, SiDart, SiFirebase, SiJavascript, SiPostgresql } from 'react-icons/si';
import { TitleArea } from '../TitleArea/TitleArea';
import styles from './Skills.module.css';

const SKILLS = [
  { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
  { name: 'Dart', icon: SiDart, color: '#0175C2' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'Android', icon: FaAndroid, color: '#3DDC84' },
  { name: 'iOS', icon: FaApple, color: '#999999' },
  { name: 'Java', icon: FaJava, color: '#007396' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
  { name: 'Figma', icon: FaFigma, color: '#F24E1E' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
];

export const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <TitleArea primero="Mis" segundo="Habilidades" />
        <div className={styles.grid}>
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`glass-panel ${styles.skillCard}`}
              whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)' }}
            >
              <skill.icon className={styles.icon} style={{ color: skill.color }} />
              <span className={styles.name}>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
