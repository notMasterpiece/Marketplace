import React from 'react';
import './spinners.scss';

const Spinner = () => {
    return (
        <div className='lds-wrap'>
            <div className="lds-roller">
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
        </div>
    );
};

export default Spinner;