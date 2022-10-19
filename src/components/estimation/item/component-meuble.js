import * as React from 'react'; 

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

import {TextField} from '@mui/material';
const ComponentMeuble= (props) =>{

 const [nbrObjet,setnbrObjet]= React.useState(0);


 const handleChange = (event, newNbrObjet) => {
  setnbrObjet(newNbrObjet)
 };
    return(
<Card sx={{ width:150}}>
    <CardMedia
      component="img"
      height="140"
      image={props.photo}
      alt={props.nomMeuble}
     
    />
    <CardContent >
    <Typography gutterBottom component="div">
       {props.nomMeuble}
      </Typography>
      
    </CardContent>
    <CardActions>
    <TextField label="Nombre d'objets" type='number' className='mb-8'  value={nbrObjet} 
    onChange={handleChange}
    />
    </CardActions>
  </Card>

    )
}

export default ComponentMeuble;