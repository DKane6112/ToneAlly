import React from 'react';
import Header from './Header.js';
import AnalyseContent from './AnalyseContent.js';
import Footer from './Footer.js';
import './index.css';

function Analyse() {

  return (
    <div>
      <Header />
      <AnalyseContent />
      <div id = "output">
      </div>
      <Footer />
    </div>
  );
}

export default Analyse;