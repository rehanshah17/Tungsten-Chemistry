import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where, orderBy, updateDoc, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import '../Grades.css';

function calculateExpectedScore(userLevelScore, questionDifficulty) {
  return 1 / (1 + Math.pow(10, (questionDifficulty - userLevelScore) / 400));
}

function updateLevelScore(userLevelScore, questionDifficulty, actualScore, K = 32) {
  const expectedScore = calculateExpectedScore(userLevelScore, questionDifficulty);
  const newLevelScore = userLevelScore + K * (actualScore - expectedScore);
  return Math.round(newLevelScore);
}

function Grades() {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    const fetchResponses = async () => {
      const q = query(collection(db, 'responses'), where('graded', '==', false), orderBy('question'));
      const querySnapshot = await getDocs(q);
      const responsesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setResponses(responsesData);
    };

    fetchResponses();
  }, []);

  const handleGrade = async (id, correct) => {
    const responseDoc = doc(db, 'responses', id);
    const responseSnapshot = await getDoc(responseDoc);
    const responseData = responseSnapshot.data();
    const actualScore = correct ? 1 : 0;

    const userDocRef = doc(db, 'users', responseData.user.uid);
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
      const userLevelScore = userDoc.data().levelScore;
      const newLevelScore = updateLevelScore(userLevelScore, responseData.difficulty, actualScore);

      await updateDoc(userDocRef, { levelScore: newLevelScore });
    }

    await updateDoc(responseDoc, { graded: true, correct: correct });
    setResponses(prevResponses => prevResponses.filter(response => response.id !== id));
  };

  return (
    <div className="gradesPage">
      <h1>Grades</h1>
      <table className="gradesTable">
        <thead>
          <tr>
            <th>Question</th>
            <th>Response</th>
            <th>Difficulty</th>
            <th>User</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {responses.map((response) => (
            <tr key={response.id}>
              <td>{response.question}</td>
              <td>{response.response}</td>
              <td>{response.difficulty}</td>
              <td>{response.user.name}</td>
              <td>
                <button className="grade-button" onClick={() => handleGrade(response.id, true)}>✅</button>
                <button className="grade-button" onClick={() => handleGrade(response.id, false)}>❌</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Grades;
