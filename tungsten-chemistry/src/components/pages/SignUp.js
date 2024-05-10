import React, {useState} from 'react';
import '../../App.css';
import Footer from '../FootNote.js';
import { Button } from '../Button.js';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  return (
    <>
      <div className='sign-up-container'>
        <h1>
          Log In
        </h1>
        <input
          type="email" 
          placeholder='Enter your email' 
          //value={email}
        ></input>
        <input
          type="password" 
          placeholder='Enter your password' 
          //</div>value={password}
          >

          </input>
        <Button buttonStyle="btn--test"> Enter</Button>
      </div>
    <Footer />
    </>
  );
}

export default SignUp;