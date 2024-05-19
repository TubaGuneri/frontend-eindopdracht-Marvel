import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Profile from './pages/Profile.jsx';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { AuthContext } from './context/AuthContext';
import './App.css';
import Character from "./pages/Character.jsx";
import ComicsDetail from "./pages/ComicsDetail.jsx";
import Comics from "./pages/Comics.jsx";
import CharacterDetail from "./pages/CharacterDetail.jsx";

function App() {
    const { isAuth } = useContext(AuthContext);

    return (
        <>
            <NavBar />
            <div className="content">
                <Routes>

                    <Route path="*" element={isAuth ? <Profile /> : <Home />}/>
                    <Route path="/" element={<Home />} />
                    <Route path="/character" element={isAuth ? <Character/> : <SignIn />} />
                    <Route path="/profile" element={isAuth ? <Profile /> : <SignIn />} />
                    <Route path="/signin" element={<SignIn />}/>
                    <Route path="/signup" element={<SignUp />}/>
                    <Route path='/character/:id' element={isAuth ? <CharacterDetail/> : <SignIn />}/>
                    <Route path="/comics" element={isAuth ? <Comics /> : <SignIn />} />
                    <Route path="/comics/:id" element={isAuth ? <ComicsDetail /> : <SignIn />} />


                </Routes>
            </div>
            <footer className="footer-navigation">
                &copy;  2024 - ontwikkeld door Tuba Güneri / Frontend Eindopdracht
            </footer>
        </>
    );
}

export default App;