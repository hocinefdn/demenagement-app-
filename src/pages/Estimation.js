import React from 'react';
import Prix from '../components/estimation/Prix';
import StepperEstimation from '../components/estimation/StepperEstimation';
import Header from '../components/Header';
const Estimation = () => {
    return (
        <div>
            <Header />
            <div className='p-8'>
                <Prix />
                <StepperEstimation />
            </div>
        </div>
    );
};

export default Estimation;