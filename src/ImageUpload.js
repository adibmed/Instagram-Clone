import React from 'react'
import { Button } from '@material-ui/core'

function ImageUpload() {
    return (
        <div>
            <h1>abc</h1>
                {/* I wanat ro have */}
                {/* Captions input */}
                {/* file picker */}
                {/* post button */}
                <input type="text"/>
                <input type="file" onChange={handleChange} />
                <Button onClick>Upload</Button>
        </div>
    )
}

export default ImageUpload
