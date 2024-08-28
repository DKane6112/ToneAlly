import React, {useState} from 'react';
import Home from './Home.js'
import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';
import './index.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Analyse from './Analyse.js';

function App() {

  return (
  <Router>
    <div className="App">
      <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/analyse" element={<Analyse />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
