import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import ChordTool from './ChordTool.js';
 

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<ChordTool />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
