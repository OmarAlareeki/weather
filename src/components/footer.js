import React from "react";
import './components.css';
import {
  HorizontalLayout,
  VerticalLayout,
  Panel,
  Separator,
  Spacer,
  View
} from "nice-react-layout";

class Footer extends React.Component{
  render(){
    return(
        <div className='footer'>
        <p>Copy rights &#169; Omarproductions</p>
        </div>
      )
  }
}


export default Footer;
