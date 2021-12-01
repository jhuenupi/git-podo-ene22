import React, { Component } from "react";
import imgBlog1 from "../../images/HomePage/Blog/BLOG1_DETALLE.jpg";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import IconButton from '@mui/material/IconButton';
import CardActions from '@mui/material/CardActions';



export default class Bloguno extends Component {
  render() {
    return (
      <>
        <Grid container spacing={0.5} justifyContent="center">
          <Grid item xs={11} sx={{ width: 20 }}>
            <Typography variant="h3" component="div" gutterBottom>
              Blog PodoUbica
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
              “CUANDO HEREDAMOS UN CALZADO DEBEMOS PREGUNTARNOS..."
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              component="div"
            ></Typography>

            <Typography gutterBottom variant="h5" component="div">
              ¿ES RECOMENDABLE PARA LOS PIES DE LOS NIÑOS HEREDAR CALZADO?
            </Typography>
            <Typography
              style={{ wordWrap: "break-word" }}
              variant="body2"
              color="text.secondary"
            >
              Heredar el calzado de hermanos mayores o familiares es un hábito
              muy frecuente entre los padres y madres para los más pequeños, sin
              embargo, debemos respondernos si esta costumbre es aconsejable
              para la salud de sus pies. Lamentablemente la respuesta es NO. No
              hay dos pies iguales, ni los de una misma persona lo son. Un
              zapato heredado, en la mayoría de las ocasiones, está deformado y
              desgastado en la suela y otras partes, ya que previamente ha sido
              utilizado por otro niño, por tanto, esto puede tener consecuencias
              negativas en el desarrollo del pie y la forma de caminar del niño
              que lo recibe.
            </Typography>
            <Divider />
            <CardMedia
              component="img"
              height="200"
              image={imgBlog1}
              alt="green iguana"
            />
            <Divider />
            <Typography gutterBottom variant="h5" component="div">
              ¿QUÉ DEBEMOS SABER?
            </Typography>
            <Typography variant="body2" color="text.secondary">
              El pie se termina de formar completamente entorno a los 14 años,
              pasando por diferentes fases, pero a los 9 años ya está casi
              completamente formado. Esto quiere decir que antes se encuentra en
              un periodo de pleno desarrollo. Sin embargo, esto no significa que
              sea aconsejable utilizar zapatos heredados a partir de esta edad,
              ni siquiera cuando somos adultos.
            </Typography>
            <Divider />
            <Typography gutterBottom variant="h5" component="div">
              ¿Qué problemas trae usar un zapato heredado?{" "}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Incomodidad, molestias y rozaduras en el día a día y/o en la
              práctica deportiva. Restringir el movimiento de los dedos.
              Desequilibrio a la hora de andar o correr. Alterar la forma de
              pisar y caminar Afectar al desarrollo de la estructura del pie,
              influyendo directamente en el arco plantar. Aumentar las
              posibilidades de sufrir pie plano, uno de los problemas más
              comunes en los más pequeños. Modificar la biomecánica del niño
              repercutiendo directamente en tobillos, rodillas y cadera.
            </Typography>
            <Divider />
            <Typography gutterBottom variant="h5" component="div">
              CONSEJOS PARA CUIDAR LOS PIES DE LOS NIÑOS{" "}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              1.- Realizar una revisión podológica: Se recomienda acudir
              anualmente al podólogo para revisar la pisada. En los niños se
              aconseja llevarlos por primera vez entre los 4 ó 5 años, aunque si
              se detecta alguna anomalía (caminar de puntillas, inestabilidad,
              tropezar al andar, etc.) hay que llevarlos en ese momento para
              buscarle solución. El podólogo realizará un seguimiento para
              asegurarse de que el desarrollo del pie se está realizando
              correctamente y detectar determinadas patologías que pueden
              corregirse con ejercicios o un tratamiento, por ejemplo, las
              plantillas personalizadas.
              <p></p>
              <b>
                “Muchos de los problemas que sufren los niños en los pies se
                pueden corregir o evitar si se hace un diagnóstico temprano. En
                edades tempranas es mucho más fácil solucionar problemas en el
                pie de los niños”.
              </b>
              <p></p>
              2.- Escoger el calzado adecuado: A la hora de comprar zapatos para
              niños, es recomendable revisar la talla (en edades tempranas los
              pies están en continuo crecimiento) y que sean de un material
              transpirable, con refuerzo en el talón y una suela flexible.
              <p></p>
              En definitiva, heredar un calzado es una práctica que se lleva
              haciendo muchos años, sin embargo, es negativo para la salud de
              los pies de los más pequeños (y también en adultos). Cada niño,
              cada persona, tiene un pie diferente y una forma de caminar
              distinta.
              <p></p>
              <b> “EL CALZADO ES PERSONAL E INTRANSFERIBLE”</b>
              <p></p>
            </Typography>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Grid>
        </Grid>
      </>
    );
  }
}

{
  /* <div className="container">
<div class="valign-wrapper">
  <div class="hide-on-small-only">
    <blockquote>
      Heredar el calzado de hermanos mayores o familiares es un
      hábito muy frecuente entre los padres y madres para los
      más pequeños, sin embargo, debemos respondernos si esta
      costumbre es aconsejable para la salud de sus pies.
      Lamentablemente la respuesta es NO. No hay dos pies
      iguales, ni los de una misma persona lo son. Un zapato
      heredado, en la mayoría de las ocasiones, está deformado y
      desgastado en la suela y otras partes, ya que previamente
      ha sido utilizado por otro niño, por tanto, esto puede
      tener consecuencias negativas en el desarrollo del pie y
      la forma de caminar del niño que lo recibe.
    </blockquote>

    <img class="materialboxed" width="650" src={imgBlog1} />
    <h6>¿QUÉ DEBEMOS SABER?:</h6>

    <blockquote>
      El pie se termina de formar completamente entorno a los 14
      años, pasando por diferentes fases, pero a los 9 años ya
      está casi completamente formado. Esto quiere decir que
      antes se encuentra en un periodo de pleno desarrollo. Sin
      embargo, esto no significa que sea aconsejable utilizar
      zapatos heredados a partir de esta edad, ni siquiera
      cuando somos adultos.
    </blockquote>
    <h6>¿Qué problemas trae usar un zapato heredado?</h6>
    <blockquote>
      Incomodidad, molestias y rozaduras en el día a día y/o en
      la práctica deportiva. Restringir el movimiento de los
      dedos. Desequilibrio a la hora de andar o correr. Alterar
      la forma de pisar y caminar Afectar al desarrollo de la
      estructura del pie, influyendo directamente en el arco
      plantar. Aumentar las posibilidades de sufrir pie plano,
      uno de los problemas más comunes en los más pequeños.
      Modificar la biomecánica del niño repercutiendo
      directamente en tobillos, rodillas y cadera.
    </blockquote>
    <h6>CONSEJOS PARA CUIDAR LOS PIES DE LOS NIÑOS</h6>
    <blockquote>
      1.- Realizar una revisión podológica: Se recomienda acudir
      anualmente al podólogo para revisar la pisada. En los
      niños se aconseja llevarlos por primera vez entre los 4 ó
      5 años, aunque si se detecta alguna anomalía (caminar de
      puntillas, inestabilidad, tropezar al andar, etc.) hay que
      llevarlos en ese momento para buscarle solución. El
      podólogo realizará un seguimiento para asegurarse de que
      el desarrollo del pie se está realizando correctamente y
      detectar determinadas patologías que pueden corregirse con
      ejercicios o un tratamiento, por ejemplo, las plantillas
      personalizadas.
      <p></p>
      <b>
        “Muchos de los problemas que sufren los niños en los
        pies se pueden corregir o evitar si se hace un
        diagnóstico temprano. En edades tempranas es mucho más
        fácil solucionar problemas en el pie de los niños”.
      </b>
      <p></p>
      2.- Escoger el calzado adecuado: A la hora de comprar
      zapatos para niños, es recomendable revisar la talla (en
      edades tempranas los pies están en continuo crecimiento) y
      que sean de un material transpirable, con refuerzo en el
      talón y una suela flexible.
      <p></p>
      En definitiva, heredar un calzado es una práctica que se
      lleva haciendo muchos años, sin embargo, es negativo para
      la salud de los pies de los más pequeños (y también en
      adultos). Cada niño, cada persona, tiene un pie diferente
      y una forma de caminar distinta.
      <p></p>
      <b> “EL CALZADO ES PERSONAL E INTRANSFERIBLE”</b>
      <p></p>
    </blockquote>
  </div>
</div>
</div> */
}
