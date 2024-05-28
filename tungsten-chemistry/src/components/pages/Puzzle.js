import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import '../../App.css';
import '../Puzzle.css';
import Footer from '../FootNote';

function Puzzle() {
  const [puzzle, setPuzzle] = useState(null);

  const puzzlesCollectionRef = collection(db, "puzzles");

  useEffect(() => {
    const fetchPuzzle = async () => {
      const data = await getDocs(puzzlesCollectionRef);
      const puzzles = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      if (puzzles.length > 0) {
        const randomPuzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
        setPuzzle(randomPuzzle);
      }
    };
    fetchPuzzle();
  }, []);

  return (
    <>
      <div className="puzzlePage">
        <h1>Random Puzzle</h1>
        {puzzle ? (
          <div className="puzzle">
            <h2>{puzzle.Difficulty}</h2>
            <div className="puzzleQuestion">
              {puzzle.Question}
            </div>
            <div className="responseContainer">
              <label> Response:</label>
              <textarea 
                placeholder='Answer...' 
                onChange={(event) => { }} 
                maxLength={500}
              />
            </div>
            <p>
              Max 500 Characters
            </p>
          </div>
        ) : (
          <p>Loading puzzle...</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Puzzle;
