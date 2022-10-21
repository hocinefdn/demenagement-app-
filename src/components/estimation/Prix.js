import React from 'react';
import { useContext } from 'react';
import { prixContext } from '../../contextprix/context';
const Prix = (props) => {

    return (
        <div className='font-bold text-xl text-gray-500 flex justify-end mb-4'>
            <div>
                <div>Estimation de Prix</div>
                <div className='text-red-400'>{props.value} Da</div>
            </div>
        </div>
    );
};

export default Prix;