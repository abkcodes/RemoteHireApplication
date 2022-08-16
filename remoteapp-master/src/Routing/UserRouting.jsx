import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

import UserHomePage from '../UserPages/UserHomePage';
import AppliedJobs from '../UserPages/AppliedJobs';
import Apply from '../UserPages/Apply';
import Profile from '../UserPages/Profile';
import PrivateRoute from '../LoginAndSignupPages/Private';

export default function UserRouting() {
  const value1 = "http://localhost:8080/";
  return (
   
    <div>
      <Router>
     
        <Routes>
        <Route path="/" element={<PrivateRoute />}>
       
        <Route path="/user/userhome" exact element={<UserHomePage value1={value1} />} />
        <Route path="/user/appliedjobs" exact element={<AppliedJobs value1={value1} />} />
        <Route path="/user/applyform" exact element={<Apply value1={value1} />} />
        <Route path="/user/profile" exact element={<Profile value1={value1} />} />
        </Route >
        </Routes>
      </Router>
      
    </div>
  )
}