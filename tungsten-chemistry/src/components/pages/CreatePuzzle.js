// CreatePuzzle.js
import React, { useState } from "react";
import '../CreatePost.css'; // Reuse the CSS from CreatePost
import { collection, getDocs, addDoc, deleteDoc, query, where } from 'firebase/firestore';
import { db, auth } from '../../firebase';
import Footer from '../FootNote.js';
import { useNavigate } from 'react-router-dom';

function CreatePuzzle() {
  const [question, setQuestion] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const puzzlesCollectionsRef = collection(db, "puzzles");
  const responsesCollectionRef = collection(db, "responses");
  let navigate = useNavigate();

  const clearExistingPuzzles = async () => {
    const puzzleDocs = await getDocs(puzzlesCollectionsRef);
    const deletePromises = puzzleDocs.docs.map(doc => deleteDoc(doc.ref));
    await Promise.all(deletePromises);
  };

  const deleteGradedResponses = async () => {
    const q = query(responsesCollectionRef, where('graded', '==', true));
    const responseDocs = await getDocs(q);
    const deletePromises = responseDocs.docs.map(doc => deleteDoc(doc.ref));
    await Promise.all(deletePromises);
  };

  const createPuzzle = async () => {
    await clearExistingPuzzles(); // Clear existing puzzles before adding a new one
    await deleteGradedResponses(); // Delete responses that were graded as true

    await addDoc(puzzlesCollectionsRef, {
      question,
      difficulty: parseInt(difficulty),
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });

    navigate("/puzzles"); // Redirect to the puzzles page
  };

  return (
    <>
      <div className="createPostPage">
        <div className='cpContainer'>
          <h1>Create A Puzzle</h1>
          <div className='inputGp'>
            <label>Question:</label>
            <input placeholder='Question...' onChange={(event) => { setQuestion(event.target.value) }} />
          </div>
          <div className='inputGp'>
            <label>Difficulty:</label>
            <input type="number" placeholder='Difficulty...' onChange={(event) => { setDifficulty(event.target.value) }} />
          </div>
          <button onClick={createPuzzle}>Submit Puzzle</button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CreatePuzzle;
