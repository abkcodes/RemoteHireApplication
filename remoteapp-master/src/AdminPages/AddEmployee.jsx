import React from 'react'
import { useState,Component} from 'react';
import "./AddEmployee.css";
import "./Error.css"
import * as yup from 'yup';
import Button from "@mui/material/Button";
import { Formik, useFormik,Form,Field,ErrorMessage } from 'formik';
import Grid from "@mui/material/Grid";
import { padding } from "@mui/system";
import Add from "@mui/icons-material/Add";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import { BackspaceOutlined, SettingsOutlined } from "@mui/icons-material";
import AdminHeader from '../Components/AdminComponent/AdminHeader';
const heading={
    color: "#a40865",fontStyle: "italic", fontWeight: "bold",fontSize: "larger"
}
function AddEmployee() {
    
    const initialValues={
        
        email:'',
        name:'',
        password:'',
        mobileNumber:'',
        role:'',
        
      }
      const validationSchema=yup.object(
        {
          email:yup.string().email("Invalid Email").required("Email is required"),
          name:yup.string().required("Name is required"),
          password:yup.string().required("Password is required").matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
          ),
          mobileNumber:yup.number().required("Mobile Number is required"),
          role:yup.string().max(10).required("Role is required")
          
    
        }
      )
        const onSubmit=(values,onSubmitProps)=>{
          //console.log(values);
          //alert(JSON.text);
          //alert(`"${values.email}" added successfully!!!`)
          fetch("http://localhost:8096/admin/adds", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
              }).then((res) => {
                if(res){
                  alert("Added successfully");
                }
                else{
                  alert("User already added");
                }
                
                window.location.href = "/admin/adminhome";
              });
            
          onSubmitProps.resetForm();
    
        }
      
  return (
   
    <div>
        <center> <h1 style={heading}> EMPLOYEEE </h1> <br></br></center>
        <div className="enroll_form_container">
        <div className="enroll_form_container-below">
      <Formik initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      <center>
        <Form>
          
          <Field type="text" className="row1"
           name="email" placeholder="Enter the Email"/>
           <ErrorMessage className='error' component="div" name='email'></ErrorMessage>

           <Field type="text" className="row1"
           name="name" placeholder="Enter the name"/>
           <ErrorMessage className='error' component="div" name='name'></ErrorMessage>

<Field type="text" className="row1"
           name='password' placeholder="Enter the Password"/>
   <ErrorMessage className='error' component="div" name='password'></ErrorMessage>

<Field type="text" className="row1"
           name="mobileNumber" placeholder="Enter the mobile Number"/>
<ErrorMessage className='error' component="div" name='mobileNumber'></ErrorMessage>

<Field type="text" className="row1"
           name="role" placeholder="Enter the role"/>
<ErrorMessage className='error' component="div" name='role'></ErrorMessage>
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

export default AddEmployee