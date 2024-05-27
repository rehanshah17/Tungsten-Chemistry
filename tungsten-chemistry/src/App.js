import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';
import Home from './components/pages/Home';
import Puzzle from './components/pages/Puzzle';
import CreatePost from './components/pages/CreatePost';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/puzzles' exact element={<Puzzle />} />
        <Route path='/createpost' exact element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;