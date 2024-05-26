import './App.css';
import React from 'react';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css'
import Home from './components/pages/Home'
import Puzzle from './components/pages/Puzzle'
import Battle from './components/pages/Battle'
import SignUp from  './components/pages/SignUp'
import SignIn from  './components/pages/SignIn'

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/puzzles' exact Component={Puzzle}/>
        <Route path='/battle' exact Component={Battle}/>
        <Route path='/sign-up' exact Component={SignUp}/>
        <Route path='/sign-in' exact Component={SignIn}/>
      </Routes>
    </Router>  
    </>
  );
}

export default App;
