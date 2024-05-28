import React, { useState, useEffect } from "react";
import '../CreatePost.css'; 
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../../firebase';
import Footer from '../FootNote.js';
import { useNavigate } from 'react-router-dom';


function CreatePost() {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [link, setLink] = useState("");

  const postsCollectionsRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionsRef, {
      title,
      postText,
      link,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  return (
    <>
      <div className="createPostPage">
      <div className='cpContainer'>
        <h1>Create A Post</h1>
        <div className='inputGp'> 
          <label> Title:</label>
          <input placeholder='Title...' onChange={(event) => { setTitle(event.target.value) }} />
        </div>
        <div className='inputGp'> 
          <label>Post:</label>
          <textarea placeholder='Post...' onChange={(event) => { setPostText(event.target.value) }} />
        </div>
        <div className='inputGp'> 
          <label>Link:</label>
          <input placeholder='Link...' onChange={(event) => { setLink(event.target.value) }} />
        </div>
        <button onClick={createPost}>Submit Post</button>
      </div>
    </div>

      <Footer />
    </>
    
  );
}

export default CreatePost;
