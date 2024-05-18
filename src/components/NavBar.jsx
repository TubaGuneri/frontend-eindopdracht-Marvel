import {useContext} from 'react';
import logo from '../assets/Marvel-Logo-2000-2012.png';
import {useNavigate, Link} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';

function NavBar() {
    const {isAuth, logout} = useContext(AuthContext);
    const navigate = useNavigate();
//console.log (isAuth, "in the navbar");
    const handleProfileButton = () => {
        navigate("/profile");
    }
    const handleOverviewButton = () => {
        navigate("/overview");
    }
    const handleComicsButton = () => {
        navigate("/comics");
    }

    const handleLogoutButton = () => {
        logout();
        navigate("/");
    }

    return (
        <nav>
            <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
          </span>
            </Link>

            {isAuth ?
                <>
                    <div>
                        <button type="button" onClick={handleProfileButton}>
                            Profile
                        </button>
                        <button
                            type="button"
                            onClick={handleOverviewButton}
                        >
                            Overview
                        </button>
                        <button
                            type="button"
                            onClick={handleComicsButton}
                        >
                            Comics
                        </button>
                    </div>
                    {/*<button*/}
                    {/*    type="button"*/}
                    {/*    onClick={() => {*/}
                    {/*        logout();*/}
                    {/*        navigate("/");*/}
                    {/*    }}>*/}
                    {/*    Log uit*/}
                    {/*</button>*/}
                    <div>
                        <button
                            type="button"
                            onClick={handleLogoutButton}
                        >
                            Log uit
                        </button>
                    </div>
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
