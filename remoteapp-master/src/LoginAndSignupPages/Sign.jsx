import React from 'react'
import { useState,Component} from 'react';


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
import  '../HRPages/AddJob.css';
import  '../HRPages/Forms.css';
const heading={
    color: "#a40865",fontStyle: "italic", fontWeight: "bold",fontSize: "larger"
}
function Sign() {
  const initialValues={
    email:'',
    name:'',
    mobileNumber:'',
    role:'',
   password:'',
    // salary:''
  }
  const validationSchema=yup.object(
    {
      email:yup.string().required("Job Id is required"),
      name:yup.string().required("Job Title is required"),
      mobileNumber:yup.number().required("Job Location is required"),
      role:yup.string().required("Job type is required"),
      password:yup.string().required("Job Description is required"),
      // salary:yup.number().required("Salary is required")

    }
  )
    const onSubmit=(values,onSubmitProps)=>{
      console.log(values);
      fetch("http://localhost:8096/admin/adds", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
          }).then(() => {
            window.location.href = "/";
            console.log("Saved");
          });
        
      onSubmitProps.resetForm();

    }
  
    
          
    
  return (
    <div>
      
        <center> <h1 style={heading}> JOBS </h1> <br></br></center>
        <div className="enroll_form_container">
        <div className="enroll_form_container-below">
      <Formik initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      <center>
        <Form>
          
          <Field type="text" className="row1"
           name="email" placeholder="Enter Email"/>
           <ErrorMessage className='error' component="div" name='email'></ErrorMessage>

<Field type="text" className="row1"
           name="name" placeholder="Enter user name"/>
   <ErrorMessage className='error' component="div" name='name'></ErrorMessage>

<Field type="text" className="row1"
           name="mobileNumber" placeholder="Enter Mobile number"/>
<ErrorMessage className='error' component="div" name='mobileNumber'></ErrorMessage>

<Field type="text" className="row1"
           name="role" placeholder="Enter role"/>
<ErrorMessage className='error' component="div" name='role'></ErrorMessage>
            <Field type="text" className="row1"
           name="password" placeholder="Enter password"/>
<ErrorMessage className='error' component="div" name='password'></ErrorMessage>
{/* <Field type="text" className="row1"
           name="salary" placeholder="Enter Salary"/>
<ErrorMessage className='error' component="div" name='salary'></ErrorMessage> */}
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

export default Sign