import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import ChordTool from './ChordTool.js';
import ScaleTool from './ScaleTool.js';
import Home from './Home.js';
import Footer from "./components/Footer.js";
import Tuner from './Tuner.js';
import {Theme} from './hooks/theme.js';

 

function App() {
  return (
    <Theme>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/progressions" element={<ChordTool />} />
          <Route path="/scales" element={<ScaleTool />} />
          <Route path="/tuner" element={<Tuner />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Theme>
  );
}

export default App;
