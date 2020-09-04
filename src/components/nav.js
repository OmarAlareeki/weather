import React,{Component} from 'react';
import './components.css';

class Navbar extends React.Component{
  render(){
    return(

      <div>
        <ul id="nav">
          <li><a href="#">TODAY</a></li>
          <li><a href="#">TOMORROW</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
      </div>
      )
  }
}
export default Navbar;
