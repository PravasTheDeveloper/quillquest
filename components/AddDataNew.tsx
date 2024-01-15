import React, { useState } from 'react';
import axios from 'axios';

export default function AddDataNew() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const handleAddData = async () => {
        try {
            // Assuming you have an API endpoint to handle the POST request
            const response = await axios.post('https://quillquest-rho.vercel.app/api/hello', {
                email,
                name,
            });

            // Handle the response as needed
            console.log(response.data);

            // Clear the input fields after successful submission
            setEmail('');
            setName('');
        } catch (error) {
            // Handle errors
            console.error('Error adding data:', error);
        }
    };

    return (
        <div>
            <label>
                Email:
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />
            <button onClick={handleAddData}>Add Data</button>
        </div>
    );
}
