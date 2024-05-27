import React, { useState, useEffect } from "react";
import '../CreatePost.css'; 
import {addDoc, collection} from 'firebase/firestore'
import { db,auth } from '../../firebase';

function CreatePost() {
  const [title,setTitle] = useState("")
  const [postText,setPostText] = useState("")

  const postsCollectionsRef = collection(db,"posts")

  const createPost = async() => {
    await addDoc(postsCollectionsRef, {
      title,
      postText,
      author: {name:auth.currentUser.displayName, id: auth.currentUser.uid},
    });
  };

  return (
    <div className="createPostPage">
      <div className='cpContainer'>
        <h1>Create A Post</h1>
        <div className='inputGp'> 
          <label> Title:</label>
          <input placeholder='Title...' onChange={(event)=>{setPostText(event.target.value)}}/>
        </div>
        <div className='inputGp'> 
        <label>Post:</label>
        <textarea placeholder='Post...'/>
        </div>
        <button onClick={createPost}>Submit Post</button>
      </div>
    </div>
  )
}

export default CreatePost
