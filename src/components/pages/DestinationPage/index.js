import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { setActive } from "../../../store/reducers/destinations"

import styles from "./styles.module.scss";

const DestinationPage = () => {
  const { active, ids, entities } =
    useSelector((state) => state.destinations)
  const dispatch = useDispatch();
  const onClick = useCallback(
    (id) => () => {
      dispatch(setActive(id));
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
              key={active}
              timeout={{ enter: 2000, exit: 500 }}
              classNames={{
                enter: styles["fade-enter"],
                enterActive: styles["fade-enter-active"],
                exit: styles["fade-exit"],
                exitActive: styles["fade-enterexit-active"],
              }}
            >
              <img
                // copy src/assets to public/ before uncommenting
                // src={entities[active].images.png}
                alt={entities[active].name}
              />
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className={styles.info}>
          <ul className={styles.nav}>
            {ids.map((id) => (
              <li
                key={entities[id].name}
                className={id === active ? styles.active : ""}
                onClick={onClick(entities[id].name)}
              >
                {entities[id].name}
              </li>
            ))}
          </ul>
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={active}
              timeout={{ enter: 2000, exit: 500 }}
              classNames={{
                enter: styles["fade-enter"],
                enterActive: styles["fade-enter-active"],
                exit: styles["fade-exit"],
                exitActive: styles["fade-enterexit-active"],
              }}
            >
              <div className={styles.describtion}>
                <h2>{entities[active].name}</h2>
                <p className={styles.text}>
                  {entities[active].description}
                </p>
                <hr />
                <div className={styles.parameters_grid}>
                  <div className={styles.distance}>
                    <h5>avg. distance</h5>
                    <p className={styles.parameters}>
                      {entities[active].distance}
                    </p>
                  </div>
                  <div className={styles.travel_time}>
                    <h5>est. travel time</h5>
                    <p className={styles.parameters}>
                      {entities[active].travel}
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
