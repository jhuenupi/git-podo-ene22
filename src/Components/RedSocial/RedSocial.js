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
import { Typography } from "@material-ui/core";

function RedSocial() {
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
    <Box sx={{ border: 0, display: "flex", flexWrap: "nowrap", width: "100%" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Grid
            style={{  display: "flex", justifyContent: "flex-start" }}
            item
            lg={4}
            sm={6}
            sx={{
              display: "flex",
              alignItems: "stretch",
            }}
            
          >
                            <Typography
                variant="h7"
                sx={{
                  color: "primary.main",
                }}
              >                
                <p></p>
                <p>Link PodoUbica</p>
                <p> 
                <a target="_blank" href="http://www.linkedin.com/in/jhuenupi">www.podoubica.com/jhuenupi</a>
                </p>
              </Typography>

          </Grid>
          <Grid
            style={{ display: "flex", justifyContent: "flex-start" }}
            item
            md={12}
          >
            <Item>
              <TextField
                helperText="Facebook"
                id="urlpersonal"
                label="Facebook"
                InputProps={{ style: { textAlign: "right" } }}
              />
            </Item>
          </Grid>
          <Grid
            style={{ display: "flex", justifyContent: "flex-start" }}
            item
            md={12}
          >
            <Item>
              <TextField
                helperText="Instagram"
                id="instagram"
                label="Instagram"
                InputProps={{ style: { textAlign: "right" } }}
              />
            </Item>
          </Grid>
          <Grid
            style={{ display: "flex", justifyContent: "flex-start" }}
            item
            md={12}
          >
            <Item>
              <TextField
                helperText="Twitter"
                id="twitter"
                label="Twitter"
                InputProps={{ style: { textAlign: "right" } }}
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
            xs={12}         >
            <Item
              sx={{ border: 0 }}
              style={{ width: "30%", justifyContent: "flex-start" }}>
                <Button variant="contained">Grabar</Button>
            </Item>
          </Grid>               
        </Grid>
      </Box>
    </Box>
  );
}

export default RedSocial;