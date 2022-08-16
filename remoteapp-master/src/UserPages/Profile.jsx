import React from 'react'
import "./Profile.css";

import Grid from "@mui/material/Grid";
import Header from '../Components/UserComponents/Header';

function Profile() {
    return (
        <div>
            <Header />

            <div
                className="card1"
            >

                <div className='headerdiv'>
                    <Grid
                        container
                        columnSpacing="3"
                        item
                        xs={12}
                        sm={6}
                        md={12}
                    >
                        <Grid className='header'>
                            <p> User Profile</p>
                        </Grid>
                    </Grid>
                </div>

                <div className='innercard'>

                    <Grid
                        container
                        columnSpacing="3"
                        item
                        xs={12}
                        sm={6}
                        md={12}
                    >
                        <Grid className='innergrid'>
                            <p> Id:</p>
                        </Grid>
                        <Grid className='innergrid'>
                            <p>Hello</p>
                        </Grid>
                    </Grid>


                    <Grid
                        container
                        columnSpacing="3"
                        item
                        xs={12}
                        sm={6}
                        md={12}
                    >
                        <Grid className='innergrid'>
                            <p> Name</p>
                        </Grid>
                        <Grid className='innergrid'>
                            <p>Hello</p>
                        </Grid>
                    </Grid>


                    <Grid
                        container
                        columnSpacing="3"
                        item
                        xs={12}
                        sm={6}
                        md={12}
                    >
                        <Grid className='innergrid'>
                            <p>Address</p>
                        </Grid>
                        <Grid className='innergrid'>
                            <p>Hello</p>
                        </Grid>
                    </Grid>


                    <Grid
                        container
                        columnSpacing="3"
                        item
                        xs={12}
                        sm={6}
                        md={12}
                    >
                        <Grid className='innergrid'>
                            <p>Email</p>
                        </Grid>
                        <Grid className='innergrid'>
                            <p>{localStorage.getItem("user")}</p>
                        </Grid>
                    </Grid>

                </div>


            </div>



        </div>
    )
}

export default Profile