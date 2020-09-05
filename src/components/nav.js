import React,{Component} from 'react';
import './components.css';
import Logo from './logo';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import TextField from '@material-ui/core/TextField';


class Navbar extends React.Component{
  render(){
    return(

      <div>
        <ul id="nav">
          <li><Logo /></li>
          <li><a href="#">TODAY</a></li>
          <li><a href="#">TOMORROW</a></li>
          <li>
            <form>
              <input id='textField' type='text' placeholder='update location'/>
            </form>
          </li>
          <li><a href="#">F</a></li>
          <li><a href="#">C</a></li>
          <li><Brightness4Icon id="setting-icon"/></li>
        </ul>
      </div>
      )
  }
}
export default Navbar;
