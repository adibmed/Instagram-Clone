import React, { useState, useEffect } from 'react';
import './App.css'; 
import Post from './Post';
import { db } from './firebase';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Input } from '@material-ui/core';


function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle); 

  const [posts, setPosts] = useState([]); 
  const [open, setOpen] = useState(false);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 

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
 
const singUp = (event) => {

}
  return (
    <div className="app"> 
      <Modal
        open={open}
        onClose={()=> setOpen(false)}
      >
        <center>
          <div style={modalStyle} className={classes.paper}>
            <img 
            className="app__headerImage"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt=""
            />
            <Input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={singUp}>Singup</Button>
          </div>
        </center>
      
      </Modal>
      <header>
       
          <div className="app__header">
            <img 
            className="app__headerImage"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt=""
            />
            
          </div>
         
        <Button onClick={() => setOpen(true)}>Signup</Button>
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
