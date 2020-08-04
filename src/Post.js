import React from 'react';
import './App.css';
import Avatar from '@material-ui/core/Avatar';

function Post({username, caption, imgUrl}) {
    return (
        <div className="post">
            <div className="post__header">
            <Avatar
                className="post__avatar"
                alt="AdibeMohamed"
                src="/static/images/avatar/1.jpg"
                />
            <h3>{username}</h3>
            </div>

            <img
            className="post__image"
            src={imgUrl}/>
    
            <h4 className="post__text"><strong>{username}</strong> {caption}</h4>
   
        </div>
    )
}

export default Post