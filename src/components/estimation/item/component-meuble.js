import * as React from 'react'; 

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, TextField} from '@mui/material';
import { prixContext } from '../../../contextprix/context';
import Salon from './salon/meuble';
import Chambre from './chambre';
import Cuisine from './cuisine';
import Autre from './autre';
import { PropaneRounded } from '@mui/icons-material';
const ComponentMeuble= (props) =>{
  const x=props.nomMeuble.concat(props.l)

 const [nbrObjet,setnbrObjet]= React.useState(/*localStorage.getItem(x)?  Number(JSON.parse(localStorage.getItem(x)).nbr):*/0);
 const [price,setPrice]=React.useState(0);
const value=React.useContext(prixContext)

const change = (event)=>{
  setnbrObjet(event.target.value)
}
 const handleChange = (event) => {
   event.preventDefault()
   console.log('submi-')
  setPrice(event.target.value*props.prixDeplacement)
if(localStorage.getItem(x)===true){
  localStorage.removeItem(x)
}
  localStorage.setItem(x,JSON.stringify({
 prix:props.prixDeplacement, nbr:nbrObjet
  }

  ))
console.log(localStorage.getItem(x))
  switch (props.l) {
    case Salon:{
      value.setx(previousState => {
        return { ...previousState, prixSalon:value.prixSalon+Number(JSON.parse(localStorage.getItem(x)).prix)}
      });
      
    }
    break;
    case Chambre:{
      value.setx(previousState => {
        return { ...previousState, prixSalon:value.prixSalon+Number(JSON.parse(localStorage.getItem(x)).prix) }
      });
    }    
      break;
      case Cuisine:{
        value.setx(previousState => {
          return { ...previousState,prixSalon:value.prixSalon+Number(JSON.parse(localStorage.getItem(x)).prix) }
        });
      } 
      break;
      case Autre:{
        value.setx(previousState => {
          return { ...previousState, prixSalon:value.prixSalon+Number(JSON.parse(localStorage.getItem(x)).prix) }
        });
      } 





    default:
      break;
  
 }
  
 
 };
 
 
    return(
<Card sx={{ width:150}} onSubmit={e=>handleChange(e)}>
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
      <TextField label="Nombre d'objets" type='number' className='mb-8'  value={nbrObjet} 
     onChange={e=>change(e)} 
    />
      
    </CardContent>
    <CardActions>
    
    <Button type='submit'>ajouter</Button>
    </CardActions>
  </Card>

    )
}

export default ComponentMeuble;