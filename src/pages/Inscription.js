import React from 'react';
import SimpleBtn from '../components/buttons/SimpleBtn';
import SimpleInputs from '../components/inputs/SimpleInputs';
const Inscription = () => {
    return (
        <div className='flex flex-col items-center mt-8'>
            <h2 className='text-xl mb-4'>Créer un compte</h2>
            <SimpleInputs label="Nom" color="success" />
            <SimpleInputs label="Prénom" color="success" />
            <SimpleInputs label="Téléphone" color="success" />
            <SimpleInputs label="E-mail" color="success" />
            <SimpleInputs label="Mot de passe" color="success" />
            <SimpleBtn label="S'inscrire" className="bg-red-500" />
        </div>
    );
};

export default Inscription;