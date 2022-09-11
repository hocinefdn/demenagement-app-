import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, TextField } from '@mui/material';
import SimpleBtn from "../buttons/SimpleBtn"
import ListObjets from './ListObjets';
export default function TypeDeTransport() {
    const [piece, setPiece] = React.useState('');
    const [item, setItem] = React.useState('');
    const [listItem, setListItem] = React.useState([]);

    const handleChangePiece = (event) => {
        setPiece(event.target.value);
    };
    const handleChangeItem = (event) => {
        setItem(event.target.value);
    };

    const pieces = ["Salon", "Cuisine/Salle à manger", "Electroménagers", "Chambre/Salle de bain"];
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
    );
}
