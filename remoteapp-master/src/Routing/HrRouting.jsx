import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";

import DisplayJob from '../HRPages/DisplayJob';
import Updatejob from '../HRPages/Updatejob';
import AddJobs from '../HRPages/AddJobs';
import UserApplied from '../HRPages/UserApplied';
import HrPrivateRoute from '../LoginAndSignupPages/HrPrivate';
import Status from '../HRPages/Status';


export default function HrRouting() {
  // const value1 = "http://localhost:8080/";
  return (
   
    <div>
      <Router>
   
        <Routes>
          
        <Route path="/" element={<HrPrivateRoute/>}>
        <Route path="/hr/hrhome" exact element={<DisplayJob/>} />
        <Route path="/hr/addjob" exact element={<AddJobs     />} />
        {/* <Route path="/display" excat element={<DisplayJob     />}/> */}
        <Route path="/hr/hrhome/:id/" excat element={<Updatejob    />}/>
        <Route path="/hr/hrapplication" exact element={<UserApplied     />}/>
        <Route path="/hr/hrapplication/:id/:emails/" exact element={<Status/>}/>
       
      
        </Route>
        </Routes>
      </Router>
      
    </div>
  )
}