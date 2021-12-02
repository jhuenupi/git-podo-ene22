import React, { Component } from 'react'
import imgConsejo from "../../images/HomePage/Consejos/consejo2_apoyo2.jpg"
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";

export default class Consejo2 extends Component {
    render() {
        return (
          <Grid container spacing={0.5} justifyContent="center">
          <Grid item xs={11} sx={{ width: 20 }}>
            <Typography variant="h3" component="div" gutterBottom>
              Consejos Podológicos
            </Typography>
            <p></p>
            <Divider />
            <CardMedia
              component="img"
              height="auto"
              width="auto"
              image={imgConsejo}
              alt=""
            />
            <Divider />
            <p></p>              
          </Grid>
          </Grid>
          //   <div className="container">    
          //   <h1 className="text-center" style={{paddingTop: "0%"}}>

          //   </h1>
          //   <div class="valign-wrapper">
              
          //   <div class="hide-on-small-only">

          //     <div className="row center">
          //       <img class="materialboxed" width="80%" src={imgConsejo}/>
          //     </div>

          //   </div>
          //   </div>
          // </div>
        )
    }
}
