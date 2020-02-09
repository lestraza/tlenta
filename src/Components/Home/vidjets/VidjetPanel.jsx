import React from 'react';
import Currency from './Currency';
import Weather from './Weather';
import Date from './Date'

function WidjetPanel() {
    return (
        <div className='vidjet__container'>
            <Currency />
            <Weather />
            <Date />
       
        </div >
    )
}

export default WidjetPanel
