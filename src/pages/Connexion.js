import React from 'react';
import SimpleBtn from '../components/buttons/SimpleBtn';
import SimpleInputs from '../components/inputs/SimpleInputs';

const Connexion = () => {
    return (
        <div className=' mt-32 border border-black w-1/4 mr-auto ml-auto p-8'>
            <div className='flex flex-col items-center'>
                <h2 className='text-xl mb-4'>Connectez-vous</h2>
                <SimpleInputs label="E-mail" color="success" />
                <SimpleInputs label="Mot de passe" color="success" />
                <SimpleBtn label="Se connecter" className="bg-red-500" />
            </div>
        </div>
    );
};

export default Connexion;