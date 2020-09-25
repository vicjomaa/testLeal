
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'
import './global.css';

const element =( 
    <App/>
);

const container = document.getElementById('app');
ReactDOM.render(element,container);