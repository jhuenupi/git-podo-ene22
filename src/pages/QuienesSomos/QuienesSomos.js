import React from "react";
import { Card, CardContent, Typography, Box, Grid } from "@material-ui/core";
import img_mision from "../../../src/images/QSomos/mision.png";
import img_qsomos from "../../../src/images/Logo/LogoRedondo.png";
import img_vision from "../../../src/images/QSomos/vision.png";
import img_manifiesto from "../../../src/images/QSomos/Valores_4.png";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import StyleQuienesSomos from './QuienesSomos.css'



function QuienesSomos() {
  return (
    <Box>
      <Grid container spacing={0}>
        {/* ------------------------- row 1 ------------------------- */}
        <Grid item xs={12} lg={12}>
          <Box fullwidth sx={{ border: 0, width: "100%", maxWidth: 500 }}>
            <Typography
              variant="h3"
              color="primary"
              component="div"
              gutterBottom
            ></Typography>
          </Box>
        </Grid>

        {/* ------------------------- Quienes Somos ------------------------- */}
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          item
          xs={12}
          lg={4}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              width: 250,
              height: 350,
            }}
          >
            <ImageList
              sx={{ width: 250, height: 350 }}
              cols={1}
              rowHeight={250}
            >
              <ImageListItem key={1}>
                <img src={img_qsomos} srcSet={img_qsomos} loading="lazy" />
              </ImageListItem>
            </ImageList>
          </Box>
        </Grid>
        <Grid item xs={12} lg={8} alignItems="center" justifyContent="center">
          <Typography
            variant="h3"
            textAlign="center"
            color="primary"
            component="div"
            gutterBottom
          >
            Quienes Somos
          </Typography>
          <Typography variant="h6" textAlign="justify" gutterBottom>
            PodoUbica es una plataforma online que ha sido creada para
            Profesionales de la Podología, cuyo objetivo es ser su vitrina
            publicitaria en redes sociales. Mostramos cada una de las ofertas de
            manera georreferenciada, a fin de dar la mayor información acerca de
            la ubicación y su entorno, así como también de quienes prestan este
            tipo de servicios.
          </Typography>
        </Grid>
        {/* ------------------------- Visión ------------------------- */}
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          item
          xs={12}
          lg={4}
        >
          <Box
            sx={{
              width: 250,
              height: 350,
              margin: "center",
              align: "center",
            }}
          >
            <ImageList
              sx={{ width: 250, height: 350 }}
              cols={1}
              rowHeight={250}
            >
              <ImageListItem key={1}>
                <img src={img_vision} srcSet={img_vision} loading="lazy" />
              </ImageListItem>
            </ImageList>
          </Box>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Typography
            variant="h3"
            color="primary"
            textAlign="center"
            component="div"
            gutterBottom
          ></Typography>
          <Typography
            variant="h3"
            color="primary"
            textAlign="center"
            component="div"
            gutterBottom
          >
            Visión
          </Typography>
          <Typography variant="h6" gutterBottom>
            Ser una plataforma de servicios de atención podológica líder a nivel
            nacional, dedicada a entregar información, potenciar el conocimiento
            profesional y contribuir al bienestar social.
          </Typography>
        </Grid>
        {/* ------------------------- Misión ------------------------- */}
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          item
          xs={12}
          lg={4}
        >
          <Box
            sx={{
              width: 250,
              height: 350,
              margin: "center",
              align: "center",
            }}
          >
            <ImageList
              sx={{ width: 250, height: 350 }}
              cols={1}
              rowHeight={250}
            >
              <ImageListItem key={1}>
                <img src={img_mision} srcSet={img_mision} loading="lazy" />
              </ImageListItem>
            </ImageList>
          </Box>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Typography
            variant="h3"
            color="primary"
            textAlign="center"
            component="div"
            gutterBottom
          ></Typography>
          <Typography
            variant="h3"
            textAlign="center"
            color="primary"
            component="div"
            gutterBottom
          >
            Misión
          </Typography>
          <Typography variant="h6" gutterBottom>
            Recoger y organizar información en una plataforma relacionada a la
            oferta de servicios de atención podológica, de manera que sea
            accesible y que agregue valor para todos aquellos que buscan este
            servicio.
          </Typography>
        </Grid>
        {/* ------------------------- Manifiesto de Valores de PodoUbica ------------------------- */}
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          item
          xs={12}
          lg={4}
        >
          <Box
            sx={{
              width: 250,
              height: 300,
              margin: "center",
              align: "center",
            }}
          >
            <ImageList
              sx={{ width: 250, height: 350 }}
              cols={1}
              rowHeight={250}
            >
              <ImageListItem key={1}>
                <img
                  src={img_manifiesto}
                  srcSet={img_manifiesto}
                  loading="lazy"
                />
              </ImageListItem>
            </ImageList>
          </Box>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Typography
            variant="h3"
            textAlign="center"
            color="primary"
            component="div"
            gutterBottom
          >
            Manifiesto de Valores de PodoUbica
          </Typography>
          <ul className={StyleQuienesSomos.ul}>
            <li>
              <Typography variant="h6" gutterBottom component="div">
                Calidad: Buscamos la mejora continua en nuestros servicios con
                la experiencia de los profesionales de la podología.
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom component="div">
                Innovación: Proponemos un cambio en la forma de entregar los
                servicios, utilizando la tecnología como base de nuestra
                actividad, apoyando a los profesionales de la podología.
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom component="div">
                Cercanía: Somos el punto de encuentro entre el podologo y el
                paciente.
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom component="div">
                Inclusión y Diversidad: Creemos en todas y todos los
                profesionales que quieran ser parte de nuestra plataforma.
              </Typography>
            </li>
            <li>
              <Typography variant="h6" gutterBottom component="div">
                Igualdad: Velamos para que cada persona tenga acceso a
                atenciones de calidad.
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} lg={12}>
          <Box fullwidth sx={{ border: 0, width: "100%", maxWidth: 500 }}>
            <Typography
              variant="h3"
              color="primary"
              component="div"
              gutterBottom
            ></Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default QuienesSomos;
