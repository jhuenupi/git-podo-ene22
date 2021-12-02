import React, { Component } from "react";
import imgConsejo1 from "../../images/HomePage/Consejos/consejo3_apoyo1.jpg";
import imgConsejo2 from "../../images/HomePage/Consejos/consejo3_apoyo2.jpg";
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
const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));
export default class Consejo3 extends Component {
  render() {
    return (
      <Grid container spacing={0.5} justifyContent="center">
        <Grid item xs={11} sx={{ width: 20 }}>
          <Typography variant="h3" component="div" gutterBottom>
            Consejos Podológicos
          </Typography>
          <p></p>
          <Typography variant="h5" component="div" gutterBottom>
            Cuidado del pie Geriátrico
          </Typography>
          <p></p>
          <Typography variant="h6" component="div" gutterBottom>
            1.- Higiene diaria en el pie geriátrico
          </Typography>
          <Divider />
          <Demo sx={{ background: "#efefef" }}>
            <List>
              {
                <ListItem>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <ListItemText
                    primary=""
                    secondary="Así evitamos la proliferación de bacterias y microorganismos."
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
                    secondary="Usar agua templada, un jabón neutro y una manopla suave."
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
                    secondary="Si existiera dificultad para llegar a los pies, se puede usar un
                                cepillo de mango largo, cepillando suave y sin uso de guantes."
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
                    secondary="Secar minuciosamente con una toalla suave, insistiendo bien entre
                                los dedos."
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
                    secondary="El paso final es la hidratación. Aplicar crema (se recomienda con
                                 alto porcentaje en urea) en todo el pie excepto y entre los dedos,
                                 ya que puede producir maceración, y es un cultivo para la
                                 formación de hongos."
                  />
                </ListItem>
              }
            </List>
          </Demo>
          <CardMedia
            component="img"
            height="auto"
            width="auto"
            image={imgConsejo1}
            alt=""
          />
          <Divider />
          <p></p>
          <Typography variant="h6" component="div" gutterBottom>
            2.- Examen de los pies
          </Typography>
          <Divider />
          <Demo sx={{ background: "#efefef" }}>
            <List>
              {
                <ListItem>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <ListItemText
                    primary=""
                    secondary="Teniendo los pies bien limpios y preparados debemos inspeccionar la planta y el dorso, prestando atención a los espacios digitales (uno por uno), y las uñas."
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
                    secondary="Tratemos de ponernos en un lugar cómodo y con buena iluminación, bien sea natural o artificial, ayudándonos de un espejo si fuese necesario."
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
                    secondary="En personas con movilidad reducida o falta de visión puede ayudarlo otra persona."
                  />
                </ListItem>
              }
            </List>
          </Demo>
          <Divider />
          <p></p>
          <Typography variant="h6" component="div" gutterBottom>
            3.- Cuidado de las uñas del pie
          </Typography>
          <Divider />
          <Demo sx={{ background: "#efefef" }}>
            <List>
              {
                <ListItem>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <ListItemText
                    primary=""
                    secondary="Es necesario siempre realizar el cuidado de las uñas en personas mayores y por manos de un podólogo."
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
                    secondary="El tema de uñas encarnadas, deformadas o gruesas debe tratarse por un profesional."
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
                    secondary="A veces las personas mayores pierden flexibilidad para llegar a los pies, y agudeza visual por lo que pueden provocarse heridas."
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
                    secondary="Las uñas deben cortarse rectas, y no demasiado cortas para evitar que al crecer se claven alrededor de la carne."
                  />
                </ListItem>
              }
            </List>
          </Demo>
          <CardMedia
            component="img"
            height="auto"
            width="auto"
            image={imgConsejo2}
            alt=""
          />
          <Divider />
          <p></p>
          <Typography variant="h6" component="div" gutterBottom>
            4.- Calzado adecuado y calcetines
          </Typography>
          <Divider />
          <Demo sx={{ background: "#efefef" }}>
            <List>
              {
                <ListItem>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <ListItemText
                    primary=""
                    secondary="Lo ideal para ir de compras por un par de zapatos, es por la tarde. Los pies se encuentran más dilatados a esas horas del día."
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
                    secondary="Los zapatos, lo ideal para personas mayores, es que sea de buena calidad, preferiblemente de piel o cuero, que no deje al descubierto pies y talones, transpirable, blando y ligeramente flexible."
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
                    secondary="La suela del zapato debe ser antideslizante y no demasiado gruesa, con buen contrafuerte en la parte trasera y puntera, sin que los dedos queden comprimidos."
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
                    secondary="El tacón debe ser de 2 a 3 centímetros, para mantener estabilización de retropié junto a una postura correcta."
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
                    secondary="El pie siempre debe ajustarse al zapato, y no el zapato al pie."
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
                    secondary="Los calcetines y medias deben ser suaves y absorbentes, preferiblemente de algodón."
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
                    secondary="Es recomendable que los calcetines se ajusten perfectamente al pie, que no queden grandes y formen pliegues o arrugas, o bien que queden estrechos y dificulten la circulación."
                  />
                </ListItem>
              }
            </List>
          </Demo>
        </Grid>
      </Grid>
      // <div className="container">
      //   <h1 className="text-center" style={{ paddingTop: "0%" }}>
      //     CUIDADO DEL PIE GERIÁTRICO{" "}
      //   </h1>
      //   <div className="valign-wrapper">
      //     <div className="hide-on-small-only">
      //       <h6>1.- Higiene diaria en el pie geriátrico</h6>
      //       <li>
      //         Así evitamos la proliferación de bacterias y microorganismos.
      //       </li>
      //       <li>Usar agua templada, un jabón neutro y una manopla suave.</li>
      //       <li>
      //         Si existiera dificultad para llegar a los pies, se puede usar un
      //         cepillo de mango largo, cepillando suave y sin uso de guantes.
      //       </li>
      //       <li>
      //         Secar minuciosamente con una toalla suave, insistiendo bien entre
      //         los dedos.{" "}
      //       </li>
      //       <li>
      //         El paso final es la hidratación. Aplicar crema (se recomienda con
      //         alto porcentaje en urea) en todo el pie excepto y entre los dedos,
      //         ya que puede producir maceración, y es un cultivo para la
      //         formación de hongos.
      //       </li>
      //       <p />
      //       <img className="materialboxed" width={650} src={imgConsejo1} />
      //       <p />
      //       <h6>2.- Examen de los pies</h6>
      //       <li>
      //         Teniendo los pies bien limpios y preparados debemos inspeccionar
      //         la planta y el dorso, prestando atención a los espacios digitales
      //         (uno por uno), y las uñas.
      //       </li>
      //       <li>
      //         Tratemos de ponernos en un lugar cómodo y con buena iluminación,
      //         bien sea natural o artificial, ayudándonos de un espejo si fuese
      //         necesario.{" "}
      //       </li>
      //       <li>
      //         En personas con movilidad reducida o falta de visión puede
      //         ayudarlo otra persona.
      //       </li>
      //       <p />
      //       <h6>3.- Cuidado de las uñas del pie</h6>
      //       <li>
      //         Es necesario siempre realizar el cuidado de las uñas en personas
      //         mayores y por manos de un podólogo.
      //       </li>
      //       <li>
      //         El tema de uñas encarnadas, deformadas o gruesas debe tratarse por
      //         un profesional.{" "}
      //       </li>
      //       <li>
      //         A veces las personas mayores pierden flexibilidad para llegar a
      //         los pies, y agudeza visual por lo que pueden provocarse heridas.
      //       </li>
      //       <li>
      //         Las uñas deben cortarse rectas, y no demasiado cortas para evitar
      //         que al crecer se claven alrededor de la carne.
      //       </li>
      //       <p />
      //       <img className="materialboxed" width={650} src={imgConsejo2} />
      //       <p />
      //       <h6>4.- Calzado adecuado y calcetines</h6>
      //       <li>
      //         Lo ideal para ir de compras por un par de zapatos, es por la
      //         tarde. Los pies se encuentran más dilatados a esas horas del día.
      //       </li>
      //       <li>
      //         Los zapatos, lo ideal para personas mayores, es que sea de buena
      //         calidad, preferiblemente de piel o cuero, que no deje al
      //         descubierto pies y talones, transpirable, blando y ligeramente
      //         flexible.{" "}
      //       </li>
      //       <li>
      //         La suela del zapato debe ser antideslizante y no demasiado gruesa,
      //         con buen contrafuerte en la parte trasera y puntera, sin que los
      //         dedos queden comprimidos.
      //       </li>
      //       <li>
      //         El tacón debe ser de 2 a 3 centímetros, para mantener
      //         estabilización de retropié junto a una postura correcta.
      //       </li>
      //       <li>
      //         El pie siempre debe ajustarse al zapato, y no el zapato al pie.
      //       </li>
      //       <li>
      //         Los calcetines y medias deben ser suaves y absorbentes,
      //         preferiblemente de algodón.
      //       </li>
      //       <li>
      //         Es recomendable que los calcetines se ajusten perfectamente al
      //         pie, que no queden grandes y formen pliegues o arrugas, o bien que
      //         queden estrechos y dificulten la circulación.{" "}
      //       </li>
      //       <p />
      //     </div>
      //   </div>
      // </div>
    );
  }
}
