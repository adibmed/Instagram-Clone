import { Button } from '@material-ui/core';
import React, {useState} from 'react';
import { storage, db } from 'firebase';
import firebase from 'firebase';

function ImageUpload({username}) {
    const [caption, setCaption] = useState('');
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);

    const handleChange = (e) => {
        if(e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        // Uploading
        const uploadTask = storage.ref(`image/${image.name}`).put(image);
         
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (error) => {
                // Error function ...
                alert(error.message);
            },
            () => {
                // complete function ... 
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        db.collection("posts").add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(), // Sorting posts
                            caption: caption,
                            imageUrl: url,
                        username: {username}
                        });
                    })
            }
   )
};

    return (
        <div>
            <h1>abc</h1>
                {/* I wanat ro have */}
                {/* Captions input */}
                {/* file picker */}
                {/* post button */}
                <input 
                    type="text" 
                    placeholder="Enter a caption..."
                    onChange={event => setCaption(event.target.value)}
                    value={caption}
                    />
                <input type="file" onChange={handleChange} />
                <Button onClick={handleUpload}>Upload</Button>
        </div>
    )
}

export default ImageUpload