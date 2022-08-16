import React from 'react'

import Header from '../Components/UserComponents/Header'
import SearchBar from '../Components/UserComponents/SearchBar'

import "./UserHomePage.css";
import { useState } from 'react';
import { useEffect } from 'react';
import {

 
  Link,

} from "react-router-dom";


import Edit from "@mui/icons-material/Edit";





function UserHomePage(value1) {


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

//   function deleteadmission(jobid)
// {
//   // alert(id)
//   fetch("http://localhost:8096/hr/delete/"+`${jobid}`,{
//     method:'DELETE'
//   }).then((response)=>{
//     response.json().then((resp)=>{
//       console.warn()
//       console.log("deleted")
//     })
     
  
//   })
// }

  return (
    <div>
      <Header />
      <SearchBar />
      {/* <CardJob /> */}





      <table className=" zindex table table-striped table-bordered">
        <thead>
          <tr>
            <th>JobId</th>
            <th>JobTitle</th>
            <th>JobLocation</th>
            <th>Type</th>
            <th>Description</th>
            <th>Salary</th>
            <th>Action</th>

          </tr>
        </thead>
        <tbody>
          {data.map((datas) => (
          <tr
          key={datas.jobid}
          >
            <td>
            {datas.jobid}
             
            </td>
            <td> {datas.jobtitle} </td>
            <td>
            {datas.joblocation}
            </td>
            <td>{datas.jobtype}</td>
            <td>{datas.jobdesc}</td>
            <td>{datas.salary}</td>



            <td>
              <Link to="/user/applyform" style={{ color: "white", textDecoration: "none" }} underline='none'>
                {/* <a
                  onClick={() => {
                    console.log("datas before passs :");
                    console.log(datas.admissionId);
                    addid(datas.admissionId);
                  }}
                > */}
                <button
                  className="zindex"

                  variant="contained"
                  style={{
                    margin: "5px",
                    backgroundColor: "blue",
                    color: "white",
                    zIndex: -1,
                  }}
                  endIcon={<Edit />}
                  color="primary"
                >
                  Apply{" "}
                </button>
              </ Link>
              {/* </a> */}



            </td>
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

export default UserHomePage