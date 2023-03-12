import React from "react";
import styles from "./banner.module.css";
import WaveCharcol from '../../../public/assets/wave-charcoal.png'
import Image from "next/image";

const HomeMainBanner = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.title}>
        <h2 className={styles.titleNext}>NEXT LEVEL</h2>
        <h2 className={styles.titleDevelop}>WEB DEVELOPMENT</h2>
      </div>
      
    </div>
  );
};
export default HomeMainBanner;
