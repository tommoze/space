import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navigation/NavBar/Navbar';
import MobileMenu from './Navigation/MobileMenu/MobileMenu';
import HomePage from './pages/HomePage';
import CrewPage from './pages/CrewPage';
import DestinationPage from './pages/DestinationPage';
import TechnologyPage from './pages/TechnologyPage';

import './App.scss';

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <MobileMenu />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/destination' element={<DestinationPage />} />
        <Route path='/crew' element={<CrewPage />} />
        <Route path='/technology' element={<TechnologyPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
