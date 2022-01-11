import React from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { hideMobileMenu, destinationPick, crewPick, technologyPick } from "../../../store/actions";

import close from '../../../assets/shared/icon-close.svg';
import data from '../../../helpers/data';

import './MobileMenu.scss'

const MobileMenu = () => {

  const mobileMenu = useSelector((state) => state.mobileMenu)

  const dispatch = useDispatch();
  //hide mobile menu
  const handleClick = () => {
    dispatch(hideMobileMenu())
  }
  //select destination
  const selectDestination = (destination) => {
    dispatch(destinationPick(destination));
  }
  //select crew
  const selectCrew = (crew) => {
    dispatch(crewPick(crew));
  }
  //select technology
  const selectTechnology = (technology) => {
    dispatch(technologyPick(technology));
  }

  return (
    <nav className='mobile' >
      <div className='mobile-container' id={mobileMenu ? 'show-mobile-menu' : 'hide-mobile-menu'}>
        <div className="cancel-mobile-menu">
          <img src={close} alt="" onClick={() => handleClick()} className='cancel-sign' />
        </div>
        <ul className="mobile-menu-items">
          <li className='mobile-menu-item'>
            <Link className='mobile-menu-link' to='/' onClick={() => handleClick()}><span>00</span>Home</Link>
          </li>
          <li className='mobile-menu-item'>
            <Link className='mobile-menu-link' to='/destination'
              onClick={() => { handleClick(); selectDestination(data.destinations[0]) }}
            ><span>01</span>destination</Link>
          </li>
          <li className='mobile-menu-item'>
            <Link className='mobile-menu-link' to='/crew'
              onClick={() => { handleClick(); selectCrew(data.crew[0]) }}
            ><span>02</span>crew</Link>
          </li>
          <li className='mobile-menu-item'>
            <Link className='mobile-menu-link' to='/technology'
              onClick={() => { handleClick(); selectTechnology(data.technology[0]) }}
            ><span>03</span>Technology</Link>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default MobileMenu
