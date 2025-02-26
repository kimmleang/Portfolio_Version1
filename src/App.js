import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import "./style.css";
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/project" element={<Projects />} /> */}
        <Route path="/about" element={<About />} />
        {/* <Route path="/resume" element={<Resume />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;