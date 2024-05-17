import {useContext} from 'react';
import logo from '../assets/Marvel-Logo-2000-2012.png';
import {useNavigate, Link} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';

function NavBar() {
    const {isAuth, logout} = useContext(AuthContext);
    const navigate = useNavigate();
//console.log (isAuth, "in the navbar");

    return (
        <nav>
            <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
          </span>
            </Link>

            {isAuth ?
                <>
                    <button type="button" onClick={() => {
                        navigate("/profile")
                    }}>
                        Profile
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            navigate("/overview")
                        }}>
                        Overview
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            navigate("/comics")
                        }}>
                        Comics
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            logout();
                            navigate("/");
                        }}>
                        Log uit
                    </button>
                </>

                :
                <div>
                    <button
                        type="button"
                        onClick={() => navigate('/signin')}
                    >
                        Log in
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate('/signup')}
                    >
                        Registreren
                    </button>
                </div>
            }
        </nav>
    );
}

export default NavBar;
