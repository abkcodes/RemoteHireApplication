import "./Card.css";



import Grid from '@mui/material/Grid';

function CardJob(props) {



    return (
        <div>
           {/* {data.map(datas=>( */}
           <Grid  container  columnSpacing="4" item xs={12} sm={3} md={12}
            // key={datas.instituteId} 
           className="card" style={{marginTop:"10px"}}>
             <Grid style={{marginLeft:"20px"}}>
            
                  <img src="https://images.unsplash.com/photo-1621640786029-220e9ff8dd09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" 
                   style={{width:"100%",height:"175px"}}/>
             </Grid>           
                  <Grid className="container column">
                      <h3>
                        {/* <b>{datas.instituteName}(id:{datas.instituteId})</b> */}
                        Hello
                      </h3> 
                     
    </Grid>
    <Grid  style={{marginLeft:"15%"}} className="column container desc">
    <h3 >Details</h3>
      
    {/* <p>Address : {datas.instituteCity}</p> */}
   <p className="info"> Hello</p>
   <p className="info">Hello</p>
   <p className="info">Hello</p>  
    </Grid>
                  







  <Grid style={{marginLeft:"15%"}}>
  
  <div  > 


<h3 style={{fontSize:"15px",marginTop:"16px",width:"20%"}} className="info">Description</h3>
    <p style={{fontSize:"13px"}} className="info"></p> 
  </div>

  </Grid>
</Grid>

 {/* ))}         */}
        </div>
    );
}

export default CardJob;