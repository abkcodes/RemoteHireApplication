import React from 'react'
import { useState,Component} from 'react';
import { useEffect } from 'react';
import "./AddJob.css";
import Button from "@mui/material/Button";

import {useParams} from 'react-router';
import HrHeader from '../Components/HrComponents/HrHeader';

const heading={
    color: "#a40865",fontStyle: "italic", fontWeight: "bold",fontSize: "larger"
}
function Updatejob() {
    const[jobid,setjobid]=useState("");
    const[jobtitle,setjobtitle]=useState("");
    const[joblocation,setjoblocation]=useState("");
    const[jobtype,setjobtype]=useState("");
    const[jobdesc,setjobdesc]=useState("");
    const[salary,setsalary]=useState("");
    //const history=useHistory();
    const{id}=useParams();
    
 useEffect(
    ()=>{
      console.log(id);
      getUsers();
    }
  ,[])

  const getUsers=async()=>{
     fetch("http://localhost:8096/hr/getjobs/"+`${id}`)
     .then((response)=>response.json())
     .then((p) => (
    setjobid(p.jobid),
    setjobtitle(p.jobtitle),
    setjoblocation(p.joblocation),
    setjobtype(p.jobtype),
    setjobdesc(p.jobdesc),
    setsalary(p.salary)
     )
     )
    
  }
    
    const update=()=>{
      let item={jobid,jobtitle,joblocation,jobtype,jobdesc,salary}
      console.log(item);
      fetch("http://localhost:8096/hr/update/"+`${id}`,{
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
          window.location.href="/hr/hrhome"
            console.log("updated");
          // }
          // )
           
        
        })
  }
 /* function selectUsers(id){

    let datas=data[id-1];
    setjobid(datas.jobid)
    setjoblocation(datas.joblocation)
    setjobtitle(datas.jobtitle)
    setjobtitle(datas.jobtitle)
    setjobdesc(datas.jobdesc)
    setsalary(datas.salary)

  }*/
      
    
    
    
  return (
    <div>
      <HrHeader/>
       <center> <h1 style={heading}> UPDATE JOBS </h1> <br></br></center>  
      
         <div className="enroll_form_container">
        <div className="enroll_form_container-below">
        
        <input
            required
            type="number"
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
            value={jobtitle}
            onChange={(e) => {
                setjobtitle(e.target.value)
            }
        }
            placeholder="Enter Job Title"
            id="jobtitle"
          ></input>

<input  required
            type="text"
            className="row1"
            autoFocus
            value={joblocation}
            onChange={(e) => {
                setjoblocation(e.target.value)
            }
        }
            placeholder="Enter Job Location"
            id="joblocation"
          ></input>

<input  required
            type="text"
            className="row1"
            autoFocus
            value={jobtype}
            onChange={(e) => {
              setjobtype(e.target.value)
          }
        }
            placeholder="Enter Job Type"
            id="jobtype"
          ></input>

<input  required
            type="text"
            className="row1"
            autoFocus
            value={jobdesc}
            onChange={(e) => {
                setjobdesc(e.target.value)
            }
        }
            placeholder="Enter Job Description"
            id="jobdesc"
          ></input>
    <input  required
            type="number"
            className="row1"
            autoFocus
            value={salary}
            onChange={(e) => {
                setsalary(e.target.value)
            }
        }
            placeholder="Enter Job Salary"
            id="salary"
          ></input>
            </div>
        </div>
      <center> <Button  onClick={update}
      variant="contained" type="submit">Submit</Button></center> 
    </div>
  )
}

export default Updatejob