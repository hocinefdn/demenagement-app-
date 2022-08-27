import React from 'react';
import Button from '@mui/material/Button';
const SimpleBtn = (props) => {
    return (
        <div className='mt-4'>
            <Button variant="contained" color={props.color} >{props.label}</Button>
        </div>
    );
};

export default SimpleBtn;