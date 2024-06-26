import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const API_URL = "http://localhost:3500/users";

    const [inputUserName, setInputUserName] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [details, setDetails] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const res = await fetch(API_URL);
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const fetchedDetails = await res.json();
                setDetails(fetchedDetails);
            } catch (error) {
                console.log('Fetch error:', error);
            }
        };

        fetchDetails();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const trimmedUserName = inputUserName.trim();
        const trimmedPassword = inputPassword.trim();

        const user = details.find(
            (user) => 
                (user.username === trimmedUserName && user.password === trimmedPassword) 
                
        );

        console.log("User input:", { username: trimmedUserName, password: trimmedPassword });
        console.log("User found:", user); 

        if (user) {
            navigate('/home');
        } else {
            console.log("Invalid credentials");
        }
    };

    return (
        <div>
            <h1>Log in</h1>
            <div className="mainSign">
                <form onSubmit={handleSubmit} className='form'>
                    <label> UserName </label>
                    <input
                        type='text'
                        value={inputUserName}
                        onChange={(e) => setInputUserName(e.target.value)}
                    />
                    <label> Password </label>
                    <input
                        type='password'
                        value={inputPassword}
                        onChange={(e) => setInputPassword(e.target.value)}
                    />
                    <button type='submit' className='formbut'>
                        Enter
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
