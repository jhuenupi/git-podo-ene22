import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextareaAutosize from '@mui/material/TextareaAutosize';

function DatosBasicos() {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ border: 0, display: "flex", flexWrap: "nowrap" }}>
      <Box sx={{ flexGrow: 1 }}>
        {/* Foto */}
        <Grid container spacing={1}>
          <Grid
            justifyContent="flex-end"
            alignItems="flex-start"
            style={{ display: "flex", height: "170px"}}
            item
            xs={6}
          >
            <Item>
              <div
                style={{
                  align:"center",
                  height: 140,
                  width: 140,
                  backgroundColor: "rgb(233, 236, 239)",
                }}
              >
                <span
                  style={{
                    color: "rgb(166, 168, 170)",
                    font: "bold 8pt Arial",
                  }}
                >
                  140x140
                </span>
              </div>
            </Item>
          </Grid>
          <Grid
            alignItems="flex-end"
            direction="row"
            align="center"
            style={{ display: "flex" }}
            item
            xs={6}
          >
            <Button variant="contained">Subir Foto</Button>
          </Grid>
        <div ><br/></div>
        </Grid>
        {/* Rut, Nombre */}
        <Grid container spacing={0}>
          <Grid
            alignItems="flex-end"
            direction="row"
            align="center"
            style={{ display: "flex" }}
            item
            xs={5}
          >
            <Item>
              <TextField helperText="Ingrese su Rut" id="rut" label="Rut" />
            </Item>
          </Grid>
          <Grid
            item
            style={{ display: "flex", justifyContent: "flex-start" }}
            xs={7}
          >
            <Item style={{ width: "100%" }}>
              <TextField
                helperText="Ingrese su nombre"
                id="nombre"
                label="Nombre"
                style={{ width: "100%" }}
              />
            </Item>
          </Grid>
        </Grid>
        {/* Email  Fono1, Fono2*/}
        <Grid
          sx={{ border: 0 }}
          container
          spacing={0}
          justifyContent="flex-start"
        >
          {/* Email */}
          <Grid
            item
            container
            sx={{ border: 0 }}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              width: "100%",
            }}
            xs={6}
          >
            <Item
              sx={{ border: 0 }}
              style={{ width: "100%", justifyContent: "flex-start" }}
            >
              <TextField
                helperText="Ingrese su email"
                id="email"
                label="Email"
                style={{ width: "100%", justifyContent: "flex-start" }}
              />
            </Item>
          </Grid>
          {/* Fono #1 */}
          <Grid
            item
            container
            sx={{ border: 0 }}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              width: "100%",
            }}
            xs={3}
          >
            <Item
              sx={{ border: 0 }}
              style={{ width: "100%", justifyContent: "flex-start" }}
            >
              <TextField
                helperText="Fono #1"
                id="fono1"
                label="Fono (1)"
                style={{ width: "100%", justifyContent: "flex-start" }}
              />
            </Item>
          </Grid>
          {/* Fono #2 */}
          <Grid
            item
            container
            sx={{ border: 0 }}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              width: "100%",
            }}
            xs={3}
          >
            <Item
              sx={{ border: 0 }}
              style={{ width: "100%", justifyContent: "flex-start" }}
            >
              <TextField
                helperText="Fono #2"
                id="fono2"
                label="Fono (2)"
                style={{ width: "100%", justifyContent: "flex-start" }}
              />
            </Item>
          </Grid>
          {/* Sobre Mi*/}

          <Grid
            item
            container
            sx={{ border: 0 }}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              width: "100%",
            }}
            xs={12}
          >
            
            <Item
              sx={{ border: 0 }}
              style={{ width: "100%", justifyContent: "flex-start" }}
            >

            <TextField
              id="outlined-multiline-static"
              label="Sobre Mi"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
              }}
            />
            </Item>
          </Grid>
          <Grid
            item
            container
            sx={{ border: 0 }}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              width: "100%",
            }}
            xs={12}
          >
            
            <Item
              sx={{ border: 0 }}
              style={{ width: "100%", justifyContent: "flex-start" }}
            >

                <Button variant="contained">Grabar</Button>
            
            </Item>
          </Grid>          
        </Grid>
      </Box>
    </Box>
  );
}

export default DatosBasicos;
