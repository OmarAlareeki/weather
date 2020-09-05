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
      <VerticalLayout mockup>
        <Panel className='footer'>
        <h6>This was developed & designed by:</h6>
        </Panel>
      </VerticalLayout>
      )
  }
}


export default Footer;
