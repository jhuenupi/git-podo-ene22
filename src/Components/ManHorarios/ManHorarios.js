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
  Typography,
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
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";

function ManHorarios() {
  const [valueInicio, setValueInicio] = React.useState(
    new Date("2020-01-01 08:00")
  );
  const [valueFin, setValueFin] = React.useState(new Date("2020-01-01 18:00"));
  return (
    <>
      <Box
        sx={{ border: 0, display: "flex", flexWrap: "nowrap", width: "100%" }}
      >
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
                sx={{ border: 1, width: "100%" }}
                className=""
                title="Horarios de Atención"
              >
                <Box
                  sx={{
                    border: 0,
                    textAlign: "justify",
                  }}
                >
                  <FormControlLabel
                    value="Lunes"
                    control={<Checkbox color="primary" />}
                    label="Lunes"
                    labelPlacement="right"
                  />

                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                      label="Horario Inicio"
                      value={valueInicio}
                      onChange={(newValueInicio) => {
                        setValueInicio(newValueInicio);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                  <text> </text>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                      label="Horario Termino"
                      value={valueFin}
                      onChange={(newValueFin) => {
                        setValueFin(newValueFin);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Box>
                <p/>
                {/* Martes */}
                <Box
                  sx={{
                    border: 0,
                    textAlign: "justify",
                  }}
                >
                  <FormControlLabel
                    value="Martes"
                    control={<Checkbox color="primary" />}
                    label="Martes"
                    labelPlacement="right"
                  />

                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                      label="Horario Inicio"
                      value={valueInicio}
                      onChange={(newValueInicio) => {
                        setValueInicio(newValueInicio);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                  <text> </text>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                      label="Horario Termino"
                      value={valueFin}
                      onChange={(newValueFin) => {
                        setValueFin(newValueFin);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Box>
                <p/>
                {/* Miercoles */}
                <Box
                  sx={{
                    border: 0,
                    textAlign: "justify",
                  }}
                >
                  <FormControlLabel
                    value="Miercoles"
                    control={<Checkbox color="primary" />}
                    label="Miercoles"
                    labelPlacement="right"
                  />

                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                      label="Horario Inicio"
                      value={valueInicio}
                      onChange={(newValueInicio) => {
                        setValueInicio(newValueInicio);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                  <text> </text>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                      label="Horario Termino"
                      value={valueFin}
                      onChange={(newValueFin) => {
                        setValueFin(newValueFin);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Box>
                <p/>
                {/* Jueves */}
                <Box
                  sx={{
                    border: 0,
                    textAlign: "justify",
                  }}
                >
                  <FormControlLabel
                    value="Jueves"
                    control={<Checkbox color="primary" />}
                    label="Jueves"
                    labelPlacement="right"
                  />

                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                      label="Horario Inicio"
                      value={valueInicio}
                      onChange={(newValueInicio) => {
                        setValueInicio(newValueInicio);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                  <text> </text>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                      label="Horario Termino"
                      value={valueFin}
                      onChange={(newValueFin) => {
                        setValueFin(newValueFin);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Box>
                <p/>
                {/* Viernes */}
                <Box
                  sx={{
                    border: 0,
                    textAlign: "justify",
                  }}
                >
                  <FormControlLabel
                    value="Viernes"
                    control={<Checkbox color="primary" />}
                    label="Viernes"
                    labelPlacement="right"
                  />

                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                      label="Horario Inicio"
                      value={valueInicio}
                      onChange={(newValueInicio) => {
                        setValueInicio(newValueInicio);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                  <text> </text>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                      label="Horario Termino"
                      value={valueFin}
                      onChange={(newValueFin) => {
                        setValueFin(newValueFin);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Box>
                <p/>
                {/* Sabado */}
                <Box
                  sx={{
                    border: 0,
                    textAlign: "justify",
                  }}
                >
                  <FormControlLabel
                    value="Sabado"
                    control={<Checkbox color="primary" />}
                    label="Sábado"
                    labelPlacement="right"
                  />

                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                      label="Horario Inicio"
                      value={valueInicio}
                      onChange={(newValueInicio) => {
                        setValueInicio(newValueInicio);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                  <text> </text>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                      label="Horario Termino"
                      value={valueFin}
                      onChange={(newValueFin) => {
                        setValueFin(newValueFin);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Box>
                <p/>
                {/* Domingo */}
                <Box
                  sx={{
                    border: 0,
                    textAlign: "justify",
                  }}
                >
                  <FormControlLabel
                    value="Domingo"
                    control={<Checkbox color="primary" />}
                    label="Domingo"
                    labelPlacement="right"
                  />

                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                      label="Horario Inicio"
                      value={valueInicio}
                      onChange={(newValueInicio) => {
                        setValueInicio(newValueInicio);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                  <text> </text>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                      label="Horario Termino"
                      value={valueFin}
                      onChange={(newValueFin) => {
                        setValueFin(newValueFin);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Box>
                <p/>
                {/* Grabar */}
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
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default ManHorarios;
