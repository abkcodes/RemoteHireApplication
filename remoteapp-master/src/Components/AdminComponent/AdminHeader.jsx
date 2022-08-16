import '../UserComponents/Header.css';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';

import Account from '@mui/icons-material/AccountCircle'
import Logout from '@mui/icons-material/Logout'
import { sizeWidth } from '@mui/system';


import{BrowserRouter as Router, Routes,Route,Link,Outlet,} from "react-router-dom";
import { AccountBox, NotificationImportant } from "@mui/icons-material";


function AdminHeader() {
  

    let appbar1={
      padding:"0px",
      backgroundColor:"#A40865",
      bottom:"18px",
      marginTop:"0px",   
    };
    let toolbar1={
      padding:"0px",
      color:"white",
      width:"45%"  
    };

    let grid1={
     marginLeft:"100px", 
     fontSize:"25px",
     paddingTop:"70px"
    };
    let gridheading={
      marginLeft:"100px",
      fontSize:"35px",
    textDecoration:"solid",
    fontWeight:"bold"
    }


    return (
       <div>
         

<header className="container-nav">
      <div className="nav-logo">
        <span> Remote Hire </span>
      </div>
      <div className="nav">
        <div className="nav-logout">
          <Logout
          
          onClick={()=>{
            // localStorage.removeItem('user');
            // localStorage.removeItem('admin');
            window.location.href="/"
        }}

          sx={{ fontSize: 35 }} /> <div>logout</div>
          
        </div>
        <div className="nav-profile">
          {/* <Account sx={{ fontSize: 35 }} /> */}
         
          <AccountBox   sx={{ fontSize: 35 }} /><div>{localStorage.getItem("hr")}</div>
          {/* <div>User Id:{localStorage.getItem('admin') }</div>  */}
        </div>
      </div>
    </header>




<AppBar style={appbar1}  position="static">
      <div  className="container-below-nav  shed">
        <Toolbar  className="options-below-nav"  style={toolbar1}   sx={{width:"100%",maxWidth:"600",mx:"auto"}}>
        

          <grid container rowSpacing={1} columnSpacing={{xs:2,sm:2,md:3}} >
            
           
            
            <grid item xs={4} md={4} style={gridheading}>
            <Link to="/admin/adminhome"  style={{color:"white", textDecoration:"none"} } underline='none'>
              <IconButton className="options-below-nav-items options-institute" edge="start" ariel-label="menu" sx={{mr:2}}>Home</IconButton>
              </Link>
              </grid>
          
           
           
         
           
           

          </grid>
          
          
        </Toolbar>
        </div>
      </AppBar>
         <div>

       
        
      </div>
      {/* <Outlet /> */}
      
        </div>
    );
  }
  export default AdminHeader;