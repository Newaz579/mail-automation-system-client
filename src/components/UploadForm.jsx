import React, { useState } from 'react';
import axios from 'axios';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');
    const [data, setData] = useState([]); 

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            setMessage('Please upload a file');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await axios.post('http://localhost:5000/api/mail/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setMessage(res.data.message);
            setData(res.data.data); 
        } catch (err) {
            console.error('File upload error:', err);
            setMessage('Error uploading file');
        }
    };

    const handleAddRow = () => {
        setData([...data, { name: '', subject: '', title: '' }]); 
    };

    const handleDeleteRow = (index) => {
        const updatedData = [...data];
        updatedData.splice(index, 1);
        setData(updatedData);
    };

    const handleFieldChange = (index, field, value) => {
        const updatedData = [...data];
        updatedData[index][field] = value;
        setData(updatedData);
    };

    return (
        <div>
            <h2>Upload Excel File</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>
            <p>{message}</p>

            
            {data.length > 0 && (
                <div>
                    <h3>Parsed Data</h3>
                    <button onClick={handleAddRow}>Add Row</button>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Subject</th>
                                <th>Title</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index) => (
                                <tr key={index}>                   
                                    <td>
                                        <input
                                            type="text"
                                            value={row.name || ''}
                                            onChange={(e) => handleFieldChange(index, 'name', e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            value={row.subject || ''}
                                            onChange={(e) => handleFieldChange(index, 'subject', e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            value={row.title || ''}
                                            onChange={(e) => handleFieldChange(index, 'title', e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteRow(index)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default UploadForm;
