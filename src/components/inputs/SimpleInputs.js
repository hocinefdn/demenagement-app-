import React from 'react';
import { TextField } from '@mui/material';

const SimpleInputs = (props) => {
    return (
        <div>
            <TextField
                label={props.label}
                variant="standard"
                color={props.color}
                focused

            />

        </div>
    );
};

export default SimpleInputs;