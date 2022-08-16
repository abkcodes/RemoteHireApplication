import React, { useState } from 'react'
import { useEffect } from 'react';
import "./AddJob.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { padding } from "@mui/system";
import Add from "@mui/icons-material/Add";
import DisplayJob from './DisplayJob';
import data from './DisplayJob';
import datas from './DisplayJob';
import {useParams} from 'react-router';
import { EmailSharp } from '@mui/icons-material';
import HrHeader from '../Components/HrComponents/HrHeader';
const heading={
    color: "#a40865",fontStyle: "italic", fontWeight: "bold",fontSize: "larger"
}
function Status() {
    const[jobid,setjobid]=useState("");
    const[email,setEmail]=useState("");
    const[status,setstatus]=useState("");
    const{id}=useParams();
    const{emails}=useParams();
  useEffect(
        ()=>{
            console.log(id);
            console.log(emails)
        
          getUsers();
        }
      ,[])
      const getUsers=async()=>{
        fetch("http://localhost:8096/getapplys/"+`${emails}/`+`${id}`)
        .then((response)=>response.json())
        .then((p) => (
            setjobid(p.jobid),
            setEmail(p.email)
       
       
        )
        )
       
     }

     const update=()=>{
        let item={jobid,email,status}
        console.log(item);
        fetch("http://localhost:8096/updatestatus/"+`${id}/`+`${emails}`,{
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
            window.location.href="/hr/hrapplication"
              console.log("updated");
            // }
            // )
             
          
          })
    }
  

  return (
    <div>
      <HrHeader />
         <center> <h1 style={heading}> SET THE STATUS OF JOB APPLICATION</h1> <br></br></center>  
        <div className="enroll_form_container">
        <div className="enroll_form_container-below">
        
        <input
            required
            type="text"
            className="row1"
            autoFocus
            value={jobid}
            onChange={(e) => {
                setjobid(e.target.value)
            }
        }
            placeholder="Enter Job Id"
            id="jobid"
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
            placeholder="Enter Email"
            id="email"
          ></input>

<input  required
            type="text"
            className="row1"
            autoFocus
            value={status}
            onChange={(e) => {
                setstatus(e.target.value)
            }
        }
            placeholder="Enter status"
            id="status"
          ></input>
</div>
</div>
<center> <Button  onClick={update}
      variant="contained" type="submit">Submit</Button></center>
    </div>
  )
}

export default Status