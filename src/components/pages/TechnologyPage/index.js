import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from 'react-responsive';
import { SwitchTransition, CSSTransition } from "react-transition-group";

import { technologyPick } from '../../../store/actions';

import data from '../../../helpers/data';
import imageLaunchVehiclePortrait from '../../../assets/technology/image-launch-vehicle-portrait.jpg';
import imageSpaceportPortrait from '../../../assets/technology/image-spaceport-portrait.jpg';
import imageSpaceCapsulePortrait from '../../../assets/technology/image-space-capsule-portrait.jpg';
import imageLaunchVehicleLandscape from '../../../assets/technology/image-launch-vehicle-landscape.jpg';
import imageSpaceportLandscape from '../../../assets/technology/image-spaceport-landscape.jpg';
import imageSpaceCapsuleLandscape from '../../../assets/technology/image-space-capsule-landscape.jpg';

import styles from "./styles.module.scss";


const TechnologyPage = () => {

  const technologyState = useSelector((state) => state.technologyReducer.technology);

  const dispatch = useDispatch();
  //elect technology
  const selectTechnology = (technology) => {
    dispatch(technologyPick(technology));
  }

  const technology = technologyState ? technologyState : data.technology[0];

  //show active technology
  const showActiveLaunchVehicle = () => {
    if (technology.name === "Launch vehicle") {
      return styles.li_active;
    }
  }
  const showActiiveSpaceport = () => {
    if (technology.name === "Spaceport") {
      return styles.li_active;
    }
  }
  const showActiveSpaceCapsule = () => {
    if (technology.name === "Space capsule") {
      return styles.li_active;
    }
  }

  //responsive
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1024.1px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })

  //show image Portrait
  const showImagePortrait = (technology) => {
    if (technology.name === 'Launch vehicle') {
      return imageLaunchVehiclePortrait;
    } else if (technology.name === 'Spaceport') {
      return imageSpaceportPortrait;
    } else {
      return imageSpaceCapsulePortrait;
    }
  }
  //Show image Landcape
  const showImageLandscape = (technology) => {
    if (technology.name === 'Launch vehicle') {
      return imageLaunchVehicleLandscape;
    } else if (technology.name === 'Spaceport') {
      return imageSpaceportLandscape;
    } else {
      return imageSpaceCapsuleLandscape;
    }
  }

  return (
    <section className={styles.bacground} role='contentinfo'>
      <h3 className={styles.header}>
        <span>03</span>space lounch 101
      </h3>
      {isDesktopOrLaptop &&
        <div className={styles.container}>
          <ul className={styles.nav_container}>
            <li
              onClick={() => selectTechnology(data.technology[0])}
              className={`${ showActiveLaunchVehicle() } ${ styles.technology_li }`}
            >
              1
            </li>
            <li
              onClick={() => selectTechnology(data.technology[1])}
              className={`${ showActiiveSpaceport() } ${ styles.technology_li }`}
            >
              2
            </li>
            <li
              onClick={() => selectTechnology(data.technology[2])}
              className={`${ showActiveSpaceCapsule() } ${ styles.technology_li }`}
            >
              3
            </li>
          </ul>
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={technology.name}
              timeout={{ enter: 2000, exit: 500 }}
              classNames={{
                enter: styles['fade-enter'],
                enterActive: styles['fade-enter-active'],
                exit: styles['fade-exit'],
                exitActive: styles['fade-enterexit-active']
              }}
            >
              <div className={styles.describtion}>
                <h2 >The terminology...</h2>
                <h5 className={styles.technology_name}>{technology.name}</h5>
                <p className={styles.text}>{technology.description}</p>
              </div>
            </CSSTransition>
          </SwitchTransition>
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={technology.name}
              timeout={{ enter: 2000, exit: 500 }}
              // timeout={20000}
              classNames={{
                enter: styles['fade-enter'],
                enterActive: styles['fade-enter-active'],
                exit: styles['fade-exit'],
                exitActive: styles['fade-enterexit-active'],
              }}
            >
              <img src={showImagePortrait(technology)} alt={technology.name} className={styles.img_portrait} />
            </CSSTransition>
          </SwitchTransition>
        </div>}
      {isTabletOrMobile &&
        <div className={styles.container}>
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={technology.name}
              timeout={{ enter: 2000, exit: 500 }}
              // timeout={20000}
              classNames={{
                enter: styles['fade-enter'],
                enterActive: styles['fade-enter-active'],
                exit: styles['fade-exit'],
                exitActive: styles['fade-enterexit-active'],
              }}
            >
              <img src={showImageLandscape(technology)} alt={technology.name} className={styles.img_landscape} />
            </CSSTransition>
          </SwitchTransition>
          <ul className={styles.nav_container}>
            <li
              onClick={() => selectTechnology(data.technology[0])}
              className={`${ showActiveLaunchVehicle() } ${ styles.technology_li }`}
            >
              1
            </li>
            <li
              onClick={() => selectTechnology(data.technology[1])}
              className={`${ showActiiveSpaceport() } ${ styles.technology_li }`}
            >
              2
            </li>
            <li
              onClick={() => selectTechnology(data.technology[2])}
              className={`${ showActiveSpaceCapsule() } ${ styles.technology_li }`}
            >
              3
            </li>
          </ul>
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={technology.name}
              timeout={{ enter: 2000, exit: 500 }}
              // timeout={20000}
              classNames={{
                enter: styles['fade-enter'],
                enterActive: styles['fade-enter-active'],
                exit: styles['fade-exit'],
                exitActive: styles['fade-enterexit-active'],
              }}
            >
              <div className={styles.describtion}>
                <h2 >The terminology...</h2>
                <h5 className={styles.technology_name}>{technology.name}</h5>
                <p className={styles.text}>{technology.description}</p>
              </div>

            </CSSTransition>
          </SwitchTransition>
        </div>}
    </section>
  )
}

export default TechnologyPage
