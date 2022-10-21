

import ComponentMeuble from './item/component-meuble';

import {Grid } from '@mui/material';

import * as React from 'react'
import { prixContext } from '../../contextprix/context';
const ListMeuble = (props)=> {
  const value=React.useContext(prixContext);
  
 return(
  <prixContext.Provider value={value}>
  
  <Grid container spacing={12}>
    {props.componant.map(item=>(
      <Grid item sx={12}>
        <ComponentMeuble photo={item.photo}
        nomMeuble={item.nomMeuble}
         key={item.idMeuble } prixDeplacement={item.prixDeplacement} l={props.componant}></ComponentMeuble>
</Grid>
    ))}
    
 </Grid>

 </prixContext.Provider>
 )
}
export default ListMeuble;