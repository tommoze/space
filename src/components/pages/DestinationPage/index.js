import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import {
  setActive,
  selectIds,
  selectEntities,
  selectActive,
  selectById,
} from "../../../store/reducers/destinations";

import styles from "./styles.module.scss";

const Destination = ({ id }) => {
  const { name, description, distance, travel } = useSelector((state) =>
    selectById(state, id)
  );

  return (
    <div className={styles.describtion}>
      <h2>{name}</h2>
      <p className={styles.text}>{description}</p>
      <hr />
      <div className={styles.parameters_grid}>
        <div className={styles.distance}>
          <h5>avg. distance</h5>
          <p className={styles.parameters}>{distance}</p>
        </div>
        <div className={styles.travel_time}>
          <h5>est. travel time</h5>
          <p className={styles.parameters}>{travel}</p>
        </div>
      </div>
    </div>
  );
};

const DestinationPage = () => {
  const ids = useSelector(selectIds);
  const entities = useSelector(selectEntities);
  const active = useSelector(selectActive);
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
              <Destination id={active} />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
    </section>
  );
};

export default DestinationPage;
