import React from 'react'
import Signup from '../LoginAndSignupPages/Signup'
import Login from '../LoginAndSignupPages/Login'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";


export default function Routing() {
  const value1 = "http://localhost:8080/";
  return (
   
    <div>
      <Router>
        
        <Routes>
        <Route path="/Register" exact element={<Signup value1={value1} />} />
        <Route path="/" exact element={<Login value1={value1} />} />
        </Routes>
      </Router>
      
    </div>
  )
}
