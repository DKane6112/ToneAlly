import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import ChordTool from './ChordTool.js';
import ScaleTool from './ScaleTool.js';
import Home from './Home.js';
 

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/progressions" element={<ChordTool />} />
        <Route path="/scales" element={<ScaleTool />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
