import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

export const AuthContext = createContext( {} );
const baseUrl = 'https://frontend-educational-backend.herokuapp.com';

function AuthContextProvider( { children } ) {
  const [error, toggleError] = useState(false);
  const [ isAuth, toggleIsAuth ] = useState( {
    isAuth: false,
    user: null,
    status: 'pending',
  } );
  const navigate = useNavigate();

  async function backEndTest () {
      // debugger;
       try {
         const result = await axios.get(`${baseUrl}/api/test/all`)
         // console.log(result);
       } catch (e) {
         console.error(e);
         toggleError(true);
       }
     }
    void backEndTest();


  // MOUNTING EFFECT
  useEffect( () => {

    const token = localStorage.getItem( 'token' );

    if ( token ) {
      const decoded = jwtDecode( token );
      void fetchUserData( decoded.sub, token );
    } else {
      toggleIsAuth( {
        isAuth: false,
        user: null,
        status: 'done',
      } );
    }
  }, [] );

  function login( JWT ) {

    localStorage.setItem('token', JWT);
    const decoded = jwtDecode(JWT);
    console.log(decoded);
    void fetchUserData(decoded.sub, JWT, '/profile');
    navigate('/profile');
  }

  function logout() {
    localStorage.clear();
    toggleIsAuth( {
      isAuth: false,
      user: null,
      status: 'done',
    } );

    console.log( 'Gebruiker is uitgelogd!' );
    navigate( '/' );
  }
  async function fetchUserData(id, token, redirectUrl ) {
    try {
      const result = await axios.get( `https://frontend-educational-backend.herokuapp.com/api/user`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ token }`,
        },
      } );

      toggleIsAuth( {
        ...isAuth,
        isAuth: true,
        user: {
          username: result.data.username,
          email: result.data.email,
          id: result.data.id,
        },
        status: 'done',
      } );

      if ( redirectUrl ) {
        navigate( redirectUrl );
      }

    } catch ( e ) {
      console.error( e );

      toggleIsAuth( {
        isAuth: false,
        user: null,
        status: 'done',
      } );
    }
  }

  const contextData = {
    ...isAuth,
    login,
    logout
  };

  return (
      <AuthContext.Provider value={ contextData }>
        { isAuth.status === 'done' ? children : <p>Loading...</p> }
      </AuthContext.Provider>
  );
}

export default AuthContextProvider;