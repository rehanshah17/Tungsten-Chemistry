import './App.css';
import React from 'react';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css'
import Home from './components/pages/Home'
import Puzzle from './components/pages/Puzzle'
import Battle from './components/pages/Battle'

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/puzzles' exact Component={Puzzle}/>
        <Route path='/battle' exact Component={Battle}/>
      </Routes>
    </Router>  
    </>
  );
}

export default App;
