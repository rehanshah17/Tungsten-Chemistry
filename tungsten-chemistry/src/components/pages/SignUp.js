import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '../../firebase';
import '../SignUp.css';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [chemistryLevel, setChemistryLevel] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let levelScore;
    switch (chemistryLevel) {
      case 'academic':
        levelScore = 400;
        break;
      case 'honors':
        levelScore = 750;
        break;
      case 'ap':
        levelScore = 1000;
        break;
      default:
        levelScore = 0;
    }

    let role;
    if (auth.currentUser.email.endsWith('llc@gmail.com')) {
      role = 'teacher';
    } else if (auth.currentUser.email.endsWith('@gmail.com')) {
      role = 'student';
    } else {
      role = 'student';
    }

    const userRef = doc(db, 'users', auth.currentUser.uid);
    await setDoc(userRef, {
      uid: auth.currentUser.uid,
      email: auth.currentUser.email,
      name: auth.currentUser.displayName,
      photoURL: auth.currentUser.photoURL,
      firstName,
      lastName,
      chemistryLevel,
      levelScore,
      createdAt: serverTimestamp(),
      lastLogin: serverTimestamp(),
      role
    }, { merge: true });
    navigate('/');
  };

  return (
    <div className="signUpPage">
      <div className="suContainer">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className='inputGp'>
            <label>First Name:</label>
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          </div>
          <div className='inputGp'>
            <label>Last Name:</label>
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          </div>
          <div className='inputGp'>
            <label>Chemistry Level:</label>
            <select value={chemistryLevel} onChange={(e) => setChemistryLevel(e.target.value)} required>
              <option value="" disabled>Select your chemistry level</option>
              <option value="academic">Academic</option>
              <option value="honors">Honors</option>
              <option value="ap">AP</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
