import React from 'react'
import "./AdminHomePage.css";
import { useState } from 'react';
import { useEffect } from 'react';
import{BrowserRouter as Router, Routes,Route,Link,Outlet,} from "react-router-dom";
import AdminHeader from '../Components/AdminComponent/AdminHeader';
import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';

const heading={
    color: "#a40865",fontStyle: "bold", fontWeight: "bold",fontSize: "larger"
}
function AdminHomePage() {

  const [data,setData]=useState([]);

  useEffect(()=>{
   getadmission();
  },[]);
  function getadmission(){
    fetch("http://localhost:8096/admin/getallemployee")
    .then((response)=>response.json())
    .then((p) => setData(p)
         
    );
  }

  function deleteadmission(empId)
{
  // alert(id)
  fetch("http://localhost:8096/admin/delete/"+`${empId}`,{
    method:'DELETE'
  }).then((response)=>{
    response.json().then((resp)=>{
      console.warn()
      
      console.log("deleted")
      window.location.href = "/admin/adminhome";
    })
     
  
  })
  
}
  return (
    <div>
      <AdminHeader />
        <center> <h1 style={heading}> LIST OF USER </h1> <br></br></center>
        <table className = " zindex table table-striped table-bordered">

    <thead>
       <tr>
      
           <th>EmpId</th>
           <th>Name</th>
           <th>Email</th>
           <th>MobileNumber</th>
           <th>Role</th>
           
           
   
       </tr>
    </thead>
    <tbody>
 


    {data.map(datas=>(

<tr key={datas.empId}>


  {/* <td>{datas.userId}</td> */}
  <td>{datas.empId}</td>
  <td>{datas.name}</td>
  <td>{datas.email}</td>
  <td>{datas.mobileNumber}</td>
  <td>{datas.role}</td>
  
  <td>
  <button 
  onClick={()=>deleteadmission(datas.empId)}> Delete</button>
    
  </td>
  <td>
  <Link
          to={`${datas.empId}/`}
          style={{ color: "white", textDecoration: "none" }}
        >
          <Button>Update</Button>
        </Link>
        
  
    
  </td>
  </tr>

 

))}      
     
  

  </tbody>
        </table>
        <Link
          to="/admin/adds"
          style={{ color: "white", textDecoration: "none" }}
        >
          <Button
            className="btn btn-submit"
            //  onClick={getemail}
            type="submit"
            variant="contained"
            style={{ margin: "5px", zIndex: -1 }}
            startIcon={<Add />}
            color="primary"
          >
            Add Employee{" "}
          </Button>
        </Link>
        </div>
  )
}

export default AdminHomePage

