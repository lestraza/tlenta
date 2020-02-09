import React, { Component } from 'react';
import { getCurrency } from "../../requests/requests";

import CurrencyModal from './modals/CurrencyModal';

export default class Currency extends Component {

    state = {
        data: undefined,
        isModal: false,
        id: undefined
    }

    componentDidMount() {
        getCurrency()
            .then(response => {

                this.setState({
                    data: response.data.Valute
                })                
            })

            .catch((error) => {
                console.error(error)
            })
    }

    onMouseEnterHandler = (event) => {
        const id = event.target.id.toUpperCase();
        this.setState({
            isModal: true,
            id
        })


    }

    onMouseLeaveHandler = () => {
        this.setState({
            isModal: false

        })
    }

    renderCurrency = () => {

        const { Value: usdValue } = this.state.data.USD;
        const { Value: eurValue } = this.state.data.EUR;

        return (
            <>
                <div className="vidjet vidjet__currency">
                    КУРС ЦБ
                    <div className="vidjet__currency_container"
                        id="usd"
                        onMouseEnter={this.onMouseEnterHandler}
                        onMouseLeave={this.onMouseLeaveHandler}
                    >
                        $
                    </div> {usdValue.toFixed(2)}
                    <div className="vidjet__currency_container"
                        id="eur"
                        onMouseEnter={this.onMouseEnterHandler}
                        onMouseLeave={this.onMouseLeaveHandler}
                    >
                        €
                    </div> {eurValue.toFixed(2)}
                </div>

            </>
        )
    }


    render() {
        const { data, id } = this.state;
        return (
            <>
                {data && this.renderCurrency()}
                {this.state.isModal && <CurrencyModal data={this.state.data} id={id} />}
            </>
        )
    }

}
