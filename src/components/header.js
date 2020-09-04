import React from "react";
import Navbar from './nav';

class Header extends React.Component{
  render(){
    return(
      <div>
        <header className="App-header">
          <Navbar />
        </header>
      </div>

      )
  }
}



export default Header;
