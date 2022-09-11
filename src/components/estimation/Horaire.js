import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Heure from './Heure';

const isWeekend = (date) => {
    const day = date.day();

    return day === 0 || day === 6;
};

export default function Horaire() {
    const [value, setValue] = React.useState(dayjs());

    return (
        <div className='flex items-stretch space-x-64 mt-16 ml-12'>
            <div className='mt-8'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <StaticDatePicker
                        orientation="landscape"
                        openTo="day"
                        value={value}
                        shouldDisableDate={isWeekend}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </div>
            <Heure />
        </div>

    );


}




