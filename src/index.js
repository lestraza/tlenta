import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './style.css';
import Routes from '../src/Components/HOC/Routes';

ReactDOM.render(<BrowserRouter>
    <Routes/>
</BrowserRouter>,
 document.getElementById('root'));


