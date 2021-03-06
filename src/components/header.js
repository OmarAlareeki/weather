import React from "react";
import {
  HorizontalLayout,
  VerticalLayout,
  Panel,
  Separator,
  Spacer,
  View
} from "nice-react-layout";
import Navbar from './nav';

class Header extends React.Component{
  render(){
    return(
      <VerticalLayout mockup>
        <Panel fixed fixedHeight={90}>
          <Navbar />
        </Panel>
      </VerticalLayout>
      )
  }
}


export default Header;
