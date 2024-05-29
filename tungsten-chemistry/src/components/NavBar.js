// NavBar.js
import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';
import { signInWithGoogle, onAuthChange, signOutUser } from "../firebase";
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [user, setUser] = useState(null);
  const [dropdown, setDropdown] = useState(false);
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const toggleDropdown = () => setDropdown(!dropdown);

  const fetchUserRole = async (uid) => {
    const userDoc = await getDoc(doc(db, "users", uid));
    if (userDoc.exists()) {
      setRole(userDoc.data().role);
    }
  };

  useEffect(() => {
    showButton();
    onAuthChange((user) => {
      setUser(user);
      if (user) {
        fetchUserRole(user.uid);
      }
    });
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img className="move-left" src={"/W.png"} width={45} height={45}/>
            Tungsten Chemistry
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/puzzles'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Puzzles
              </Link>
            </li>
            {role === 'teacher' && (
              <li className='nav-item'>
                <Link
                  to='/grades'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Grades
                </Link>
              </li>
            )}
            {!user ? (
              <li>
                <Link
                  to='/sign-in'
                  className='nav-links-mobile'
                  onClick={closeMobileMenu}
                >
                  Sign In
                </Link>
              </li>
            ) : (
              <li className='nav-item'>
                <div className='nav-links' onClick={toggleDropdown}>
                  <span className="username">{localStorage.getItem("name")}</span> 
                  <i className='fas fa-caret-down' />
                </div>
                {dropdown && (
                  <div className='dropdown-menu'>
                    <button onClick={signOutUser}>Sign Out</button>
                  </div>
                )}
              </li>
            )}
          </ul>
          {!user && button && <Button onClick={() => signInWithGoogle(navigate)} buttonStyle='btn--outline'>SIGN IN</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
