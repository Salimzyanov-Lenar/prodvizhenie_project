import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import Home from './pages/Home';
import About from './pages/About';
import Account from './pages/Account/Account';
import Courses from './pages/Courses';
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
                <Route path="/courses" element={<Courses/>} />
                <Route path="/inspiration" element={<Inspiration/>} />
                <Route path="/team" element={<Team/>} />
            </Routes>
        </Router>
        </>
    );
}

export default App;