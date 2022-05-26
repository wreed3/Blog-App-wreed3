import React, { useState } from 'react'
import "./CreatePost.css"
import {useNavigate} from 'react-router-dom'


export default function CreatePost() {

  const [title, setTitle] = useState('');
  const [textBox, setTextBox] = useState('');
  const [userName, setUserName] = useState('');
  const nav = useNavigate();
 


  const submitPost = async (e) => {
    e.preventDefault();
    try{
      const response = await fetch('http://localhost:3003/Post', {
        method: 'POST', headers: {"content-Type": 'application/json'}, body: JSON.stringify({title: title, postText: textBox, userName: userName})
      });
      const json = await response.json();
      console.log(json);
      nav('/')
    }catch(e){
      console.log(e);
    }
    
    }

    // Axios.post('http://localhost:3003/CreatePost', {title: title, postText: textBox, userName: userName})
    

  return (
    <div className="create-post-container">
      <span className="createPost-title">Create Post</span>
      <span className='createPost-username'>
        <input
                className="form-control "
                type="text"
                name="name" onChange={(e)=>{
                  setUserName(e.target.value);
                }}
                placeholder="username"
                required
                />
      </span>
      <div className="form">
        <form onSubmit={submitPost}>
          <div className="form-group">
            <textarea
              className="form-control createPost-title-title"
              type="text"
              name="title"onChange={(e)=>{
                setTitle(e.target.value);
              }}
              placeholder="title"
              required
            />
           
              <textarea
                className="form-control createPost-text"
                name="text" onChange={(e)=>{
                  setTextBox(e.target.value);
                }}
                placeholder="Text"
                required
              />

            <div className='submit-button'>
            <button className="form-control btn btn-primary " type="submit">
              Submit
            </button>
            </div>
            
          </div>
        </form>
      </div>
    </div>
  )
}
