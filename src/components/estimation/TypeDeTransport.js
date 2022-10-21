import * as React from 'react';
import Box from '@mui/material/Box';

import {Tab} from '@mui/material';
import { TabContext,TabPanel,TabList } from '@mui/lab';
import ListMeuble from './listemeuble';
import Salon from './item/salon/meuble';
import  Chambre  from './item/chambre';
import Cuisine from './item/cuisine';
import Autre from './item/autre';
import { prixContext } from '../../contextprix/context';
export default function TypeDeTransport() {

    const [value, setValue] = React.useState("1");
    const values=React.useContext(prixContext);
let prixtransport=0;

 



 /*prixMeubles= (JSON.parse(window.localStorage.getItem('Salon'))).prix + (JSON.parse(window.localStorage.getItem('Cuisine'))).prix + (JSON.parse(window.localStorage.getItem('Chambre'))).prix +(JSON.parse(window.localStorage.getItem('Autre'))).prix*/


/* const updateprix={
 prixSalon:(JSON.parse(window.localStorage.getItem('Salon'))).prix,
 prixCuisine:(JSON.parse(window.localStorage.getItem('Cuisine'))).prix,
 prixChambre:(JSON.parse(window.localStorage.getItem('Chambre'))).prix,
 prixAutre:(JSON.parse(window.localStorage.getItem('Autre'))).prix
 }

Number(JSON.parse(window.localStorage.getItem(JSON.stringify(Autre))))
 setPrixMeuble(prixMeuble =>({
    ...prixMeuble,
    ...updateprix
 }))

values.setx(values.x+prixMeuble.prixSalon+prixMeuble.prixAutre+prixMeuble.prixChambre+prixMeuble.prixCuisine)*/



    const handleChange = (event, newValue) => {
      setValue(newValue);
    };


        
     return(
        <prixContext.Provider value={values}>
        <TabContext value={value} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider',width:"100%"}}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" centered 
           
          variant="fullWidth"
          >
            <Tab label="salon" value="1"  />
            <Tab label="chambre" value="2" />
            <Tab label="cuisine" value="3" />
            <Tab label="autre" value="4" />
            
          </TabList>
        </Box>
        <TabPanel value="1">
          
        <ListMeuble componant={Salon}></ListMeuble>


        </TabPanel>
        <TabPanel value="2">
            <ListMeuble componant={Chambre}></ListMeuble>
        </TabPanel>
        <TabPanel value="3">
            <ListMeuble componant={Cuisine}></ListMeuble>
        </TabPanel>
        <TabPanel value='4' >
           <ListMeuble componant={Autre}></ListMeuble>
        </TabPanel>
      </TabContext>
      </prixContext.Provider>

     )






   /* const pieces = ["Salon", "Cuisine/Salle à manger", "Electroménagers", "Chambre/Salle de bain"];
    const itemsSalon = ["Bibliothéque", "Table basse", "Porte-manteau", "Canapé", "Tiroir", "Meuble télé", "Télévision", "Chaises", "Rangement Chassures", "Fauteuil", "Table d'appoint", "Etagère"];
    const itemsCuisine = ["Buffet", "Table à manger", "Frigo", "Cuisiniére", "Machine à café", "Micro onde", "Etagère en verre", "Poubelle"];
    const itemsElectro = ["Réfregirateur", "Machine à laver", "Climatiseur", "Cuisinière", "Four", "Sèche-linge", "Lave-vaisselle"];
    const itemsChambre = ["Lit", "Télé", "Commode", "Cadre de lit", "Matelas", "Cadre de futon", "Miroir", "Table de nuit", "Valise", "Boite garde-robe"];
    let component;
    if (piece === "Salon") {
        component = itemsSalon.map((item) => {
            return (<MenuItem value={item}>{item}</MenuItem>)
        })
    }
    if (piece === "Cuisine/Salle à manger") {
        component = itemsCuisine.map((item) => {
            return (<MenuItem value={item}>{item}</MenuItem>)
        })
    }
    if (piece === "Electroménagers") {
        component = itemsElectro.map((item) => {
            return (<MenuItem value={item}>{item}</MenuItem>)
        })
    }
    if (piece === "Chambre/Salle de bain") {
        component = itemsChambre.map((item) => {
            return (<MenuItem value={item}>{item}</MenuItem>)
        })
    }




    function handleClick(e) {



        setListItem(prevNames => [...prevNames, item])
        console.log(listItem)

    }


    React.useEffect(() => {

    });

    return (
        <div className='flex'>
            <Box sx={{ maxWidth: 300 }}>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Pièces</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={piece}
                        label="Pièces"
                        onChange={handleChangePiece}
                        className="h-12 mb-4"
                    >

                        {pieces.map((item, index) => {
                            return (<MenuItem value={item} key={`${index}-itemMenu`}>{item}</MenuItem>)
                        })}

                    </Select>
                </FormControl>


                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Objet</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={item}
                        label="Objet"
                        onChange={handleChangeItem}
                        className="h-12 mb-4"
                    >
                        {component}
                    </Select>
                </FormControl>

                <TextField label="Nombre d'objets" type='number' className='mb-8' />


                <Button variant="contained" onClick={handleClick} >Ajouter</Button>

            </Box>
            <Box sx={{ maxWidth: 300 }}>
                <ListObjets list={listItem} />
            </Box>
        </div>
    );*/
}
