import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';


const adminuseAuth=()=>{
    const auth=localStorage.getItem('admin')
  if(auth){
      return true
  }
  else{
      return false
  }
}

const AdminPrivateRoute = () => {
    
    
   
    return adminuseAuth() ? <Outlet /> : <Navigate to="/" />;
}
export default AdminPrivateRoute