import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DatosBasicos from '../DatosBasicos/DatosBasicos';
import RolTitulo from '../RolTitulo/RolTitulo';
import RedSocial from '../RedSocial/RedSocial';
import ManDirecciones from '../ManDirecciones/ManDirecciones';
import ManHorarios from '../ManHorarios/ManHorarios'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="view-content"> 
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 684 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Datos Básicos" {...a11yProps(0)} />
        <Tab label="Rol Título/Certificados" {...a11yProps(1)} />
        <Tab label="Redes Sociales" {...a11yProps(2)} />
        <Tab label="Direccion(es) de Referencia" {...a11yProps(3)} />
        <Tab label="Horarios de Atención" {...a11yProps(4)} />
        <Tab label="Servicios" {...a11yProps(5)} />
        <Tab label="Promoción" {...a11yProps(6)} />
        <Tab label="Fotos" {...a11yProps(7)} />
      </Tabs>
      <TabPanel value={value} index={0} style ={{width: "100%" }} >
          Datos Básicos
        <DatosBasicos/>
      </TabPanel>
      <TabPanel value={value} index={1} style ={{width: "100%" }} >
        Rol Titulo Certificados
        <RolTitulo/>
      </TabPanel>
      <TabPanel value={value} index={2} style ={{width: "100%" }} >
        Redes Sociales
        <RedSocial></RedSocial>
      </TabPanel>
      <TabPanel value={value} index={3} style ={{width: "100%" }} >
        
        <ManDirecciones/>
      </TabPanel>
      <TabPanel value={value} index={4} style ={{width: "100%" }} >
        
        <ManHorarios/>
      </TabPanel>
      <TabPanel value={value} index={5} style ={{width: "100%" }} >
        Servicios
      </TabPanel>
      <TabPanel value={value} index={6} style ={{width: "100%" }} >
        Promoción
      </TabPanel>
      <TabPanel value={value} index={7} style ={{width: "100%" }} >
        Fotos
      </TabPanel>      
    </Box>
    </div>
  );
}
