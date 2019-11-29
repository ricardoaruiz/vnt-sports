import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom' 

import './index.scss';
import App from './App';

import 'font-awesome/css/font-awesome.css';

ReactDOM.render(
    <BrowserRouter>
        <App /> 
    </BrowserRouter>,    
    document.getElementById('root'));

