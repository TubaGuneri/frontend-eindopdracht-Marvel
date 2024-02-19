import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

function SignIn() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, toggleError] = useState(false);
  const { login } = useContext(AuthContext);
const baseUrl = 'https://frontend-educational-backend.herokuapp.com';
  async function handleSubmit(e) {
    e.preventDefault();
    toggleError(false);

    try {
      const result = await axios.post(`${baseUrl}/api/auth/signin`, {
        username: userName,
        password: password,
      });
      // log het resultaat in de console
      console.log(result.data);

      // geef de JWT token aan de login-functie van de context mee
      login(result.data.accessToken);

    } catch(e) {
      console.error(e);
      toggleError(true);
    }
  }

  return (
      <>
        <h1>Inloggen</h1>


        <form onSubmit={handleSubmit}>
          <label htmlFor="username-field">
            Username:
            <input
                type="username"
                id="username-field"
                name="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
          </label>

          <label htmlFor="password-field">
            Wachtwoord:
            <input
                type="password"
                id="password-field"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {error && <p className="error">Combinatie van username en wachtwoord is onjuist</p>}

          <button
              type="submit"
              className="form-button"
          >
            Inloggen
          </button>
        </form>

        <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
      </>
  );
}

export default SignIn;