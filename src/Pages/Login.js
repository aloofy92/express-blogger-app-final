import React  from 'react';

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { useAuth } from '../Hooks/Auth';


export default function Login() {

    const navigate = useNavigate();

    const { login } = useAuth();

    const [userEmail, setUserEmail] = useState('');

    const [userPassword, setUserPassword] = useState('');

  

    const handleSubmit = async (event) => {

        event.preventDefault();

        const information = await login(userEmail, userPassword);

        if (information.token) {

            navigate('/blogs');
        }
    };

    return (

        <div className='login-area'>

            <h1>Login Here!</h1>
            
            <form onSubmit={handleSubmit}>

                <input

                    type='email'

                    placeholder='userEmail'

                    value={userEmail}

                    onChange={(event) => setUserEmail(event.target.value)}
                />
                <input

                    type='password'

                    placeholder='userPassword'

                    value={userPassword}

                    onChange={(event) => setUserPassword(event.target.value)}
                />
                <button type='submit'>Login!</button>

            </form>

        </div>

    );
}