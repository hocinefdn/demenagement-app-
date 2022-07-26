import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Itineraire from './Itineraire';
import TypeDeTransport from './TypeDeTransport';
import Horaire from './Horaire';
import Validation from './Validation';

import { prixContext } from '../../contextprix/context';
const steps = ['Itinéraire', 'Meuble', 'Horaire', 'Validation'];

export default function StepperEstimation() {

    
    


    




    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    const stepProps = {};

    let component;

    if (activeStep === 0) {
        component = <Itineraire />
    }

    if (activeStep === 1) {
        component = <TypeDeTransport  />
    }

    if (activeStep === 2) {
        component = <Horaire />
    }
    if (activeStep === 3) {
        component = <Validation />
    }

    const value=React.useContext(prixContext);
    return (
       <prixContext.Provider value={value}>
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    // const stepProps = {};
                    const labelProps = {};


                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <div className='p-4'> {component}</div>


                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />


                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
        </prixContext.Provider>
    );
}
