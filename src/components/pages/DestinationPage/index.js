import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { destinationPick } from "../../../store/actions";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import data from "../../../helpers/data";
import imageMoon from "../../../assets/destination/image-moon.webp";
import imageMars from "../../../assets/destination/image-mars.webp";
import imageEuropa from "../../../assets/destination/image-europa.webp";
import imageTitan from "../../../assets/destination/image-titan.webp";

import styles from "./styles.module.scss";

const images = {
  Mars: imageMars,
  Europa: imageEuropa,
  Moon: imageMoon,
  Titan: imageTitan,
};

const DestinationPage = () => {
  const { ids, byId } = useMemo(
    () =>
      data.destinations.reduce(
        (acc, cur) => ({
          ids: [...acc.ids, cur.name],
          byId: {
            ...acc.byId,
            [cur.name]: cur,
          },
        }),
        { ids: [], byId: {} }
      ),
    []
  );
  const activeDestination =
    useSelector((state) => state.destinationReducer.destination) || ids[0];
  const dispatch = useDispatch();

  //select destination
  const setActiveDestination = useCallback(
    (destination) => () => {
      dispatch(destinationPick(destination));
    },
    [dispatch]
  );

  return (
    <section className={styles.background} role="contentinfo">
      <h3 className={styles.header}>
        <span>01</span>pick your destination
      </h3>
      <div className={styles.container}>
        <div className={styles.image}>
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={activeDestination}
              timeout={{ enter: 2000, exit: 500 }}
              classNames={{
                enter: styles["fade-enter"],
                enterActive: styles["fade-enter-active"],
                exit: styles["fade-exit"],
                exitActive: styles["fade-enterexit-active"],
              }}
            >
              <img
                src={images[activeDestination]}
                alt={byId[activeDestination].name}
              />
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className={styles.info}>
          <ul className={styles.nav}>
            {ids.map((id) => (
              <li
                key={byId[id].name}
                className={id === activeDestination ? styles.active : {}}
                onClick={setActiveDestination(byId[id].name)}
              >
                {byId[id].name}
              </li>
            ))}
          </ul>
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={activeDestination}
              timeout={{ enter: 2000, exit: 500 }}
              classNames={{
                enter: styles["fade-enter"],
                enterActive: styles["fade-enter-active"],
                exit: styles["fade-exit"],
                exitActive: styles["fade-enterexit-active"],
              }}
            >
              <div className={styles.describtion}>
                <h2>{byId[activeDestination].name}</h2>
                <p className={styles.text}>
                  {byId[activeDestination].description}
                </p>
                <hr />
                <div className={styles.parameters_grid}>
                  <div className={styles.distance}>
                    <h5>avg. distance</h5>
                    <p className={styles.parameters}>
                      {byId[activeDestination].distance}
                    </p>
                  </div>
                  <div className={styles.travel_time}>
                    <h5>est. travel time</h5>
                    <p className={styles.parameters}>
                      {byId[activeDestination].travel}
                    </p>
                  </div>
                </div>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
    </section>
  );
};

export default DestinationPage;
