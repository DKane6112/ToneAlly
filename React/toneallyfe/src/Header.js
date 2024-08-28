import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import App from './App.js';
import Analyse from './Analyse.js';

function Header(){
    return(
            <div>
                <header id="header">
                    <h1><img id="favicon" src="/favicon.ico" alt="ToneAlly Logo"/>ToneAlly</h1>
                </header>

                <nav id="nav">
                    <Link id="about" class="navButton" to="/">About</Link>
                    <Link id="analysis" class="navButton" to="/analyse">Analyse</Link>
                    <Link id="refresh" class="navButton" to="/">Create</Link>
                </nav>
            </div>
            );
        }
export default Header;
