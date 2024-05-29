// components/pages/Grades.js
import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../firebase';
import '../Grades.css';

function Grades() {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    const fetchResponses = async () => {
      const q = query(collection(db, 'responses'), orderBy('question'));
      const querySnapshot = await getDocs(q);
      const responsesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setResponses(responsesData);
    };

    fetchResponses();
  }, []);

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
          </tr>
        </thead>
        <tbody>
          {responses.map((response) => (
            <tr key={response.id}>
              <td>{response.question}</td>
              <td>{response.response}</td>
              <td>{response.difficulty}</td>
              <td>{response.user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Grades;
