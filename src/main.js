import React from 'react';
import './style.css';
import Navbar from './components/nav';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import logo from './components/logo.png';

function App() {
  return (
    <div className="App">
     <Header />
     <Body />
     <Footer />
    </div>
  );
}

export default App;
