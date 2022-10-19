import { Grid,TextField ,Stack} from '@mui/material';
import React from 'react';
import { MapContainer,TileLayer,Marker, LayersControl } from 'react-leaflet';
import './map.css'
import RoutingMachine from './routing';
import {Typography} from '@mui/material';
import {Divider} from '@mui/material';
/*<Grid md={5} >
<Stack spacing={2}>
<TextField id="outlined-basic" label="adresse de départ" variant="outlined" />
<TextField id="outlined-basic" label="adresse arrivé" variant="outlined" />
</Stack>
</Grid>*/

/*<Grid item xs={6}>
<Typography
  variant="h6"
  sx={{ mb: 1.5, fontWeight: "bold" }}
  color="secondary"
>
  SLKFMDSQJKLM
</Typography>
</Grid>*/

     /*  <Grid  item xs={3}  > 
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}
      attributionControl={false}
      draggableWaypoints={false}
      id="map" className='map'
      >
        
  <TileLayer id='map'
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
    <RoutingMachine></RoutingMachine>
  
</MapContainer>
  
</Grid>*/

const Itineraire = () => {
    return (
        <Grid container xs={12} spacing={2}  >
          <Grid  item xs={12}   > 
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}
      attributionControl={false}
      draggableWaypoints={false}
      id="map" className='map'
      >
        
  <TileLayer id='map'
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
    <RoutingMachine></RoutingMachine>
  
</MapContainer>     
</Grid >
<Grid item xs={12}>
<Grid item xs={12}>
<Divider component={Typography}/>
<Typography
  sx={{ mb: 1.5, }}
  color="red"
>
  Adresse de départ
</Typography>

</Grid>
<Stack spacing={2} direction="row">
<TextField id="outlined-basic" label="Accès" variant="outlined" />
<TextField id="outlined-basic" label="Parking" variant="outlined" />
<TextField id="outlined-basic" label="Etage" variant="outlined" />
</Stack>
</Grid>
<Grid item xs={12}>
<Grid item xs={12}>
<Divider component={Typography}/>
<Typography
  sx={{ mb: 1.5, }}
  color="red"
>
  Adresse arrivé
</Typography>

</Grid>
<Stack spacing={2} direction="row">
<TextField id="outlined-basic" label="Accès" variant="outlined" />
<TextField id="outlined-basic" label="Parking" variant="outlined" />
<TextField id="outlined-basic" label="Etage" variant="outlined" />
</Stack>
</Grid>

</Grid>
      
    );
   
 
};


export default Itineraire;
