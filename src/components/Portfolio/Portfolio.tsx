import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TitleArea } from '../TitleArea/TitleArea';
import { imagesPortfolio, listImagesPortfolio } from '../../data/portfolioData';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Portfolio.module.css';

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useLanguage();

  const portfolioTrans = t('portfolio');

  const reversedImages = [...imagesPortfolio].reverse();
  const reversedLists = [...listImagesPortfolio].reverse();

  const openModal = (index: number) => {
    setSelectedProject(index);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject !== null) {
      const list = reversedLists[selectedProject];
      setCurrentImageIndex((prev) => (prev < list.length - 1 ? prev + 1 : prev));
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject !== null) {
      setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }
  };

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <TitleArea primero={portfolioTrans.titleStart} segundo={portfolioTrans.titleEnd} />
        <div className={styles.grid}>
          {reversedImages.map((imgSrc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
              className={styles.portfolioItem}
              onClick={() => openModal(index)}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <img src={imgSrc} alt={`Proyecto ${index}`} loading="lazy" />
              <div className={styles.overlay}>
                <span>{portfolioTrans.viewGallery}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.modalOverlay}
            onClick={closeModal}
          >
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeBtn} onClick={closeModal}><FaTimes /></button>
              
              <div className={styles.imageViewer}>
                {currentImageIndex > 0 && (
                  <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={prevImage}>
                    <FaChevronLeft />
                  </button>
                )}
                
                <img 
                  src={reversedLists[selectedProject][currentImageIndex]} 
                  alt="Galería del Proyecto" 
                  className={styles.mainImage}
                />
                
                {currentImageIndex < reversedLists[selectedProject].length - 1 && (
                  <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={nextImage}>
                    <FaChevronRight />
                  </button>
                )}
              </div>
              <div className={styles.indicator}>
                {currentImageIndex + 1} / {reversedLists[selectedProject].length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
