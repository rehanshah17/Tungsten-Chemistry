import React, {useState} from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import Footer from '../FootNote.js';
import { Button } from '../Button.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <>
      <div className='log-in-container'>
        <form onSubmit={SignIn}>
          <h1>
            Sign In
          </h1>
          <input
            type="email" 
            placeholder='Enter your email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password" 
            placeholder='Enter your password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button type='submit'> Sign In</button>
        </form>
      </div>
      <li className='nav-item'>
        <Link
          to='/sign-up'
        >
          Sign Up
        </Link>
      </li>
    <Footer />
    </>
  );
}

export default SignIn;