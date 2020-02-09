import React, { Component } from 'react';
import VidjetPanel from './vidjets/VidjetPanel';
import News from '../Home/news/News';

export default class Home extends Component {
    render() {
        return (
            <div className='home'>
                <div className="wrapper">
                    <VidjetPanel />
                    <News />
                </div>
            </div>
        )
    }
}
