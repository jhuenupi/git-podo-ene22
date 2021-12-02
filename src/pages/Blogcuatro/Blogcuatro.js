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
import imgBlog4 from "../../images/HomePage/Blog/BLOG4_APOYO.jpg";
const Demo = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));
export default class Blogcuatro extends Component {
  render() {
    return (
      <Grid container spacing={0.5} justifyContent="center">
        <Grid item xs={11} sx={{ width: 20 }}>
          <Typography variant="h3" component="div" gutterBottom>
            Blog PodoUbica
          </Typography>
          <Typography variant="h5" gutterBottom component="div">
            La Descamación en los Pies
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            ¿Notas que la piel de tus dedos, tobillos, talones o cualquier otra
            zona del pie está seca y se está despegando?
          </Typography>
          <Typography blockquote component={"div"}>
            <Typography
              style={{ wordWrap: "break-word" }}
              variant="body1"
              color="text.secondary"
            >
              No debes preocuparte, no es grave, sin embargo, es importante
              saber la causa para poder ser tratada oportunamente, y así no
              derive en problemas mayores.
            </Typography>
          </Typography>
          <p></p>
            <Divider />
            <CardMedia
              component="img"
              height="400"
              width="300"
              image={imgBlog4}
              alt=""
            />
            <Divider />
            <p></p>          
            <Typography variant="h6" gutterBottom component="div">
            ¿Cuáles son las causas de la descamación en los pies?
          </Typography>            
          <Demo sx={{ background: "#efefef" }}>
              <List>
                {
                  <ListItem>
                    <ListItemIcon>
                      <TurnedInNot />
                    </ListItemIcon>
                    <ListItemText
                      primary=""
                      secondary="La deshidratación provocada por condiciones climáticas (mucho calor), provoca que la descamación de los pies y en zonas como el talón puede degenerar en grietas y causar verdaderas molestias."
                    />
                  </ListItem>
                }
                {
                  <ListItem>
                    <ListItemIcon>
                      <TurnedInNot />
                    </ListItemIcon>
                    <ListItemText
                      primary=""
                      secondary="La sudoración excesiva o hiperhidrosis también puede hacer que se descamen nuestros pies."
                    />
                  </ListItem>
                }
                {
                  <ListItem>
                    <ListItemIcon>
                      <TurnedInNot />
                    </ListItemIcon>
                    <ListItemText
                      primary=""
                      secondary="La descamación es la que se conoce como dermatitis exfoliativa provocada por hongos que crean una infección en la planta del pie."
                    />
                  </ListItem>
                }                
                
                {
                  <ListItem>
                    <ListItemIcon>
                      <TurnedInNot />
                    </ListItemIcon>
                    <ListItemText
                      primary=""
                      secondary="El pie de atleta que consiste en una infección micótica que produce descamación y suele ir acompañada de ardor y picazón en las áreas afectadas."
                    />
                  </ListItem>
                }
                {
                  <ListItem>
                    <ListItemIcon>
                      <TurnedInNot />
                    </ListItemIcon>
                    <ListItemText
                      primary=""
                      secondary="La eritrodermia, un tipo de psoriasis, caracterizada por un enrojecimiento de la piel y esos eczemas también acaban en descamación de la piel."
                    />
                  </ListItem>
                }
                </List>
            </Demo>
            <Typography variant="h6" gutterBottom component="div">
            ¿Cómo podemos ayudarnos con la descamación y los problemas derivados?</Typography>
            <Typography variant="p" gutterBottom component="div">
            Anteriormente mencionados varios factores y afecciones que pueden provocar la descamación, así que lo primero que debemos hacer es acudir al podólogo para que determine la causa de este problema, así podremos saber el motivo, nos recomendará un tratamiento, y nos entregará algunas pautas que debemos considerar para los cuidados.
            </Typography>
            <p></p>
            <Typography variant="p" gutterBottom component="div">
            Mantener los pies hidratados es fundamental, y para que sea efectivo siempre usar los productos adecuados para ello.
            </Typography>
            <Typography variant="p" gutterBottom component="div">
            Te damos algunas recomendaciones que te ayudarán a combatir la descamación:
            </Typography>
            
          <Demo sx={{ background: "#efefef" }}>
              <List>

                {
                  <ListItem>
                    <ListItemIcon>
                      <TurnedInNot />
                    </ListItemIcon>
                    <ListItemText
                      primary=""
                      secondary="Realizar una adecuada hidratación"
                    />
                  </ListItem>
                }
                {
                  <ListItem>
                    <ListItemIcon>
                      <TurnedInNot />
                    </ListItemIcon>
                    <ListItemText
                      primary=""
                      secondary="Usar un calcetín y calzado adecuado"
                    />
                  </ListItem>
                }
                {
                  <ListItem>
                    <ListItemIcon>
                      <TurnedInNot />
                    </ListItemIcon>
                    <ListItemText
                      primary=""
                      secondary="Siempre mantener una buena higiene"
                    />
                  </ListItem>
                }                                                                                                
                {
                  <ListItem>
                    <ListItemIcon>
                      <TurnedInNot />
                    </ListItemIcon>
                    <ListItemText
                      primary=""
                      secondary="Proteger nuestros pies de la exposición del sol"
                    />
                  </ListItem>
                }
                {
                  <ListItem>
                    <ListItemIcon>
                      <TurnedInNot />
                    </ListItemIcon>
                    <ListItemText
                      primary=""
                      secondary="Beber diariamente bastante líquido"
                    />
                  </ListItem>
                }
                </List>
            </Demo>
            <p></p>
            <Typography variant="p" gutterBottom component="div">
                Es importante saber, que si notas una mayor descamación en tus pies puede ser algo debido al cambio de estación. Si ha llegado el verano y las altas temperaturas pueden afectar a tus pies.
            </Typography>
            <p></p>
            <Typography variant="p" gutterBottom component="div">
            Sin embargo, la opinión de un podólogo siempre es la más importante, puesto que es quién más sabe del tema, y como mencionamos hay muchas causas, algunas más graves como las infecciones, las que generan descamación y requieren una intervención rápida para que no causen un problema mayor.
            </Typography>
            <p></p>
            <Typography variant="p" gutterBottom component="div">
            A veces  olvidamos y castigamos nuestros pies, y debes saber que son una de las partes más importantes, éstos nos ayudan a soportar nuestro peso y nos permiten dar los pasos necesarios para nuestro diario vivir.
            </Typography>
            <p></p>
        </Grid>
      </Grid>

      //         <div className="container">
      //         <h1 className="text-center" style={{paddingTop: "0%"}}>
      //           Blog PodoUbica
      //         </h1>
      //         <div class="valign-wrapper">

      //         <div class="hide-on-small-only">
      //           <h5>La Descamación en los Pies
      //   </h5>

      //       <h6>¿Notas que la piel de tus dedos, tobillos, talones o cualquier otra zona del pie está seca y se está despegando?</h6>

      //         <blockquote>
      //             No debes preocuparte, no es grave, sin embargo, es importante saber la causa para poder ser tratada oportunamente, y así no derive en problemas mayores.
      //         </blockquote>
      //   <img className="materialboxed center-align"  width="60%" src={imgBlog4} />
      //   <h6>¿Cuáles son las causas de la descamación en los pies?</h6>

      //   <blockquote>
      //             <li>La deshidratación provocada por condiciones climáticas (mucho calor), provoca que la descamación de los pies y en zonas como el talón puede degenerar en grietas y causar verdaderas molestias.</li>
      //             <li>La sudoración excesiva o hiperhidrosis también puede hacer que se descamen nuestros pies.</li>
      //             <li>La descamación es la que se conoce como dermatitis exfoliativa provocada por hongos que crean una infección en la planta del pie.</li>
      //             <li>El pie de atleta que consiste en una infección micótica que produce descamación y suele ir acompañada de ardor y picazón en las áreas afectadas.</li>
      //             <li>La eritrodermia, un tipo de psoriasis, caracterizada por un enrojecimiento de la piel y esos eczemas también acaban en descamación de la piel.</li>
      //             <li>La dishidrosis es una dermatosis crónica tanto en las palmas y dedos de las manos, así como en las plantas de los pies. Se caracteriza por la aparición inicial de vesículas que pican y evolucionan posteriormente con descamación y si va a más aparecen fisuras o grietas y a menudo infección bacteriana.</li>
      //   </blockquote>
      //         <h6>¿Cómo podemos ayudarnos con la descamación y los problemas derivados?</h6>
      //             <blockquote>
      //                 <p>Anteriormente mencionados varios factores y afecciones que pueden provocar la descamación, así que lo primero que debemos hacer es acudir al podólogo para que determine la causa de este problema, así podremos saber el motivo, nos recomendará un tratamiento, y nos entregará algunas pautas que debemos considerar para los cuidados.
      //                 </p>
      //                 <p></p>
      //                 <p>Mantener los pies hidratados es fundamental, y para que sea efectivo siempre usar los productos adecuados para ello.</p>
      //                 <p>Te damos algunas recomendaciones que te ayudarán a combatir la descamación:</p>
      //                 <li>Realizar una adecuada hidratación</li>
      //                 <li>Usar un calcetín y calzado adecuado</li>
      //                 <li>Siempre mantener una buena higiene</li>
      //                 <li>Proteger nuestros pies de la exposición del sol</li>
      //                 <li>Beber diariamente bastante líquido</li>
      //                 <p></p>
      //                 <p>
      //                     Es importante saber, que si notas una mayor descamación en tus pies puede ser algo debido al cambio de estación. Si ha llegado el verano y las altas temperaturas pueden afectar a tus pies.
      //                 </p>
      //                 <p>Sin embargo, la opinión de un podólogo siempre es la más importante, puesto que es quién más sabe del tema, y como mencionamos hay muchas causas, algunas más graves como las infecciones, las que generan descamación y requieren una intervención rápida para que no causen un problema mayor.</p>
      //                 <p>A veces  olvidamos y castigamos nuestros pies, y debes saber que son una de las partes más importantes, éstos nos ayudan a soportar nuestro peso y nos permiten dar los pasos necesarios para nuestro diario vivir.</p>
      //             </blockquote>
      //         </div>
      //         </div>
      //       </div>
    );
  }
}
