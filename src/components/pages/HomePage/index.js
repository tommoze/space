import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";

import { destinationPick } from '../../../store/actions';
import data from '../../../helpers/data';

import styles from "./styles.module.scss";


const HomePage = () => {
  const dispatch = useDispatch();
  const selectDestination = (destination) => {
    dispatch(destinationPick(destination));
  }


  return (
    <main className={styles.background}>
      <header className={styles.header}>
        <h3>so, you want to travel to</h3>
        <h1>space</h1>
        <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experienc</p>
      </header>
      <div className={styles.explore_container}>
        <Link to='/destination' onClick={() => selectDestination(data.destinations[0])}>
          <div className={styles.explore}>explore</div>
        </Link>
        <div className={styles.explore_hover}></div>
      </div>
    </main>
  )
}

export default HomePage
