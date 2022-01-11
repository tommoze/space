import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { destinationPick } from '../../../store/actions';
import { SwitchTransition, CSSTransition } from "react-transition-group";

import data from '../../../helpers/data';
import imageMoon from '../../../assets/destination/image-moon.webp';
import imageMars from '../../../assets/destination/image-mars.webp';
import imageEuropa from '../../../assets/destination/image-europa.webp';
import imageTitan from '../../../assets/destination/image-titan.webp';

import styles from "./styles.module.scss";

const DestinationPage = () => {

  const destinationState = useSelector((state) => state.destinationReducer.destination);

  const dispatch = useDispatch();

  //select destination
  const selectDestination = (destination) => {
    dispatch(destinationPick(destination));
  }
  const destination = destinationState ? destinationState : data.destinations[0];

  //show active destination
  const showActiveMoon = () => {
    if (destination.name === 'Moon') {
      return styles.active
    }
  }
  const showActiveMars = () => {
    if (destination.name === "Mars") {
      return styles.active
    }
  }
  const showActiveEuropa = () => {
    if (destination.name === "Europa") {
      return styles.active
    }
  }
  const showActiveTitan = () => {
    if (destination.name === "Titan") {
      return styles.active
    }
  }

  //show image
  const showImage = (destination) => {
    if (destination.name === 'Moon') {
      return imageMoon;
    } else if (destination.name === 'Mars') {
      return imageMars;
    } else if (destination.name === 'Europa') {
      return imageEuropa;
    } else {
      return imageTitan;
    }
  }


  return (
    <section className={styles.background} role='contentinfo'>
      <h3 className={styles.header}>
        <span>01</span>pick your destination
      </h3>
      <div className={styles.container}>
        <div className={styles.image}>
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={destination.name}
              timeout={{ enter: 2000, exit: 500 }}
              classNames={{
                enter: styles['fade-enter'],
                enterActive: styles['fade-enter-active'],
                exit: styles['fade-exit'],
                exitActive: styles['fade-enterexit-active'],
              }}
            >
              <img src={showImage(destination)} alt={destination.name} />
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className={styles.info}>
          <ul className={styles.nav}>
            <li
              onClick={() => selectDestination(data.destinations[0])}
              className={showActiveMoon()}
            >moon</li>
            <li
              onClick={() => { selectDestination(data.destinations[1]) }}
              className={showActiveMars()}
            >mars</li>
            <li
              onClick={() => selectDestination(data.destinations[2])}
              className={showActiveEuropa()}
            >europa</li>
            <li
              onClick={() => selectDestination(data.destinations[3])}
              className={showActiveTitan()}
            >titan</li>
          </ul>
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={destination.name}
              timeout={{ enter: 2000, exit: 500 }}
              classNames={{
                enter: styles['fade-enter'],
                enterActive: styles['fade-enter-active'],
                exit: styles['fade-exit'],
                exitActive: styles['fade-enterexit-active'],
              }}
            >
              <div className={styles.describtion}>
                <h2>{destination.name}</h2>
                <p className={styles.text}>{destination.description}</p>
                <hr />
                <div className={styles.parameters_grid}>
                  <div className={styles.distance}>
                    <h5>avg. distance</h5>
                    <p className={styles.parameters}>{destination.distance}</p>
                  </div>
                  <div className={styles.travel_time}>
                    <h5>est. travel time</h5>
                    <p className={styles.parameters}>{destination.travel}</p>
                  </div>
                </div>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
    </section >
  )
}

export default DestinationPage
