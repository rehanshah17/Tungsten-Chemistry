import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';


function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' exact/>
      </Routes>
    </Router>  
    </>
  );
}

export default App;
