// import PropTypes from 'prop-types'
// import React, { Component } from 'react'

import React from 'react'
import SideNav from '../../components/SideNav';
import Bubble from '../../components/Bubble'
import PostForm from '../../components/PostForm';
import API from "../../utils/API";


const UserDashboard = () => {
  return (
    <div className = "container">
      <SideNav/>
      {/* <Bubble></Bubble> */}
      {/* <PostForm></PostForm> */}
    </div>
  );
};


export default UserDashboard