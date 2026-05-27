import { useLanguage } from '../../context/LanguageContext';
import styles from './Footer.module.css';

export const Footer = () => {
  const { t } = useLanguage();
  const footerTrans = t('footer');

  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Nick Ledesma. {footerTrans.rights}</p>
    </footer>
  );
};
