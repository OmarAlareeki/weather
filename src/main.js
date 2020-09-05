import React from 'react';
import './style.css';
import Navbar from './components/nav';
import Header from './components/header';
import Body from './components/body';
import logo from './components/logo.png';

function App() {
  return (
    <div className="App">
    <div>
     <Header />
     </div>
    <Body />
    </div>
  );
}

export default App;
