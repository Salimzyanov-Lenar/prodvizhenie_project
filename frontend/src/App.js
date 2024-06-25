import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import Home from './pages/Home';
import About from './pages/About';
import Account from './pages/Account/Account';
import Login from './pages/Account/Login';
import Register from './pages/Account/Register';
import PrivateRoute from './components/PrivateRoute';
import Courses from './pages/Courses/Courses';
import CoursesYoung from './pages/Courses/CoursesYoung';
import CoursesOld from './pages/Courses/CoursesOld';
import Inspiration from './pages/Inspiration';
import Team from './pages/Team';


function App() {
    return (
        <>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/account/*" element={<Account />} />
                <Route path="/account/login" element={<Login />} />
                <Route path="/account/register" element={<Register />} />
                <Route path="/courses" element={<PrivateRoute element={<Courses />} />} />
                <Route path="/courses/courses_young" element={<PrivateRoute element={<CoursesYoung />} />} />
                <Route path="/courses/courses_old" element={<PrivateRoute element={<CoursesOld />} />} />
                <Route path="/inspiration" element={<Inspiration/>} />
                <Route path="/team" element={<Team/>} />
            </Routes>
        </Router>
        </>
    );
}

export default App;