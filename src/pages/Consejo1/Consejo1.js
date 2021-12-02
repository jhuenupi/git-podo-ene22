import React, { Component } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import TurnedInNot from "@mui/icons-material/TurnedInNot";

import ListItemText from "@mui/material/ListItemText";

import ListItemIcon from "@mui/material/ListItemIcon";
import { styled } from "@mui/material/styles";
import imgConsejo from "../../images/HomePage/Consejos/consejo1_apoyo2.jpg"
export default class Consejo1 extends Component {
    render() {
        return (

          <Grid container spacing={0.5} justifyContent="center">
          <Grid item xs={11} sx={{ width: 20 }}>
            <Typography variant="h3" component="div" gutterBottom>
              Consejos Podológicos
            </Typography>
            <Typography variant="h5" component="div" gutterBottom>
                Pies Saludables para el Verano
            </Typography>
            <Typography variant="p" color="text.primary">
              Están al extremo del cuerpo y no siempre les damos la importancia que ameritan. 
              Nuestros pies nos sostienen todo el día y durante toda nuestra vida, por lo que debemos 
              velar por su salud y cuidado, pero ¿sabemos hacerlo de forma correcta?
            </Typography>
            <p></p>
            <Typography variant="h5" component="div" gutterBottom>
              Sigue los siguientes consejos para que esto no ocurra:
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
          //   PIES SALUDABLES PARA EL VERANO
          //   </h1>
          //   <div class="valign-wrapper">
              
          //   <div class="hide-on-small-only">
          //     <h5><p>Están al extremo del cuerpo y no siempre les damos la importancia que ameritan. Nuestros pies nos sostienen todo el día y durante toda nuestra vida, por lo que debemos velar por su salud y cuidado, pero ¿sabemos hacerlo de forma correcta?</p>
          //     <p>Sigue los siguientes consejos para que esto no ocurra:</p></h5>
          //     <div className="row center">
          //       <img class="materialboxed" width="100%" src={imgConsejo}/>
          //     </div>

          //   </div>
          //   </div>
          // </div>
        )
    }
}
