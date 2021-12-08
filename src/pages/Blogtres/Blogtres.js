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
import imgBlog3 from "../../images/HomePage/Blog/BLOG3_APOYO.jpg";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import TurnedInNot from "@mui/icons-material/TurnedInNot";

import ListItemText from "@mui/material/ListItemText";

import ListItemIcon from "@mui/material/ListItemIcon";
import { styled } from "@mui/material/styles";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));
export default class Blogtres extends Component {
  render() {
    return (
      <>
        <Grid container spacing={0.5} justifyContent="center">
          <Grid item xs={11} sx={{ width: 20 }}>
            <Typography variant="h3" component="div" gutterBottom>
              Blog PodoUbica
            </Typography>
            <Typography variant="h5" gutterBottom component="div">
              ¿Qué debemos hacer si pisamos un clavo? ¿Es necesario vacunarse
              contra el tétano?
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              component="div"
            ></Typography>
            <Typography blockquote component={"div"}>
              <Typography
                style={{ wordWrap: "break-word" }}
                variant="body2"
                color="text.secondary"
              >
                Con frecuencia las heridas por pinchazos en el pie son
                producidas por objetos cortantes, tales como trozos de vidrios o
                metales afilados (objetos punzantes como clavos o tornillos), y
                en ocasiones por una mordedura de un animal. Por lo tanto, estas
                heridas pueden llegar a ser peligrosas si no son tratadas
                inmediatamente, puesto que pueden acabar en una seria infección.
              </Typography>
            </Typography>
            <p></p>
            <Divider />
            <CardMedia
              component="img"
              height="auto"
              image={imgBlog3}
              alt=""
            />
            <Divider />
            <p></p>
            <Typography variant="body2" color="text.secondary">
              Cuando hay heridas profundas se corre el riesgo de contraer
              tétanos, y puede causarlo cualquier objeto punzante. El Tétanos es
              una infección que conduce a una serie de contracciones musculares
              por todo el cuerpo, comenzando por el agarrotamiento de la
              mandíbula. En general, el tétano es una enfermedad peligrosa. Si
              no se trata a tiempo, da fiebre, se contraen los músculos, se
              dificulta la respiración y se acelera el corazón, con el riesgo de
              producir un síncope cardíaco, una sofocación o una asfixia.
            </Typography>
            <p></p>
            <Divider />
            <p></p>
            <Typography gutterBottom variant="h5" component="div">
              ¿Qué te recomendamos?
            </Typography>
            <Demo sx={{ background: "#efefef" }}>
              <List>
                {
                  <ListItem>
                    <ListItemIcon>
                      <TurnedInNot />
                    </ListItemIcon>
                    <ListItemText
                      primary="1.   Visitar un centro de salud"
                      secondary="Un profesional de la salud (médico o enfermera) debe evaluar la gravedad de la herida, y determinar si está infectada o no. Es importante dar cada detalle de cómo se provocó la herida, así puede indicar el mejor tratamiento."
                    />
                  </ListItem>
                }
                {
                  <ListItem>
                    <ListItemIcon>
                      <TurnedInNot />
                    </ListItemIcon>
                    <ListItemText
                      primary="2.       Tratamiento local"
                      secondary="La herida debe mantenerse siempre limpia. Lavarse la zona con frecuencia con un jabón anti-bacteriano y luego limpia la herida con un buen antiséptico, siempre siguiendo las indicaciones del médico o profesional que te evaluó, incluso si se debe hacer cambio de vendaje."
                    />
                  </ListItem>
                }
                {
                  <ListItem>
                    <ListItemIcon>
                      <TurnedInNot />
                    </ListItemIcon>
                    <ListItemText
                      primary="3. Vacuna contra el tétanos"
                      secondary="Sabías que en el caso de los niños se hace un refuerzo de la vacuna mixta que se les pone dentro del Calendario de Vacunación. En los mayores se recomienda una gammaglobulina antitetánica. Aquí tienes más información sobre la vacuna del tétanos."
                    />
                  </ListItem>
                }
                {
                  <ListItem>
                    <ListItemIcon>
                      <TurnedInNot />
                    </ListItemIcon>
                    <ListItemText
                      primary="4. Alivio del dolor"
                      secondary={
                        <>
                          <Typography
                            component="p"
                            variant="body2"
                            color="text.secondary"
                          >
                            Las heridas en el pie pueden producir diferentes
                            niveles de dolor. Aunque esta situación no es muy
                            común, si uno de los vasos sanguíneos principales
                            del pie es dañado puedes sufrir mucho dolor y
                            sangrado.
                          </Typography>
                          <p></p>
                          <Typography variant="body2" color="text.secondary">
                            - Lava el pie lesionado en agua tibia al menos dos
                            veces al día durante los dos primeros días
                            (siguiendo las indicaciones del médico o profesional
                            que te evaluó).
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            - Evita el contacto de las heridas abiertas con
                            superficies duras hasta que las hayas vendado.
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            - Evita caminar sobre el pie lesionado si puedes,
                            porque cualquier clase de presión puede aumentar el
                            dolor.
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            - Si el dolor o el enrojecimiento de la zona
                            aumentan, vuelve a visitar a tu médico porque puede
                            que la herida esté infectada.
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                }
                {
                  <ListItem>
                    <ListItemIcon>
                      <TurnedInNot />
                    </ListItemIcon>
                    <ListItemText
                      primary="5.       Prevención"
                      secondary="Si la herida se ha producido en el trabajo, evita que vuelva a suceder utilizando el calzado de seguridad indicado para tu profesión y los riesgos a los que estás expuesto. Siempre debes usar un calzado si vas a estar en zonas que creas que son inseguras. "
                    />
                  </ListItem>
                }
              </List>
            </Demo>
            <Divider />
          </Grid>
        </Grid>
      </>
    );
  }
}
{
  /* <div className="container">    
                <h1 className="text-center" style={{paddingTop: "0%"}}>
                Blog PodoUbica
                </h1>
            <div class="valign-wrapper">
              
            <div class="hide-on-small-only">
              <h5>¿Qué debemos hacer si pisamos un clavo? ¿Es necesario vacunarse contra el tétano?</h5>
            <blockquote>
                Con frecuencia las heridas por pinchazos en el pie son producidas por objetos cortantes, tales como trozos de vidrios o metales afilados (objetos punzantes como clavos o tornillos), y en ocasiones por una mordedura de un animal. Por lo tanto, estas heridas pueden llegar a ser peligrosas si no son tratadas inmediatamente, puesto que pueden acabar en una seria infección.
            </blockquote>
            <img class="materialboxed" width="100%" src={imgBlog3}/>
            <blockquote>
        Cuando hay heridas profundas se corre el riesgo de contraer tétanos, y puede causarlo cualquier objeto punzante. El Tétanos es una infección que conduce a una serie de contracciones musculares por todo el cuerpo, comenzando por el agarrotamiento de la mandíbula. En general, el tétano es una enfermedad peligrosa. Si no se trata a tiempo, da fiebre, se contraen los músculos, se dificulta la respiración y se acelera el corazón, con el riesgo de producir un síncope cardíaco, una sofocación o una asfixia.
      </blockquote>

      <h6>¿Qué te recomendamos?</h6>

      <b> 1.       Visitar un centro de salud:</b>
            <blockquote>
                Un profesional de la salud (médico o enfermera) debe evaluar la gravedad de la herida, y determinar si está infectada o no. Es importante dar cada detalle de cómo se provocó la herida, así puede indicar el mejor tratamiento.
            </blockquote>
            <b>2.       Tratamiento local:</b>
            <blockquote>
                La herida debe mantenerse siempre limpia. Lavarse la zona con frecuencia con un jabón anti-bacteriano y luego limpia la herida con un buen antiséptico, siempre siguiendo las indicaciones del médico o profesional que te evaluó, incluso si se debe hacer cambio de vendaje.
            </blockquote>
            <b> 3.       Vacuna contra el tétanos:</b>
            <blockquote>
                Sabías que en el caso de los niños se hace un refuerzo de la vacuna mixta que se les pone dentro del Calendario de Vacunación. En los mayores se recomienda una gammaglobulina antitetánica. Aquí tienes más información sobre la vacuna del tétanos.
            </blockquote>
            <b> 4.       Alivio del dolor:</b>
            <blockquote>
                Las heridas en el pie pueden producir diferentes niveles de dolor. Aunque esta situación no es muy común, si uno de los vasos sanguíneos principales del pie es dañado puedes sufrir mucho dolor y sangrado.
                
                <li>
                    Lava el pie lesionado en agua tibia al menos dos veces al día durante los dos primeros días (siguiendo las indicaciones del médico o profesional que te evaluó).
                </li>
                <li>
                Evita el contacto de las heridas abiertas con superficies duras hasta que las hayas vendado.
                </li>
                <li>
                Evita caminar sobre el pie lesionado si puedes, porque cualquier clase de presión puede aumentar el dolor.
                </li>
                <li>
                Si el dolor o el enrojecimiento de la zona aumentan, vuelve a visitar a tu médico porque puede que la herida esté infectada.     
                </li>
            </blockquote>
            <b> 5.       Prevención:</b>
            <blockquote>
            Si la herida se ha producido en el trabajo, evita que vuelva a suceder utilizando el calzado de seguridad indicado para tu profesión y los riesgos a los que estás expuesto. Siempre debes usar un calzado si vas a estar en zonas que creas que son inseguras. 
            </blockquote>
            </div>
            </div>
          </div> */
}
