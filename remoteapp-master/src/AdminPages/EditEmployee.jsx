import React from 'react'
import { useState,Component} from 'react';
import { useEffect } from 'react';
import "./AddEmployee.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { padding } from "@mui/system";
import Add from "@mui/icons-material/Add";
import AdminHomePage from './AdminHomePage';
import data from './AdminHomePage';
import datas from './AdminHomePage';
import {useParams} from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import { BackspaceOutlined, Update } from "@mui/icons-material";
const heading={
    color: "#a40865",fontStyle: "italic", fontWeight: "bold",fontSize: "larger"
}
function EditEmployee() {
    const[empId,setEmpId]=useState("");
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[mobileNumber,setMobileNumber]=useState("");
    const[password,setPassword]=useState("");
    const[role,setRole]=useState("");
    //const history=useHistory();
    const{id}=useParams();
    
 useEffect(
    ()=>{
      console.log(id);
      getUsers();
    }
  ,[])

  const getUsers=async()=>{
     fetch("http://localhost:8096/admin/get/"+`${id}`)
     .then((response)=>response.json())
     .then((p) => (
      setEmpId(p.empId),
      setName(p.name),
      setEmail(p.email),
      setMobileNumber(p.mobileNumber),
      setPassword(p.password),
      setRole(p.role)
     )
     )
    
  }
    
    const update=()=>{
      let item={empId,name,email,mobileNumber,password,role}
      console.log(item);
      fetch("http://localhost:8096/admin/update/"+`${id}`,{
          method:'PUT',
           headers:{
              "Accept":"application/json",
           "Content-Type":"application/json"
          },
          
           body:JSON.stringify(item)
        
  
        }).then((result)=>{
          // result.json().then((resp)=>{
          //   console.warn(resp)
          //   getUsers();
          //toast.success(`"${item.email}" updated successfully!!!`,{position: toast.POSITION.TOP_CENTER,autoClose:2000})
          alert(`"${item.email}" updated successfully!!!`)
          window.location.href = "/admin/adminhome";
         
            console.log("updated");
          // }
          // )
           
        
        })
  }
 
      
    
    
    
  return (
    <div>
       <center> <h1 style={heading}> UPDATE USER </h1> <br></br></center>  
      
         <div className="enroll_form_container">
        <div className="enroll_form_container-below">
        
        <input
            required
            type="number"
            className="row1"
            autoFocus
            value={empId}
            onChange={(e) => {
                setEmpId(e.target.value)
            }
        }
            placeholder="Enter empId"
            id="empId"
          ></input>
<input  required
            type="text"
            className="row1"
            autoFocus
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }
        }
            placeholder="Enter the Name"
            id="name"
          ></input>

<input  required
            type="text"
            className="row1"
            autoFocus
            value={email}
            onChange={(e) => {
                setEmail(e.target.value)
            }
        }
            placeholder="Enter the Email"
            id="email"
          ></input>

<input  required
            type="text"
            className="row1"
            autoFocus
            value={mobileNumber}
            onChange={(e) => {
              setMobileNumber(e.target.value)
          }
        }
            placeholder="Enter Mobile Number"
            id="mobileNumber"
          ></input>

<input  required
            type="text"
            className="row1"
            autoFocus
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }
        }
            placeholder="Enter password"
            id="password"
          ></input>
    <input  required
            type="text"
            className="row1"
            autoFocus
            value={role}
            onChange={(e) => {
                setRole(e.target.value)
            }
        }
            placeholder="Enter Role"
            id="role"
          ></input>
          
            </div>
        </div>
        <ToastContainer />
      <center> <Button  onClick={update}
      variant="contained" type="submit">Submit</Button></center> 
      
    </div>
  )
}

export default EditEmployee