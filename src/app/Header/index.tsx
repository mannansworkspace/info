import Link from "next/link";
import React from "react";
import styles from "./header.module.css";
import LockIcon from "../../../public/assets/lockIcon.svg";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
      <p className={styles.logo}>HtmlBugers</p>
      <div className={styles.headerContainer}>
            <ul className={styles.links}>
                <li><Link className={styles.link} href="">All SERVICES</Link></li>
                <li><Link className={styles.link} href="">OUR WORK</Link></li>
                <li><Link className={styles.link} href="">REVIEWS</Link></li>
                <li><Link className={styles.link} href="">FOR AGENCIES</Link></li>
                <li> <Link className={styles.link} href="">ABOUT</Link></li>
                <li><Link className={styles.link} href="">LABS</Link></li>
            </ul>
      
        <ul className={styles.links}>
          <li><Link className={styles.link} href="">Contact Us</Link></li>
          <li><button type="button" className={styles.qouteBtn}>Get a Quick Quote</button></li>
          <li><Image height={16} width={14} src={LockIcon} alt={"Lock Icon"} /></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
