import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import '../Puzzle.css'; // Ensure the correct import path for Puzzle.css
import Footer from '../FootNote';
import { onAuthChange } from "../../firebase";
import { getDocs, collection, getDoc, doc, addDoc, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../../firebase';

function Puzzle() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState('');
  const [puzzle, setPuzzle] = useState(null);
  const [response, setResponse] = useState('');
  const [showPuzzle, setShowPuzzle] = useState(true);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const puzzlesCollectionRef = collection(db, "puzzles");
  const responsesCollectionRef = collection(db, "responses");

  const fetchUserRole = async (uid) => {
    const userDoc = await getDoc(doc(db, "users", uid));
    if (userDoc.exists()) {
      setRole(userDoc.data().role);
    }
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(puzzlesCollectionRef, (snapshot) => {
      const puzzles = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      if (puzzles.length > 0) {
        setPuzzle(puzzles[0]); // Get the first (and only) puzzle
        setShowPuzzle(true);
      } else {
        setPuzzle(null);
        setShowPuzzle(false);
      }
    });

    onAuthChange((user) => {
      setUser(user);
      if (user) {
        fetchUserRole(user.uid);
      }
    });

    return () => unsubscribe(); // Cleanup the listener on component unmount
  }, []);

  const renderDifficulty = (difficulty) => {
    if (typeof difficulty === 'number') {
      return `Difficulty: ${difficulty}`;
    }
    return `Difficulty: ${difficulty}`;
  };

  const submitResponse = async (event) => {
    if (!response.trim()) return;

    // Get click position
    const { clientX: x, clientY: y } = event;
    setClickPosition({ x, y });

    await addDoc(responsesCollectionRef, {
      question: puzzle.question,
      response: response.trim(),
      difficulty: puzzle.difficulty,
      user: {
        name: auth.currentUser.displayName,
        uid: auth.currentUser.uid,
      },
      createdAt: new Date()
    });

    setResponse(''); // Clear the response input field
    setShowPuzzle(false); // Hide the puzzle div
  };

  return (
    <>
      <div className="puzzlePage">
        {user && role === 'teacher' && (
          <>
            <Link to="/createpost">
              <button className="create-post-button">+</button>
            </Link>
            <Link to="/createpuzzle">
              <button className="create-post-button">+</button>
            </Link>
          </>
        )}
        <h1>Current Puzzle</h1>
        {showPuzzle && puzzle ? (
          <div className="puzzleContainer">
            <h2>{renderDifficulty(puzzle.difficulty)}</h2>
            <div className="puzzleQuestion">
              <strong>Question:</strong> {puzzle.question}
            </div>
            <div className="responseContainer">
              <label htmlFor="response">Response:</label>
              <textarea 
                id="response"
                placeholder='Answer...' 
                value={response}
                onChange={(event) => setResponse(event.target.value)}
                maxLength={500}
              />
            </div>
            <button onClick={submitResponse} className="submitResponseButton">Submit Response</button>
            <p>Max 500 Characters</p>
          </div>
        ) : <p>No current puzzle available. Please wait for a new puzzle.</p>}
        <div className="animationContainer" style={{ left: clickPosition.x, top: clickPosition.y }}>
          <img src="../../../public/W.png" alt="Tungsten Logo" className="flyingLogo" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Puzzle;
