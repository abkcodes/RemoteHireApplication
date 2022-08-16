import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useParams,
  Outlet,
  Navigate,
} from "react-router-dom";
import AddEmployee from '../AdminPages/AddEmployee';

import AdminHomePage from '../AdminPages/AdminHomePage';
import EditEmployee from '../AdminPages/EditEmployee';
import AdminPrivateRoute from '../LoginAndSignupPages/AdminPrivate';

export default function AdminRouting() {
  const value1 = "http://localhost:8080/";
  return (
   
    <div>
      <Router>
     
     <Routes>
     {/* <Route path="/" element={<AdminPrivateRoute/>}> */}
    
     <Route path="/admin/adminhome" exact element={<AdminHomePage value1={value1}/>} />
        <Route path="/admin/adds" exact element={<AddEmployee value1={value1} />} />
        <Route path="admin/adminhome/:id/" excat element={<EditEmployee/>}/>
   {/* </ Route> */}
     
     </Routes>
   </Router>
      
    </div>
  )
}