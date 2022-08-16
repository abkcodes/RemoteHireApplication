import React, {  useState } from 'react'

import Header from '../Components/UserComponents/Header';
import "./Apply.css";


// const getMail=()=>{
// 	const data=localStorage.getItem('user');
// 	if(data){
// 		return JSON.parse(data);
// 	}
// 	else{
// 	return []
// 	}
// }

function Apply() {

	// const[items,setItems]=useState([]);
	// useEffect(()=>{
		
	// 	if(items){
	// 		setItems(items)
	// 	}
	// const [f]
	// const [email,setEmail]=useState(getMail());
	// const [empId,setTitle]=useState('');



	let a=localStorage.getItem("user");
    const[email]=useState(a);
    const[jobid,setJobId]=useState("");
    const[description,setDescription]=useState("");
 

    const handleOnSubmit = (e) => {
        e.preventDefault();
        alert("submitted");
		setJobId()
		setDescription()
       

        const user = {
            email,
			jobid,
			description
            
          };
          console.log(user);
          fetch("http://localhost:8096/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
          }).then(() => {
            window.location.href = "/user/userhome";
          });
        
    }

	

	
  return (

    <div>
        <Header />
        <div className="boxouter">
	<h2 className="headertext header">APPLY Job</h2>
	<div id="box">
	{/* <div>{localStorage.getItem("user")}</div> */}

<form  className="form" method="post">
	
          
		  <input className="form" type="email" id="email" name="email" 
		   value={email}
		   
	   
		  placeholder="Enter Email Id"   /> <br />  
		  
		  <input className="form" type="text" id="jobid" name="jobid" 
		  value={jobid}
		  onChange={(e) => {
			  setJobId(e.target.value)
		  }
		} 
		  placeholder=" Add Job Id" required readonly /> <br />
		  <input className="form" type="text" id="description" name="description"
		 value={description}
		 onChange={(e) => {
			 setDescription(e.target.value)
		 }
	   }  
		  placeholder=" Add Resume Description" required /> <br />
		 
		  Upload Resume <input type="file" name="file" />
			
		
          
		  {/* <Link to="/user/userhome"  style={{color:"white", textDecoration:"none"} } underline='none'> */}
		<button type="submit"  onClick={handleOnSubmit}  value="Submit">Apply</button>
        {/* </Link> */}
	</form>
	</div>

</div>
	</div>
    
  )
}

export default Apply