import { useContext } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Profile from './pages/Profile.jsx';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { AuthContext } from './context/AuthContext';
import './App.css';
import OverView from "./pages/OverView.jsx";

function App() {
    const { isAuth } = useContext(AuthContext);

    return (
        <>
            <NavBar />
            <div className="content">
                <Routes>
                    <Route path="*" element={isAuth ? <Profile/> : <Home />}/>
                    <Route path="/overview" element={<OverView/>} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/signin" element={<SignIn />}/>
                    <Route path="/signup" element={<SignUp />}/>
                </Routes>
            </div>
        </>
    );
}

export default App;