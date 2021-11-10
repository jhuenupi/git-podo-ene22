import React,{useState} from 'react';

import Autocomplete from '@material-ui/core/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Stack from '@material-ui/core/Stack';

export default function Comunas() {
  const getComunas = async  () => {
    const url = "http://localhost:1337/comunas";
    const res = await fetch(url);
    const comunas = await res.json();
    
    return comunas;
  }
  const [itemscomunas, setComuna] = useState([]);
  
  const extraecomunas = () => {
    getComunas().then((newComuna) => {
      setComuna(newComuna);
      console.log (itemscomunas)
    });
  };

  //if (itemscomunas) return <h1>SI comunas</h1> 
    //if (todos) return <h1>{todos.length}</h1>

  return (    
    <>
    <extraecomunas/>
    {!itemscomunas ? (      
      <h1>NO HAY COMUNAS</h1>
    ):
    (    
      <Stack spacing={3} sx={{ width: 500 }}>
        <Autocomplete
          multiple
     x     id="tags-standard"
          options={top100Films}
          getOptionLabel={(option) => option.title}
          defaultValue={[top100Films[13]]}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Seleccione Multiples Comunas"
              placeholder="Mas comunas"
            />
          )}
        />      
      </Stack>    
    )}
    </>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'Cerrillos', year: 1994 },
  { title: 'Pedro Aguirre Cerda', year: 1972 },
  { title: 'Puente Alto', year: 1974 },
  { title: 'Las Condes', year: 2008 },
  { title: 'La Florida', year: 1957 },
  { title: "Macul", year: 1993 },
  { title: 'Maipu', year: 1994 },
  {
    title: 'Peñaflor',
    year: 2003,
  },
  { title: 'Providencia', year: 1966 },
  { title: 'Talagante', year: 1999 },
  {
    title: 'Cajon del Maipo',
    year: 2001,
  },
  {
    title: 'Pirque',
    year: 1980,
  },
  { title: 'Peñalolen', year: 1994 },
  { title: 'Isla de Maipo', year: 2010 },
  {
    title: 'Renca',
    year: 2002,
  },
  { title: "Quilicura", year: 1975 },
  { title: 'Lampa', year: 1990 },
  { title: 'La Reina', year: 1999 },
  { title: 'El Salto', year: 1954 },
  {
    title: 'La Pintana',
    year: 1977,
  },
  { title: 'Conchali', year: 2002 },
  { title: 'Huechuraba', year: 1995 },
  { title: 'Chicureo', year: 1991 },
  
];
