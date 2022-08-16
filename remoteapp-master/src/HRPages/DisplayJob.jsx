import React from 'react'
import "./DisplayJob.css";
import { useState } from 'react';
import { useEffect } from 'react';
import{BrowserRouter as Router,Link} from "react-router-dom";
import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';
import HrHeader from '../Components/HrComponents/HrHeader';

const heading={
    color: "#a40865",fontStyle: "bold", fontWeight: "bold",fontSize: "larger"
}
function DisplayJob() {

  const [data,setData]=useState([]);

  useEffect(()=>{
   getadmission();
  },[]);
  function getadmission(){
    fetch("http://localhost:8096/hr/getalljobs")
    .then((response)=>response.json())
    .then((p) => setData(p)
         
    );
  }

  function deleteadmission(jobid)
{
  // alert(id)
  fetch("http://localhost:8096/hr/delete/"+`${jobid}`,{
    method:'DELETE'
  }).then((response)=>{
    response.json().then((resp)=>{
      console.warn()
      console.log("deleted")
    })
     
  
  })
}
  return (
    <div>
      <HrHeader/>
        <center> <h1 style={heading}> JOBS </h1> <br></br></center>
        <table className = " zindex table table-striped table-bordered">

    <thead>
       <tr>
      
           <th>JobId</th>
           <th>JobTitle</th>
           <th>JobLocation</th>
           <th>JobType</th>
           <th>Job Description</th>
           <th>Salary</th>
           <th>Delete</th>
           <th>Update</th>
           
   
       </tr>
    </thead>
    <tbody>
 


    {data.map(datas=>(

<tr key={datas.jobid}>


  {/* <td>{datas.userId}</td> */}
  <td>{datas.jobid}</td>
  <td>{datas.jobtitle}</td>
  <td>{datas.joblocation}</td>
  <td>{datas.jobtype}</td>
  <td>{datas.jobdesc}</td>
  <td>{datas.salary}</td>
  <td>
  <button 
  onClick={()=>deleteadmission(datas.jobid)}> Delete</button>
    
  </td>
  <td>
  <Link to={`${datas.jobid}/`}>update</Link>
  </td>
  </tr>

 

))}      
     


  </tbody>
        </table>

        <Link
          to="/hr/addjob"
          style={{ color: "white", textDecoration: "none" }}
        >
          <Button
            className="btn btn-submit"
            //  onClick={getemail}
            type="submit"
            variant="contained"
            style={{ margin: "5px", zIndex: -1 }}
            startIcon={<Add/>}
            color="primary"
          >
            Add Job{" "}
          </Button>
        </Link>


        </div>
  )
}

export default DisplayJob
