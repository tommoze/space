import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import { crewPick } from '../../../store/actions';
import data from '../../../helpers/data';

import imageDouglas from '../../../assets/crew/image-douglas-hurley.webp';
import imageMark from '../../../assets/crew/image-mark-shuttleworth.webp';
import imageVictor from '../../../assets/crew/image-victor-glover.webp';
import imageAnousheh from '../../../assets/crew/image-anousheh-ansari.webp';

import styles from "./styles.module.scss";

const CrewPage = () => {

  const crewState = useSelector((state) => state.crewReducer.crew);

  const dispatch = useDispatch();
  //select crew
  const selectCrew = (crew) => {
    dispatch(crewPick(crew));
  }

  const crew = crewState ? crewState : data.crew[0];


  //show image
  const showImage = (crew) => {
    if (crew.name === 'Douglas Hurley') {
      return imageDouglas;
    } else if (crew.name === 'Mark Shuttleworth') {
      return imageMark;
    } else if (crew.name === 'Victor Glover') {
      return imageVictor;
    } else {
      return imageAnousheh;
    }
  }

  //define bio width
  const bioWidth = (crew) => {
    if (crew.name === 'Douglas Hurley') {
      return styles.width_douglas
    } else if (crew.name === 'Mark Shuttleworth') {
      return styles.width_mark
    } else if (crew.name === 'Victor Glover') {
      return styles.width_victor
    } else {
      return styles.width_anousheh
    }
  }


  //Show active
  const showActiveMoon = () => {
    if (crew.name === "Douglas Hurley") {
      return styles.active
    }
  }
  const showActiveMars = () => {
    if (crew.name === "Mark Shuttleworth") {
      return styles.active
    }
  }
  const showActiveEuropa = () => {
    if (crew.name === "Victor Glover") {
      return styles.active
    }
  }
  const showActiveTitan = () => {
    if (crew.name === "Anousheh Ansari") {
      return styles.active
    }
  }

  return (
    <section className={styles.background} role='contentinfo'>
      <div className={styles.container}>
        <div className={styles.info}>
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={crew.name}
              timeout={{ enter: 2000, exit: 500 }}
              addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
              classNames={{
                enter: styles['fade-enter'],
                enterActive: styles['fade-enter-active'],
                exit: styles['fade-exit'],
                exitActive: styles['fade-enterexit-active'],
              }}
            >
              <div className={styles.describtion}>
                <h3 className={styles.header}>
                  <span>02</span>meet your crew
                </h3>
                <h3 className={styles.role}>{crew.role}</h3>
                <h2 className={styles.name}>{crew.name}</h2>
                <p className={`${ styles.text } ${ bioWidth(crew) }`}>{crew.bio}</p>
                {/* <p className={`crew-card-tex ${ bioWidth(crew) }`}>{crew.bio}</p> */}
              </div>
            </CSSTransition>
          </SwitchTransition>
          <ul className={styles.nav}>
            <li
              onClick={() => selectCrew(data.crew[0])}
              className={showActiveMoon()}
            ></li>
            <li
              onClick={() => selectCrew(data.crew[1])}
              className={showActiveMars()}
            ></li>
            <li
              onClick={() => selectCrew(data.crew[2])}
              className={showActiveEuropa()}
            ></li>
            <li
              onClick={() => selectCrew(data.crew[3])}
              className={showActiveTitan()}
            ></li>
          </ul>
        </div>
        <div className={styles.image}>
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={crew.name}
              timeout={{ enter: 2000, exit: 500 }}
              addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
              classNames={{
                enter: styles['fade-enter'],
                enterActive: styles['fade-enter-active'],
                exit: styles['fade-exit'],
                exitActive: styles['fade-enterexit-active'],
              }}
            >
              <img src={showImage(crew)} alt={crew.name} className='crew-img' />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
    </section >
  )
}

export default CrewPage
