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
import Character from "./pages/Character.jsx";
import ComicsDetail from "./pages/ComicsDetail.jsx";
import Comics from "./pages/Comics.jsx";

function App() {
    const { isAuth } = useContext(AuthContext);

    return (
        <>
            <NavBar />
            <div className="content">
                <Routes>

                    <Route path="*" element={isAuth ? <Profile /> : <Home />}/>
                    <Route path="/" element={<Home />} />
                    <Route path="/overview" element={isAuth ? <OverView/> : <SignIn />} />
                    <Route path="/profile" element={isAuth ? <Profile /> : <SignIn />} />
                    <Route path="/signin" element={<SignIn />}/>
                    <Route path="/signup" element={<SignUp />}/>
                    <Route path='/character/:id' element={isAuth ? <Character/> : <SignIn />}/>
                    <Route path="/comics/:id" element={isAuth ? <ComicsDetail /> : <SignIn />} />
                    <Route path="/comics" element={isAuth ? <Comics /> : <SignIn />} />
                </Routes>
            </div>
        </>
    );
}

export default App;