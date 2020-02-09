import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/ru';

export default class Date extends Component {

    render() {
        moment.locale('ru')
        const date = moment().format('MMMM DD, HH:mm')

        return (
            <div className='vidjet vidjet__date'>
                {date}
            </div>
        )
    }
}
