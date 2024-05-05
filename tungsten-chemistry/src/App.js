import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css'
import Home from './components/pages/Home'
import Puzzle from './components/pages/Puzzle'

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/puzzles' exact Component={Puzzle}/>
      </Routes>
    </Router>  
    </>
  );
}

export default App;
