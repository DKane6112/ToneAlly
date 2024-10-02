import React, {useState} from 'react';
import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';
import Input from './Input.js'
import './index.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Analyse from './Analyse.js';

function Home() {

  return (
  <div>
      <Header />
      <Input />
      <Content />
      <Footer />
  </div>
  );
}

export default Home;