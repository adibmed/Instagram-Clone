import React, { useState, useEffect } from 'react';
import './App.css'; 
import Post from './Post';
import { db } from './firebase';

function App() {
  const [posts, setPosts] = useState([]); 

  // UseEffect Runs a piece of code based on a specific condition
  useEffect(()=>{
    // Post change & Post copoenent loads. This where the code runs
    db.collection('posts').onSnapshot(snapshot =>{
    //  every time a new post is added, the code fires
    setPosts(snapshot.docs.map(doc => ({
      id: doc.id,
      post: doc.data()
    })
    ));
  });
}, []);

  return (
    <div className="app">
      {/* Header */}
      <header>
        <div className="app__header">
          <img 
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
          />
          
        </div>
          <h1>Hello this Adibe🚀</h1>
            
          {
            posts.map(({id, post})=> (
              <Post
              key={id} 
              username={post.username} 
              caption={post.caption} 
              imgUrl={post.imgUrl} />
            ))
          }

      </header>
    </div>
  );
}

export default App;
