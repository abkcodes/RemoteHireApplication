import React, { useEffect, useState } from 'react'

import Header from '../Components/UserComponents/Header'

import "./UserHomePage.css";



import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";


function AppliedJobs() {
  

  const [data,setData]=useState([]);

  useEffect(()=>{
   getadmission();
  },[]);
  function getadmission(){
    fetch("http://localhost:8096/")
    .then((response)=>response.json())
    .then((p) => setData(p)
         
    );
  }





  return (
    
    <div>
<Header />
<table className=" zindex table table-striped table-bordered">
        <thead>
          <tr>
            <th>EmployeeEmail</th>
            <th>JobId</th>
            <th>Resume</th>
            <th>Status</th>
            {/* <th>Actions</th> */}

            
            
          </tr>
        </thead>
        <tbody>
          {data.map((datas) => (
            <tr 
            key={datas.jobid}
            >
              <td>
                {datas.email}
               
                </td>
              
              <td>{datas.jobid}</td>
              <td>{datas.description}</td>

               <td>{datas.status}</td>
              
              
              
            </tr>

         ))} 

         

       

       

          
        </tbody>
      </table>
      <div className="btnadd">
        {/* <Link
          to="/admin/AddUser"
          style={{ color: "white", textDecoration: "none" }}
        > */}
       
        {/* </Link> */}
      </div>
      {/* <Outlet /> */}

    </div>
  )
}

export default AppliedJobs