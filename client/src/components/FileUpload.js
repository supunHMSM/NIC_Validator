import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    const [files, setFiles] = useState([]);

    const handleFileChange = (e) => {
        setFiles(e.target.files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        for(let i = 0; i < files.length; i++){
            formData.append('files', files[i]);
        }
        try {
            await axios.post('http://localhost:5000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Files uploaded successfully');
        }catch(err){
            console.error('Error uploading files', err);
            alert('Failed to upload files');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" multiple onChange={handleFileChange} />
            <button type="submit">Upload Files</button>
        </form>
    )
   
}

export default FileUpload;