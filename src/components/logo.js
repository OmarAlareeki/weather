import React from 'react';
import './components.css';
import logo from './logo2.png'

class Logo extends React.Component {
  render(){
    return(
      <div id='logo'>
     <img src={logo} className="App-logo" alt="logo" />
      </div>
      )
  }
}

export default Logo;
