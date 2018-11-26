import React from 'react'
import SideNav from '../../components/SideNav';
import BubblesBanner from '../../components/BubbleBanner';
import { Segment,Grid } from 'semantic-ui-react';
import Bubble from '../../components/Bubble';
import API from "../../utils/API";
import { set } from 'mongoose';


class UserDashboard extends React.Component {

  constructor(props) {
    super(props);
    // initialize state here
    this.state = {
      bubbles: [],
      avatar:""
    }
  }

  componentDidMount() {
    this.loadData()
    
  
}

  loadData = async() =>{

 const data = await API.dashboardInfo();
 console.log(data)

      
  }
    

  render() {

  return (
    <div>
       <BubblesBanner/>
      <div className = "container">
        <Grid>
          <Grid.Column width ={2}>
            <SideNav>
            
            </SideNav>
          </Grid.Column>
          <Grid.Column stretch width = {14}>
            <Segment >
              {/* <BubbleCanvas/> */}
              <Bubble/>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
}
}


export default UserDashboard