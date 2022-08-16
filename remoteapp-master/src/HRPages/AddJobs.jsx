import React from 'react'
import { useState,Component} from 'react';
import "./AddJob.css";
import "./Forms.css";
import * as yup from 'yup';

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { padding } from "@mui/system";
import Add from "@mui/icons-material/Add";
import { Formik, useFormik,Form,Field,ErrorMessage } from 'formik';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import { BackspaceOutlined, SettingsOutlined } from "@mui/icons-material";
import HrHeader from '../Components/HrComponents/HrHeader';
const heading={
    color: "#a40865",fontStyle: "italic", fontWeight: "bold",fontSize: "larger"
}
function AddJobs() {
  const initialValues={
    jobid:'',
    jobtitle:'',
    jobtype:'',
    jobdesc:'',
    joblocation:'',
    salary:''
  }
  const validationSchema=yup.object(
    {
      jobid:yup.number().required("Job Id is required"),
      jobtitle:yup.string().max(10).required("Job Title is required"),
      joblocation:yup.string().max(20).required("Job Location is required"),
      jobtype:yup.string().max(10).required("Job type is required"),
      jobdesc:yup.string().max(20).required("Job Description is required"),
      salary:yup.number().required("Salary is required")

    }
  )
    const onSubmit=(values,onSubmitProps)=>{
      console.log(values);
      fetch("http://localhost:8096/hr/addJob", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
          }).then(() => {
            window.location.href="/hr/hrhome"
            console.log("Saved");
          });
        
      onSubmitProps.resetForm();

    }
  
    
          
    
  return (
    <div>
      <HrHeader />
        <center> <h1 style={heading}> JOBS </h1> <br></br></center>
        <div className="enroll_form_container">
        <div className="enroll_form_container-below">
      <Formik initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      <center>
        <Form>
          
          <Field type="text" className="row1"
           name="jobid" placeholder="Enter Job Id"/>
           <ErrorMessage className='error' component="div" name='jobid'></ErrorMessage>

<Field type="text" className="row1"
           name='jobtitle' placeholder="Enter Job Title"/>
   <ErrorMessage className='error' component="div" name='jobtitle'></ErrorMessage>

<Field type="text" className="row1"
           name="jobtype" placeholder="Enter Job Type"/>
<ErrorMessage className='error' component="div" name='jobtype'></ErrorMessage>

<Field type="text" className="row1"
           name="jobdesc" placeholder="Enter Job Description"/>
<ErrorMessage className='error' component="div" name='jobdesc'></ErrorMessage>
            <Field type="text" className="row1"
           name="joblocation" placeholder="Enter Job Location"/>
<ErrorMessage className='error' component="div" name='joblocation'></ErrorMessage>
<Field type="text" className="row1"
           name="salary" placeholder="Enter Salary"/>
<ErrorMessage className='error' component="div" name='salary'></ErrorMessage>
           <br></br>
          <Button 
      variant="contained" type="submit">Submit</Button>
        </Form>
        </center>
      </Formik>
    </div>
    </div>
    </div>
  )
}

export default AddJobs