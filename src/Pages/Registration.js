import React  from 'react';

import {useState} from 'react';

import {useNavigate} from 'react-router-dom';

import {useAuth} from '../Hooks/Auth';



export default function Register() {

    const {register} = useAuth();

    const navigate = useNavigate();

    const [userEmail, setUserEmail] = useState('');

    const [userPassword, setUserPassword] = useState('');

    const [confirmUserPassword, setConfirmUserPassword] = useState('');


    const handleSubmit = async (event) => {

        event.preventDefault();

        const information = await register(userEmail, userPassword, confirmUserPassword);

        if (information.token) {

            navigate('/blogs');
        }
    };

    return (

        <div className='registration-area'>

            <h1>Registration: Register Info Here!</h1>

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

                    onChange={(e) => setUserPassword(e.target.value)}
                />

                <input

                    type='password'

                    placeholder='Confirm userPassword'

                    value={confirmUserPassword}

                    onChange={(e) => setConfirmUserPassword(e.target.value)}
                />

                <button type='submit'>Register</button>

            </form>

        </div>

    );

}