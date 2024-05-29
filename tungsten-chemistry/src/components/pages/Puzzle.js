import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import '../Puzzle.css';
import Footer from '../FootNote';
import { onAuthChange } from "../../firebase";
import { getDocs, collection, getDoc, doc, addDoc, onSnapshot, query, where } from 'firebase/firestore';
import { auth, db } from '../../firebase';

function Puzzle() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState('');
  const [puzzle, setPuzzle] = useState(null);
  const [response, setResponse] = useState('');
  const [showPuzzle, setShowPuzzle] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const puzzlesCollectionRef = collection(db, "puzzles");
  const responsesCollectionRef = collection(db, "responses");

  const fetchUserRole = async (uid) => {
    const userDoc = await getDoc(doc(db, "users", uid));
    if (userDoc.exists()) {
      setRole(userDoc.data().role);
    }
  };

  const checkUserResponse = async (user, puzzle) => {
    const q = query(responsesCollectionRef, where('user.uid', '==', user.uid), where('question', '==', puzzle.question));
    const querySnapshot = await getDocs(q);
    return querySnapshot.empty;
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(puzzlesCollectionRef, async (snapshot) => {
      const puzzles = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      if (puzzles.length > 0) {
        const currentPuzzle = puzzles[0];
        setPuzzle(currentPuzzle);
        const user = auth.currentUser;
        if (user) {
          const hasNotSubmitted = await checkUserResponse(user, currentPuzzle);
          setShowPuzzle(hasNotSubmitted);
        }
      }
    });

    onAuthChange((user) => {
      setUser(user);
      if (user) {
        fetchUserRole(user.uid);
      }
    });

    return () => unsubscribe();
  }, []);

  const renderDifficulty = (difficulty) => {
    if (typeof difficulty === 'number') {
      return `Difficulty: ${difficulty}`;
    }
    return `Difficulty: ${difficulty}`;
  };

  const submitResponse = async () => {
    if (!response.trim()) return;

    await addDoc(responsesCollectionRef, {
      question: puzzle.question,
      response: response.trim(),
      difficulty: puzzle.difficulty,
      user: {
        name: auth.currentUser.displayName,
        uid: auth.currentUser.uid,
      },
      graded: false, 
      createdAt: new Date()
    });

    setResponse('');
    setShowPuzzle(false); 

    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
    }, 1000); 
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
        ) : <p>No current puzzle available or you have already submitted a response for this puzzle.</p>}
        {showAnimation && (
          <div className="animationContainer">
            <img src="/W.png" alt="Tungsten Logo" className="flyingLogo" />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Puzzle;
