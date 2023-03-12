import React from 'react'
import Header from '../Header';
import HomeMainBanner from '../HomeMainBanner';
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles.main}>
     <Header/>
     <HomeMainBanner/>
    </div>
  )
}

export default Home;