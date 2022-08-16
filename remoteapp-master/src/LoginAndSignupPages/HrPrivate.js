import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';


const hruseAuth=()=>{
    const auth=localStorage.getItem('hr')
  if(auth){
      return true
  }
  else{
      return false
  }
}

const HrPrivateRoute = () => {
    
     // determine if authorized, from context or however you're doing it
   // alert(auth.isAuthenticated())
   
    return hruseAuth() ? <Outlet /> : <Navigate to="/" />;
}
export default HrPrivateRoute