import * as React from "react";
import {
  Grid,
  Box,
  Checkbox,
  FormGroup,
  FormControlLabel,
  FormControl,
  Radio,
  RadioGroup,
  FormLabel,
  MenuItem,
} from "@material-ui/core";

import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Regiones from "../../pages/Regiones/Regiones";
import BaseCard from "../../Components/BaseCard/BaseCard";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import "./ManDirecciones.css";

function ManDirecciones() {
  const numbers = [
    {
      value: "one",
      label: "En mi Domicilio",
    },
    {
      value: "two",
      label: "En Domicilio del Paciente",
    },
    {
      value: "three",
      label: "Ambos",
    },
  ];
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

  const [number, setNumber] = React.useState("");

  const handleChange3 = (event) => {
    setNumber(event.target.value);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // 2
  const [checked, setChecked] = React.useState(true);

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
            item
            xs={12}
            lg={8}
            sm={6}
            sx={{
              display: "flex",
              alignItems: "stretch",
            }}
          >
            <BaseCard
              sx={{ border: 0, width: "100%" }}
              className=""
              title="Direcciones de referencia"
            >
              <Box
                sx={{
                  border: 0,
                  textAlign: "center",
                }}
              >
                <TextField
                  fullWidth
                  id="standard-select-number"
                  variant="outlined"
                  select
                  label="Lugar de atención"
                  onChange={handleChange3}
                  value={number}
                  sx={{
                    mb: 2,
                  }}
                >
                  {numbers.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
              <Box
                sx={{
                  border: 0,
                  textAlign: "left",
                }}
              >
                <span>Región de atención:</span>
                {<Regiones />}
              </Box>
              <Box
                sx={{
                  border: 0,
                  textAlign: "left",
                }}
              >
                <p>Comuna de atención</p>
                {<Regiones />}
              </Box>
              <Box
                sx={{
                  border: 0,
                  textAlign: "left",
                }}
              >
                <p></p>
                <TextField
                  id="default-value"
                  label="Mi dirección de atención"
                  variant="outlined"
                  defaultValue=""
                  fullWidth
                  sx={{
                    mb: 2,
                  }}
                />
              </Box>
              <Box
                sx={{
                  border: 0,
                  textAlign: "left",
                }}
              >
                  <Button variant="contained">Grabar</Button>
                </Box>              
            </BaseCard>
          </Grid>
          {/* Región */}

 
        </Grid>
      </Box>
    </Box>
  );
}

export default ManDirecciones;
