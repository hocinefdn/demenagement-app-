

import ComponentMeuble from './item/component-meuble';

import {Grid } from '@mui/material';


const ListMeuble = (props)=> {


/*useEffect(() => {
    setMeuble(Salon);
  }, []);*/
 return(
  <Grid container spacing={12}>
    {props.componant.map(item=>(
      <Grid item sx={4}>
        <ComponentMeuble photo={item.photo}
        nomMeuble={item.nomMeuble}
         key={item.idMeuble}></ComponentMeuble>
</Grid>
    ))}
    
 </Grid>
 )
}
export default ListMeuble;