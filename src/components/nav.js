import React,{Component} from 'react';
import './components.css';
import Logo from './logo';
// import Brightness4Icon from '@material-ui/icons/Brightness4';
import TextField from '@material-ui/core/TextField';
import TuneIcon from '@material-ui/icons/Tune';

class Navbar extends React.Component{
  render(){
    return(

      <div>
        <ul id="nav">
          <li><Logo /></li>
          <li>
            <form>
              <input id='textField' type='text' placeholder='update location'/>
            </form>
          </li>
          <li><a href="#">Today's weather</a></li>
          <li><a href="#">Tomorrow's forcast</a></li>
{/*          <li><a href="#">F</a></li>
          <li><a href="#">C</a></li>*/}
          <li><a><TuneIcon id="setting-icon"/></a></li>
        </ul>
      </div>
      )
  }
}
export default Navbar;
