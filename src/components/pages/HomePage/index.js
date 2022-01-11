import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./styles.module.scss";


const HomePage = () => {
  return (
    <main className={styles.background}>
      <header className={styles.header}>
        <h3>so, you want to travel to</h3>
        <h1>space</h1>
        <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experienc</p>
      </header>
      <div className={styles.explore_container}>
        <Link to='/destination'>
          <div className={styles.explore}>explore</div>
        </Link>
        <div className={styles.explore_hover}></div>
      </div>
    </main>
  )
}

export default HomePage
