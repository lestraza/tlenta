import React from 'react';


function CurrencyModal(props) {    
    const { id, data } = props;

    const translateValutToRus = () => {

        const valuteRusTranslate = ['доллара США', 'ЕВРО']
        if (id === 'USD') {
            return valuteRusTranslate[0]
        } else {
            return valuteRusTranslate[1]
        }

    }
    const showValuteRate = () => {
        const { Value: currentValue, Previous: previousValue } = data[id];
        const differenceOfValues = currentValue - previousValue;
        return (
            <div>
                {currentValue} {differenceOfValues > 0 ? <div className="upwards arrow">↑</div> : 
                <div className="downwards arrow">↓</div> } 
                <div className='valute_difference'>({differenceOfValues.toFixed(4)})</div>
            </div>
        )
    }
    const renderPopUp = () => {
        return (
            <>
                <div>Курс {translateValutToRus()}</div>
                <div className='valute_rate'>{showValuteRate()}</div>

            </>
        )
    }

    return (
        <div className='currency_popup'>
            {renderPopUp()}
        </div>
    )
}

export default CurrencyModal
