import { Link } from 'react-router-dom';

import React  from 'react';

import { useAuth } from '../Hooks/Auth';

export default function NaviBar() {

  const authorize = useAuth();

 

  return (

    <nav className='navi-bar'>

      <div className='navi-bar-links'>

        <Link to='/' className='bres-link'> </Link>

          {authorize.userEmail ? (

          <button className='logout-button' onClick={authorize.logout}>

            Logout

          </button>

        ) : (
          <>
          <br/>
          <br/>
            <Link to='/login' className='login-link'>

              Login Information

            </Link>

          <br/>
          <br/>


            <Link to='/register' className='register-link'>

              Registration Information

            </Link>
          </>
        )}
        <br/>
        <br/>
        

        <Link to='/blog' className='blog-link'>Blogs!</Link>

      </div>

      {authorize.userEmail ? (

        <p className='welcome-message-1'>Welcome User!, {authorize.userEmail}</p>
      ) : (
        <p className='alt-welcome-message-2'>Welcome, Guest!</p>
      )}

    </nav>
  );
}