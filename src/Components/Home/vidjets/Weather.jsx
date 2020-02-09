import React, { Component } from 'react';
import {getWeather } from '../../requests/requests';


export default class Weather extends Component {

    state = {
        data: undefined,
        isModal: false
    }

    
    componentDidMount() {
        getWeather()
        .then(response => {
            this.setState({
                data: response.data.currently
            })            
        })
    }

    renderWeather = () => {   
        const { temperature, icon } = this.state.data;
        

        return (
            <div className="vidjet vidjet__weather">
                Москва
                <div className="vidjet__degree">
                    {Math.round(temperature)}&#176;
                </div>
                <img src={`../../../../images/weather_icons/${icon}.svg`} alt={icon}/>
            </div>
        )
    }
    
    render() {
        const { data } = this.state;

        return (
            <>
                { data && this.renderWeather()}
            </>
        )
    }
}


