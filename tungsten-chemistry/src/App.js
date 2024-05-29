// App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';
import Home from './components/pages/Home';
import Puzzle from './components/pages/Puzzle';
import CreatePost from './components/pages/CreatePost';
import SignUp from './components/pages/SignUp';
import CreatePuzzle from './components/pages/CreatePuzzle'; // Import the new CreatePuzzle component

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/puzzles' exact element={<Puzzle />} />
        <Route path='/createpost' exact element={<CreatePost />} />
        <Route path='/createpuzzle' exact element={<CreatePuzzle />} /> {/* Add route for CreatePuzzle */}
        <Route path='/sign-up' exact element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;

