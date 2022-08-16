import React, { useState } from 'react'
import './Login.css'

import { Link} from 'react-router-dom'




const p={
    fontSize: "10px",
    marginTop:"5px",
    marginBottom:"0px",
    fontStyle:"italic",
    fontWeight: "bold",
    color:"black"
    
}
const h1={
    fontSize: "15px",
    color: "#a40865"
}
const heading={
    color: "#a40865",fontStyle: "italic", fontWeight: "bold",fontSize: "larger"
} 
const butt={
    
    backgroundColor: "#a40865",
    color:"white",
    cursor:'pointer'
}
const di={
    height:"600px",
    width: "350px"
    
}
const text={
  border: "1px solid black",
  borderRadius: "25px",textAlign:'center',
  backgroundColor:'#F8EFF4'
}


const LoginForm = () => {


  const[usear,setUsear]=useState({
    email:"",password:"",role:""
})

 let name,value 
const handleInputs =(e) =>{
    console.log(e);
     name=e.target.name;
     value=e.target.value;

     setUsear({...usear,[name]:value}) 
}
    
 
const re=async(event) =>{
   
    // event.preventDefault();
    
 const{email,password,role} =usear 
   if(email && password && role){
            

    fetch("http://localhost:8096/admin/login",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(usear)
  
    })

    .then((response)=>response.text()
    
    )
    .then((p) => {
 
    if(usear.role=='admin'){
      alert("Log in");
      localStorage.setItem('admin',usear.email )
      window.location.href="/admin/adminhome"
     
  
    }
  else  if(usear.role=="user"){
      alert("Log in");
      localStorage.setItem('user',usear.email)
      // localStorage.setItem('user',usear.role )
      window.location.href="/user/userhome"
     
    }
    else  if(usear.role=="hr"){
                
  
      alert("Log in");
      localStorage.setItem('hr',usear.email)
      window.location.href="hr/hrhome"
      
    }
    else{
      alert(usear.Error)
    }
  }
    );
  
// alert(JSON.stringify(usear));

          
         }
        }
    
   






  return ( 
      
    <div className='first' style={di} >
         <h1 style={heading}> Remote Hire Application  </h1>  
         <h1 style={heading}> Login </h1><br></br>
        
      <form className='second'>

      {/* <input type="text" id="email" 
                placeholder="Enter email" name='role'    
                autoFocus
                value={usear.role} onChange= {handleInputs}  
                autoComplete="off" style={text} required/> */}
                


                <label  >
                 <input list="adminUsear" name='role' placeholder="Enter admin/user/hr" 
                  autoFocus
                  value={usear.role} onChange= {handleInputs} 
                 style={text}/>
             </label>
             <datalist id="adminUsear" >
                 <option value="admin" />
                  <option value="user"/>
                  <option value="hr" />
             </datalist>

             <br></br>

         
          <input type="text" id="email" 
                placeholder="Enter email" name='email'    
                autoFocus
                value={usear.email} onChange= {handleInputs}  
                autoComplete="off" style={text} required/>
                <br></br>
             < input type="password" name='password' 
                autoFocus
                value={usear.password} onChange= {handleInputs} 
             id="password" autoComplete='off' style={text}  placeholder="Enter password"  required/> 
          
            <br></br>
          
          <input type="button"  id="loginButton" onClick={re} value="Login"  style={butt}/>
          {/* <button onClick={re} value="Login" ></button> */}
          <h1 style={p} >New User/admin?</h1>
          <Link to="/Register"   style={{color:"white", textDecoration:"none"} } underline='none'>
          <button   id="signupLink" style={h1} >signup </button>  
          </Link>
      </form>
      
    </div>
    
  
  )
}

export default  LoginForm